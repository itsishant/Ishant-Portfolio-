import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Contact } from "./Components/Contact";
import { Projects } from "./Components/Projects";
import { BackgroundBeams } from "./Components/ui/background-beams";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`relative min-h-screen w-full ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      } overflow-hidden transition-colors duration-300`}
    >
      <div className="relative z-10">
        <Router>
          <Header />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutMe" element={<About />} />
              <Route path="/my-skills" element={<Skills />} />
              <Route path="/contactMe" element={<Contact />} />
              <Route path="/my-projects" element={<Projects />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};
