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
            <Link href="https://www.linkedin.com/in/paul-tee-2205b7b0/">
              LinkedIn
            </Link>
          </li>
          <li>
            <a href="mailto:jianhaoti@gmail.com">email: jianhaoti@gmail.com</a>
          </li>
        </div>
        <div className={styles.content}>
          {isHome ? (
            <>
              <div className={styles.content}>
                <h1>Hello, I'm Paul</h1>
                <p style={{ fontWeight: "100" }}>
                  Math/CS Student looking for a Software Engineering Internship
                </p>
              </div>
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
