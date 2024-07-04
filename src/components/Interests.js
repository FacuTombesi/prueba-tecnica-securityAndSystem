import styles from "../styles/Interests.module.css";

export default function Interests() {
  return (
    <section className={styles.interests}>
      <h2 className={styles.title}><span className={styles.title_capital}>I</span>nterests</h2>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img className={styles.item_icon} src="/assets/icons_interest_1.png" alt="Programming" />
          Programming
        </li>
        <li className={styles.list_item}>
          <img className={styles.item_icon} src="/assets/icons_interest_2.png" alt="Video games" />
          Video games
        </li>
        <li className={styles.list_item}>
          <img className={styles.item_icon} src="/assets/icons_interest_3.png" alt="Tennis" />
          Tennis
        </li>
        <li className={styles.list_item}>
          <img className={styles.item_icon} src="/assets/icons_interest_4.png" alt="Japan" />
          Japan
        </li>
        <li className={styles.list_item}>
          <img className={styles.item_icon} src="/assets/icons_interest_5.png" alt="Music" />
          Music
        </li>
      </ul>
    </section>
  )
}
