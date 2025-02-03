import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function UseInView() {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      className="relative mx-auto grid h-32 w-96 place-content-center"
    >
      <h1 className="relative z-0 text-3xl font-black uppercase">ok</h1>
      <motion.div
        animate={{
          y: inView ? "-100%" : "0%",
        }}
        className="absolute bottom-0 left-0 top-0 z-10 w-1/3 bg-indigo-500"
      ></motion.div>
      <motion.div
        animate={{
          y: inView ? "100%" : "0%",
        }}
        className="absolute bottom-0 left-1/3 top-0 z-10 w-1/3 bg-indigo-500"
      ></motion.div>
      <motion.div
        animate={{
          y: inView ? "-100%" : "0%",
        }}
        className="absolute bottom-0 left-2/3 top-0 z-10 w-1/3 bg-indigo-500"
      ></motion.div>
    </div>
  );
}
