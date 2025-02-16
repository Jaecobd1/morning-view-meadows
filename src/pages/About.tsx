import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import altar from "../assets/altar.png";
import brideAndGroom from "../assets/bride-and-groom.png";

function About() {
  return (
    <div>
      <div className="min-h-[400px] flex flex-col md:flex-row md:items-center gap-4 justify-center my-6">
        <div className="flex flex-col gap-2">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-lg font-bold"
          >
            About Morning View Meadows
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            iure ducimus facilis quia in, sint eveniet deleniti nemo ipsa
            dignissimos soluta quod alias voluptas quo ex quos! Dicta, atque
            cum!
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-lg font-bold"
          >
            <Button variant="outlined">Book Now</Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="max-h-72 md:max-h-92 overflow-hidden"
        >
          <img src={altar} alt="altar" className="w-full object-cover " />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
