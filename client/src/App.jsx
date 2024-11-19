import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logoSmall } from "./assets";
import { Home, CreatePost } from "./page";
const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logoSmall} alt="logo" className="w-20 object-contain" />
        </Link>
        <div className="font-bold text-3xl">나키우기</div>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#C5D887] hover:bg-[#FFD66C] shadow-md text-white px-4 py-2 rounded-md hover:shadow-inner  "
        >
          Write Diary
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#F6F8F0] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
