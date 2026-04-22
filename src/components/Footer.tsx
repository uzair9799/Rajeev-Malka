import { motion } from 'motion/react';
import { MousePointer2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 py-8 text-center opacity-50">
      <div className="container mx-auto px-4">
        <div className="relative inline-block font-sans text-[10px] uppercase tracking-[2px] text-cream">
          Designed & Developed by{' '}
          <span className="relative inline-block">
            <motion.a
              href="https://www.instagram.com/sayed__uzairr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-red-500 font-bold transition-colors"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.1 }}
            >
              ❤️ Sayed Mohd Uzair
            </motion.a>
            
            {/* Roaming Finger */}
            <motion.div
              className="absolute pointer-events-none text-red-500"
              animate={{
                x: [-20, 140, 140, -20, -20],
                y: [-5, -5, 15, 15, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <MousePointer2 size={12} fill="currentColor" />
            </motion.div>
          </span>
        </div>
      </div>
    </footer>
  );
}
