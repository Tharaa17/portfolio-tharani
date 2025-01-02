import React from "react";
import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Achievements
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-40"
      >
        {ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col md:flex-row items-center space-x-4"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-40 h-40 rounded shadow-md object-cover"
            />
            {/* Text */}
            <div>
              <h6 className="text-lg font-semibold">{item.title}</h6>
              <p className="text-neutral-400">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
