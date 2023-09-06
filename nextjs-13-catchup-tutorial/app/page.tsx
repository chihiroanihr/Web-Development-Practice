import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h2>Home</h2>

      <br />

      <ul>
        <li>
          <Link href="page1">Page 1</Link>
        </li>
        <li>
          <Link href="page2">Page 2</Link>
        </li>
      </ul>
    </div>
  );
}
