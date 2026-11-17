import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="main" className={styles.main}>
      <h1 className={styles.title}>Airport Pickup Timer</h1>
      <p className={styles.lead}>
        Know when to leave for Keflavík, not just when the plane lands.
      </p>
    </main>
  );
}
