import Link from "next/link";

import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      <h2>Page 1</h2>

      <br />

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="page2">Page 2</Link>
        </li>
        <li>
          <Link href="todos">Todos</Link>
        </li>
      </ul>
    </div>
  );
}
