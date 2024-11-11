import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";
import axios from "axios";
import fs from "fs";

const app = express();
app.use(express.json());

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E!!");
});

router.route("/").post(async (req, res, next) => {
  let imageURL = "";
  let imageBinaryData = "";

  try {
    /** @type {string} */
    const PROMPT = req.body;

    const aiResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt: PROMPT,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const imgFileName = `sample-${Date.now()}.png`;
    const imgFilePath = `./public/images/${imgFileName}`;

    if (aiResponse == "url") {
      imageURL = res.data[0].url;

      axios({
        url: imageURL,
        responseType: "stream",
      })
        .then((res) => {
          res.data
            .pipe(fs.createWriteStream(imgFilePath))
            .on("finish", () => {
              console.log("Image saved successfully.");
            })
            .on("error", (error) => {
              console.error("Error saving image:", err);
            });
        })
        .catch((error) => {
          console.error("Error downloading image:", err);
        });
    } else {
      imageBinaryData = response.data[0].b64_json;
      const buffer = Buffer.from(imageBinaryData, "base64");
      fs.writeFileSync(imgFilePath, buffer);
      imageURL = `/images/${imgFileName}`;
    }

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(error?.response?.data?.error?.message || "An error occurred");
  }
});

export default router;
