import { motion } from 'motion/react';

interface SectionDotsProps {
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionDots({ className = '', align = 'center' }: SectionDotsProps) {
  return (
    <div className={`flex gap-2 ${align === 'center' ? 'justify-center' : 'justify-start'} ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -6, 0], 
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
          className="w-1.5 h-1.5 rounded-full bg-chef-white"
        />
      ))}
    </div>
  );
}
