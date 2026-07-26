import { FaHeart } from "react-icons/fa";
import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/50 text-center text-gray-400">
      <div className="container-custom">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}. 
          <span className="inline-flex items-center gap-1 mx-1">
            Made with <FaHeart className="text-red-400 text-xs" /> 
          </span>
          using React, Tailwind CSS & Framer Motion
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Built for innovation · AI Engineer
        </p>
      </div>
    </footer>
  );
}

export default Footer;