import { motion } from "framer-motion";
import { Button } from "@mui/material";
import altar from "../assets/altar.png";
import Map from "../components/Map";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone, FaEnvelope, FaFacebookF } from "react-icons/fa6";
// import brideAndGroom from "../assets/bride-and-groom.png";

function Contact() {
  const contactInfo = [
    {
      title: "Phone",
      icon: <FaPhone />,
      value: "(859) 609-1450",
      link: "tel:8596091450",
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
      <div className="min-h-[400px] flex flex-col gap-4 justify-center items-center my-6">
        <div className="flex flex-col gap-2">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-2xl font-bold"
          >
            Contact Morning View Meadows
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="max-w-[650px]"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            iure ducimus facilis quia in, sint eveniet deleniti nemo ipsa
            dignissimos soluta quod alias voluptas quo ex quos! Dicta, atque
            cum!
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="max-h-[1275px] overflow-hidden"
        >
          <iframe
            className="w-[650px] h-full min-h-[1275px] overflow-hidden"
            src="https://docs.google.com/forms/d/e/1FAIpQLScBZzDHMbriSW8I1zhTQR4AtcVlLKkTNtNVA3lhflfGcYdIbg/viewform?embedded=true"
          >
            Loading…
          </iframe>
        </motion.div>
      </div>

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

export default Contact;
