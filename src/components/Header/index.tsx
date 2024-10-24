import Link from "next/link";
import styles from "./styles.module.scss";
import CircularImage from "../CircularImage";
import { useState } from "react";
import Modal from "react-modal";

type Props = {
  isHome?: boolean;
};

Modal.setAppElement("#__next"); // Required for screen readers
const Header = ({ isHome = false }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.navTop}>
          <CircularImage />
          <li>
            <Link href="https://github.com/jianhaoti/">Github</Link>
          </li>
          <li onClick={openModal} className={styles.modalButton}>
            <a>Resume</a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/paul-tee/">LinkedIn</a>
          </li>
        </div>
        <div className={styles.content}>
          {isHome ? (
            <>
              <div className={styles.content}>
                <h1>Paul&apos;s Portfolio</h1>
                <p style={{ fontWeight: "100" }}>
                  Math &amp; CS student looking for a software engineering
                  internship
                </p>
              </div>{" "}
            </>
          ) : null}
        </div>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Resume Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          src="/Resume.pdf"
          className={styles.iframe}
          title="Resume PDF"
        />
      </Modal>{" "}
    </header>
  );
};

export default Header;
