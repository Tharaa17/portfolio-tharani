import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { FaPhp, FaNodeJs, FaHtml5 } from "react-icons/fa"; // PHP, Node.js, HTML icons
import { SiMysql } from "react-icons/si"; // MySQL icon
import { motion } from "motion/react";
import { animate } from 'motion';


const iconVariants = (duration) => ({
  initial:{y:-10},
  animate:{
    y:[10, -10],
    transition: {
      duration: duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x: -100}}
      transition={{duration:1.5}}
      
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" /> {/* ReactJS */}
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPhp className="text-7xl text-indigo-500" /> {/* PHP */}
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-orange-400" /> {/* MySQL */}
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" /> {/* Node.js */}
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-600" /> {/* HTML */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
 