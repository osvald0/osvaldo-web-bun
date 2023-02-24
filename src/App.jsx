import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Github from "./pages/Github";
import Linkedin from "./pages/Linkedin";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="linkedin" element={<Linkedin />} />
          <Route path="github" element={<Github />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
