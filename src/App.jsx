// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Contact } from "./Components/Contact";

export const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 to-black animate-[slide_2s_ease-out]">
      <Router>
        <Header />
        <div className="pt-16">{/* push content below the 4rem‐tall header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<About />} />
            <Route path="/my-skills" element={<Skills />} />
            <Route path="/contactMe" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
