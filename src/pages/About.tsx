import { motion } from "framer-motion";
import { Button } from "@mui/material";
import altar from "../assets/altar.png";
import Map from "../components/Map";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone, FaEnvelope, FaFacebookF } from "react-icons/fa6";
import venue from "../assets/10.jpg";
// import brideAndGroom from "../assets/bride-and-groom.png";

function About() {
  const contactInfo = [
    {
      title: "Phone",
      icon: <FaPhone />,
      value: "(859) 393-2304",
      link: "tel:8593932304",
    },
    {
      title: "Email",
      icon: <FaEnvelope />,
      value: "Morningviewmeadowbarn@gmail.com",
      link: "mailto:Morningviewmeadowbarn@gmail.com",
    },
    {
      title: "Facebook",
      icon: <FaFacebookF />,
      value: "Morning View Meadows",
      link: "https://www.facebook.com/Morning-View-Meadows-102502191/",
    },
  ];

  return (
    <div>
      <div className="min-h-[400px] flex flex-col md:flex-row md:items-center gap-4 justify-center my-6">
        <div className="flex flex-col gap-2 my-6">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-2xl font-bold"
          >
            A Countryside Escape for Unforgettable Celebrations
          </motion.h2>

          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-lg italic"
          >
            A Hidden Gem in Kentucky’s Countryside
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Tucked away in the serene hills of Morning View, KY, Morning View
            Meadows is a breathtaking wedding venue where rustic charm meets
            timeless elegance. Whether you dream of exchanging vows under the
            open sky, dancing in a beautifully restored barn, or celebrating
            with loved ones in a tranquil countryside setting, we’re here to
            make your vision come to life.{" "}
          </motion.p>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-lg font-bold"
          >
            <a href="/contact">
              <Button variant="outlined">Book Now</Button>
            </a>
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
      <div className="min-h-[400px] flex flex-col md:flex-row md:items-center gap-4 justify-center my-6">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="max-h-72 md:max-h-92 overflow-hidden"
        >
          <img src={venue} alt="altar" className="w-full object-cover " />
        </motion.div>
        <div className="flex flex-col gap-2 my-6">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-2xl font-bold"
          >
            The Story Behind Morning View Meadows
          </motion.h2>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Morning View Meadows was founded with a passion for love, nature,
            and timeless celebrations. Originally a historic farm, our venue has
            been thoughtfully transformed into a romantic event space while
            preserving its authentic charm. With a commitment to hospitality, we
            welcome couples to create unforgettable moments in this magical
            setting.
          </motion.p>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-lg font-bold"
          >
            <a href="/contact">
              <Button variant="outlined">Book Now</Button>
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="max-h-72 md:max-h-92 overflow-hidden"
      >
        <Map />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="max-h-72 md:max-h-92 overflow-hidden"
      >
        <a
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-2 my-6 hover:underline text-gray-500 hover:text-gray-800 "
          href="https://www.google.com/maps/place/3760+Moffett+Rd,+Morning+View,+KY+41063/@38.8711089,-84.4635716,755m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8841bd6996f4bf09:0xee7ae61760fd9d8!8m2!3d38.8711089!4d-84.4609967!16s%2Fg%2F11p_1wdfh1?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
        >
          <FaMapLocationDot />
          3760 Moffett Road, Morning View, KY
        </a>
      </motion.div>
      {/* Contact Circles */}
      <div className="flex justify-center gap-4 my-6 flex-col sm:flex-row">
        {contactInfo.map((info, index) => (
          <motion.a
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            key={index}
            className="flex flex-col items-center gap-2 text-gray-500 bg-gray-100 hover:bg-gray-50 p-6 size-24 rounded-full hover:underline hover:text-amber-400"
            href={info.link}
          >
            <div className="text-lg ">{info.icon}</div>
            <div className="text-sm font-bold">{info.title}</div>
            {/* <div className="text-sm">{info.value}</div> */}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default About;
