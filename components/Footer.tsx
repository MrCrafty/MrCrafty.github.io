import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="snap-start h-screen bg-gray-950 text-gray-400 flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,50,255,0.05),transparent_50%)]"></div>
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">John Doe</h2>
          <p className="text-gray-400">
            Building the future, one line of code at a time
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:john@example.com"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
