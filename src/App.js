import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Experience from "./pages/experience.js";
import Projects from "./pages/projects.js";
import Skills from "./pages/skills.js";
import NavBar from "./components/navbar.js";
import Footer from "./components/footer.js";
import img from "./assets/vzu.png";

// the img is located in src/assets/zu.HEIC and the class name is "zu-photo"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          class="flex -space-x-1 place-content-center"
          onlclick="location.href='index.html'"
        >
          <img
            src={img}
            alt="VNU Logo"
            className="zu-photo"
            class="inline-block h-20 w-20 m-2 rounded-full ring-2 ring-white"
          />
          <div class="self-center pl-2">
            <h1 class="text-3l font-sans relative">Du Van Nguyen</h1>
            <p class="text-sm text-gray-600">Software Engineer</p>
          </div>
        </div>
      </header>
      <NavBar />
      <div class="pb-14">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
