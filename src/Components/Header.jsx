// Header.jsx
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/aboutMe" },
    { label: "Skills", path: "/my-skills" },
    { label: "Projects", path: "/my-projects" },
    { label: "Contact", path: "/contactMe" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 h-16 bg-gradient-to-r from-slate-800 to-black shadow-2xl shadow-slate-700 z-10 flex items-center justify-center">
      <nav className="flex space-x-4 md:space-x-6">
        {links.map(({ label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="text-gray-300 text-lg font-bold hover:text-white transition"
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
};


