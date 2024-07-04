import styles from "../styles/Interests.module.css";

export default function Interests() {
  return (
    <section className={styles.interests}>
      <h2 className={styles.title}>Interests</h2>
      <ul className={styles.list}>
        <li className={styles.list_item}>Programming</li>
        <li className={styles.list_item}>Video games</li>
        <li className={styles.list_item}>Tennis</li>
        <li className={styles.list_item}>Anime</li>
        <li className={styles.list_item}>Music</li>
      </ul>
    </section>
  )
}
