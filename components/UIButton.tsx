"use client";
import { motion } from "framer-motion";
export default function UIButton({ children, href, className="", variant="primary" }:{
  children: React.ReactNode; href?: string; className?: string; variant?: "primary"|"outline"|"soft"|"ghost";
}){
  const Comp:any = href ? "a" : "button";
  const map = {
    primary: "btn btn-pill btn-primary",
    outline: "btn btn-pill btn-outline",
    soft: "btn btn-pill btn-soft",
    ghost: "btn btn-pill btn-ghost",
  }[variant];
  return (
    <motion.div whileHover={{ y:-2 }} whileTap={{ y:0 }} className="inline-block">
      <Comp href={href} className={`${map} ${className}`}>{children}</Comp>
    </motion.div>
  );
}
