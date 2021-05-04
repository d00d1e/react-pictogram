import React from "react";
import { motion } from "framer-motion";

export default function Modal({ selectedImg, setSelectedImg }) {
  const handleModalClose = (e) => {
    if (e.target.classList.contains("overlay")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="overlay"
      onClick={handleModalClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt=""
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}
