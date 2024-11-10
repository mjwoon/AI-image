import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai"; 
const app = express();

app.use(express.json()); 

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  
});

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E!!");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024", 
    });

    const image = aiResponse.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json(error?.response?.data?.error?.message || "An error occurred");
  }
});

export default router;
