import React, { useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  // Simple scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      {children}
    </>
  );
};

export const CustomCursor = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const [cursorText, setCursorText] = React.useState("");
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverText = target.getAttribute("data-cursor");
      if (hoverText) {
        setCursorText(hoverText);
        setIsHovering(true);
      } else if (target.closest("button, a, [role='button']")) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center text-[10px] text-primary-foreground font-bold uppercase tracking-tighter text-center px-4"
      animate={{
        x: position.x - (isHovering ? 40 : 8),
        y: position.y - (isHovering ? 40 : 8),
        width: isHovering ? 80 : 16,
        height: isHovering ? 80 : 16,
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="whitespace-nowrap"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};
