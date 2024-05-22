// app/components/Footer.jsx

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-slate-50 text-slate-900 p-2">
      <div className="flex justify-center gap-2">
        Made with ❤️ by Faran Javed
        <a
          href="https://linkedin.com/in/faranjaved"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/iamfaran"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
