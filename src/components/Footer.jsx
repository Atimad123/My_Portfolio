import { FaHeart, FaRocket } from "react-icons/fa";
import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="pt-12 pb-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Séparateur */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8" />
        
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-gray-300 font-medium">
            © {new Date().getFullYear()} {profile.name}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-1 text-xs text-gray-500">
            <span>Designed &amp; Developed with</span>
            <FaHeart className="text-red-400 text-xs animate-pulse" />
            <span>using React, Tailwind CSS &amp; Framer Motion</span>
          </div>
          
          <p className="text-xs text-gray-600 mt-1 flex items-center gap-1.5">
            <FaRocket className="text-blue-400 text-[10px]" />
            Built for AI Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;