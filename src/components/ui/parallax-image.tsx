import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const ParallaxImage = ({ src, alt, className, containerClassName }: ParallaxImageProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <div ref={ref} className={cn("relative overflow-hidden", containerClassName)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.2 }}
        className={cn("w-full h-full object-cover", className)}
      />
    </div>
  );
};
