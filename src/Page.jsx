import React, { useRef, useEffect } from "react";
import "./page.styles.scss";
import img from "./1.jpg";

import { motion } from "framer-motion";

const Page = () => {
  let container = useRef(null);
  let image = useRef(null);

  useEffect(() => {}, []);
  return (
    <section>
      <div className="page">
        <>
          <h1>Video</h1>
          <motion.div
            ref={(el) => (container = el)}
            className="image-container"
          >
            <motion.img
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
              transition={{
                easing: [0.42, 0, 0.58, 1],
                delay: 1,
                duration: 0.6,
              }}
              ref={(el) => (image = el)}
              src={img}
              alt="promo"
            ></motion.img>
            <motion.div
              initial={{ width: `100%` }}
              animate={{ width: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="animated-block"
            ></motion.div>
          </motion.div>
        </>
      </div>
    </section>
  );
};

export default Page;
