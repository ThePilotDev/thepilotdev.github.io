import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Check } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("thepilotdev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-white minecraft-font">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 text-balance max-w-2xl mx-auto">
            Interested in collaborating on a project or have a custom add-on idea? 
            I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="mailto:contact@thepilotdev.com"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-xl font-semibold overflow-hidden transition-all hover:border-zinc-700 hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span>Email Me</span>
            </a>
            
            <button
              onClick={handleCopyDiscord}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#5865F2] text-white rounded-xl font-semibold overflow-hidden transition-all hover:bg-[#4752C4] hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(88,101,242,0.3)] hover:shadow-[0_0_40px_rgba(88,101,242,0.5)]"
            >
              {copied ? <Check className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
              <span>{copied ? "Copied Username!" : "Discord: thepilotdev"}</span>
            </button>
          </div>
        </motion.div>

        <div className="pt-12 border-t border-zinc-800">
          <p className="text-sm text-zinc-600">
            © 2024 ThePilotDev. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
