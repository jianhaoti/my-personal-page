import Link from "next/link";
import styles from "./styles.module.scss";
import CircularImage from "../CircularImage";

type Props = {
  isHome?: boolean;
};

const Header = ({ isHome = false }: Props) => {
  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.navTop}>
          <CircularImage />
          <li>
            <Link href="https://github.com/jianhaoti/">Github</Link>
          </li>
          <li>
            <a href="mailto:paul.tee@uconn.edu">email: paul.tee@uconn.edu</a>
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
    </header>
  );
};

export default Header;
