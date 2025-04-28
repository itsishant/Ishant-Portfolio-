  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import { Header } from "./Components/Header";
  import { Home } from "./Components/Home";
  import { About } from "./Components/About";

  export const App = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-slate-800 to-black animate-[slide_2s_ease-out]">
        
        <Router>
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<About />} />
            <Route path="/my-projects" />
            <Route path="/my-skills" />
            <Route path="/contactMe" /> 
          </Routes> 
        </Router>
      </div>
    );
  };
