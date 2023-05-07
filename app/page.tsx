import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.infoCard}>
        <div className={styles.name}>Patrick Marshall</div>
        <div className={styles.myDescription}>
          <div>
            Lorem Ipsum Style Programmer Who Wants to Design a Latin-Based
            Programming Language
          </div>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/PatrickJohnMarshall">GitHub</a>
          <a href="https://www.linkedin.com/in/patrick-marshall-5343a6186/">
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
