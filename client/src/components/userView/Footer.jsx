import { motion } from "framer-motion";
import { Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/muhammad-adnan-a479052a1", 
    label: "LinkedIn",
  },
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/ADNUKUNHOME",
    label: "GitHub",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/adhnan.abdullah",
    label: "Instagram",
  },
];

const navLinks = [
  { name: "Home", to: "/user/home" },
  { name: "About", to: "/user/about" },
  { name: "Skills", to: "/user/skills" },
  { name: "Projects", to: "/user/projects" },
  { name: "Blogs", to: "/user/blogs" },
  { name: "Contact", to: "/user/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-10  text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center space-y-6"
      >
        {/* Socials */}
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.to} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Muhammad Adnan | All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
