import React, { useRef, useEffect, useState } from "react";
import "./page.styles.scss";
import img from "./1.jpg";

import VideoModal from "./VideoModal";
import { CgPlayButton } from "react-icons/cg";

import { motion } from "framer-motion";

const Page = () => {
  let [modalAcive, modalAciveSet] = useState(false);

  return (
    <section>
      <div className="page">
        <>
          <h1>Video</h1>
          <motion.div className="image-container">
            <motion.img
              onClick={() => modalAciveSet(true)}
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
              transition={{
                easing: /* [0.42, 0, 0.58, 1], */ [0, 0.71, 0.2, 1.01],
                delay: 1,
                duration: 0.7,
              }}
              src={img}
              alt="promo"
            ></motion.img>
            <motion.div
              initial={{ width: `100%` }}
              animate={{ width: 0 }}
              transition={{
                delay: 1,
                duration: 0.8,
                easings: [0, 0.71, 0.2, 1.01],
              }}
              className="animated-block"
            ></motion.div>
            <div className="play-btn">
              <CgPlayButton size={25} />
            </div>
          </motion.div>
        </>
      </div>
      <VideoModal modalAcive={modalAcive} modalAciveSet={modalAciveSet} />
    </section>
  );
};

export default Page;
