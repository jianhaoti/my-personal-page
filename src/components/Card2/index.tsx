import Image from "next/image";
import styles from "./styles.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import CardPhoto from "../CardPhoto";

const Card2 = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const cardAnimation = useAnimation();
  const imageAnimation = useAnimation();

  return (
    <div>
      <div className={styles.card}>
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
            <h2>02 / Graph Visual </h2>
            <p className={styles.subtitle}>
              A React web app which allow users to create their own graphs, and
              step-through common graph algorithms alongside its pseudocode
            </p>
            <p>
              Front-end developed in ReactJS using Material UI Components, API
              calls handled using a Node.js server with Express
            </p>
            <a
              href="https://graphvisual.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Try my web app ↗
            </a>
          </div>
        </motion.div>
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
                src="https://www.youtube.com/embed/0VPogMponn8?si=CNNZwm2VW89kN3He"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
