import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("images");

  console.log(docs);

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="image-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}
