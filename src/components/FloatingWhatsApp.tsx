import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-card border border-border rounded-2xl p-5 shadow-2xl w-72"
          >
            <p className="font-heading font-bold text-foreground text-sm mb-1">
              Agende sua consulta
            </p>
            <p className="font-body text-foreground/50 text-xs mb-4">
              Escolha o especialista:
            </p>
            <div className="space-y-2.5">
              <a
                href="https://wa.link/izazjx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-xl px-4 py-3 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Dr. Alfredo Metzger</p>
                  <p className="font-body text-foreground/50 text-xs">Humana Ortopedia</p>
                </div>
              </a>
              <a
                href="https://wa.me/5551991932662"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-xl px-4 py-3 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Dr. Carlos Vieira</p>
                  <p className="font-body text-foreground/50 text-xs">Medicina da Dor</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={!open ? { scale: [1, 1.1, 1] } : {}}
        transition={!open ? { repeat: Infinity, duration: 2, repeatDelay: 3 } : {}}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default FloatingWhatsApp;
