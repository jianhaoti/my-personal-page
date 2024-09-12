import Image from "next/image";
import styles from "./styles.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import CardPhoto from "../CardPhoto";

const Card = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const cardAnimation = useAnimation();
  const imageAnimation = useAnimation();

  return (
    <div>
      <div className={styles.card}>
        {/* Left Text */}
        <motion.div
          className={styles.cardContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div className={styles.contentTop}>
            <h2>01 / VSM 800</h2>
            <p className={styles.subtitle}>
              A iOS music sampler for the iPad which allows users to create
              their own beats
            </p>
            <p>
              Developed in Swift using SwiftUI for the front-end, and
              AVFoundation for the audio engine
            </p>
            <a
              href="https://apps.apple.com/us/app/vsm-800/id6670715249"
              target="_blank"
              rel="noreferrer"
            >
              Try out my sampler ↗
            </a>
          </div>
        </motion.div>
        {/* Right Video */}
        <div ref={ref}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <div style={{ borderRadius: "15px", overflow: "hidden" }}>
              <iframe
                width="640"
                height="480"
                src="https://www.youtube.com/embed/7cAwlrH9xec?si=DI7zSIR4olew3sbu"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
      <CardPhoto />
    </div>
  );
};

export default Card;
