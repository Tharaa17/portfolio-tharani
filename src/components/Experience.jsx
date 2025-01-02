import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "motion/react";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl font-bold"
          >
            Volunteering
          </motion.h2>
          <div>
            {EXPERIENCES.map((item, index) => (
              <div
                key={index}
                className="mb-8 flex flex-wrap lg:justify-center items-center"
              >
                {/* Image Section */}
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/4 flex justify-center"
                >
                  <img
                    src={item.image}
                    alt={item.role}
                    className="mb-6 rounded shadow-lg"
                    style={{ width: "300px", height: "300px", objectFit: "cover" }}
                  />
                </motion.div>
    
                {/* Text Section */}
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4 px-4"
                >
                  <h6 className="mb-2 text-xl font-semibold">{item.role}</h6>
                  <p className="mb-2 text-neutral-400">{item.organization}</p>
                  {item.institution && (
                    <p className="mb-2 text-neutral-400">{item.institution}</p>
                  )}
                  {item.year && (
                    <p className="mb-2 text-neutral-400 font-medium">{item.year}</p>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      );
    };
  
  export default Experience;