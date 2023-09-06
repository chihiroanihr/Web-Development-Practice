import styles from "../page.module.css";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className={styles.main}>
      <h2>Loading...</h2>
    </div>
  );
}
