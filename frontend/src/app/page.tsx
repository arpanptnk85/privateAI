import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a className={styles.cardLogo} href="https://github.com/arpanptnk85/privateAI" rel="noopener noreferrer">
          <Image src={'/github/github-mark.png'} alt="Github" width={20} height={20} />
        </a>

        <div className={styles.flex}>
            <Link
              href="/signup"
              className={styles.cardSignup}>
              SignUp
            </Link>
            <Link
              href="/login" 
              className={styles.cardLogin}>
              Login
            </Link>
        </div>
      </div>

      <div className={styles.center}>
        <p className={styles.brand}>
          Private<span className={styles.brandBold}>AI</span>
        </p>
      </div>

      <div className={styles.grid}>
        <a className={styles.card} href="#" rel="noopener noreferrer">
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a className={styles.card} href="#" rel="noopener noreferrer">
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a className={styles.card} href="#" rel="noopener noreferrer">
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a className={styles.card} href="#" rel="noopener noreferrer">
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
