import Image from "next/image";
import styles from "./styles.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const CardPhoto = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const cardAnimation = useAnimation();
  const imageAnimation = useAnimation();

  return (
    <div className={styles.card}>
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
          <div
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              marginBottom: "4rem",
              marginTop: "-9rem",
              display: "flex",
              flexDirection: "row",
              gap: "10rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={styles.graphImg}>
              <Image
                src={"/vsm800_2.png"}
                blurDataURL={"/vsm800_2.png"}
                alt="vsm1"
                placeholder="blur"
                width={1300}
                height={1000}
                quality={100}
                border-radius="15px"
              />
              <Image
                src={"/vsm800_1.png"}
                blurDataURL={"/vsm800_1.png"}
                alt="vsm2"
                placeholder="blur"
                width={1300}
                height={1000}
                quality={100}
              />
              <Image
                src={"/vsm800_3.png"}
                blurDataURL={"/vsm800_3.png"}
                alt="vsm3"
                placeholder="blur"
                width={1300}
                height={1000}
                quality={100}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardPhoto;
