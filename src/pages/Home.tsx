import React from "react";
import hero from "../assets/hero.png";
import altar from "../assets/altar.png";
import brideAndGroom from "../assets/bride-and-groom.png";
import { motion } from "motion/react";
import Button from "@mui/material/Button";
function Home() {
  return (
    <div>
      <div className="relative min-h-[400px] max-h-[600px] overflow-hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="sm:absolute bottom-0 left-0 right-0 text-center bg-white/80 text-grey-800 px-6 py-4 "
        >
          <h1 className="text-lg font-bold">Welcome to</h1>
          <h1 className="text-4xl font-bold font-display">
            Morning View Meadows
          </h1>
          <p className="">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </motion.div>
        <img src={hero} alt="hero" className="w-full object-cover" />
      </div>
      <div className="min-h-[400px] flex flex-col md:flex-row md:items-center gap-4 justify-center my-6">
        <div className="flex flex-col gap-2">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-lg font-bold"
          >
            Our Venue
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
      <div className="min-h-[400px] flex flex-col md:flex-row md:items-center md:justify-between gap-4 justify-center my-6">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="max-h-72 md:max-h-92 overflow-hidden"
        >
          <img
            src={brideAndGroom}
            alt="Bride and Groom"
            className="w-full object-cover max-w-[700px] "
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col gap-2 mr-64"
        >
          <h2 className="text-lg font-bold">Why choose Us?</h2>
          <ul className="list-disc px-4">
            <li>Great Venue</li>
            <li>Great Food</li>
            <li>Great Service</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
