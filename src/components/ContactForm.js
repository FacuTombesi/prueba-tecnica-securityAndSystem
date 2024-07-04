import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}><span className={styles.title_capital}>C</span>ontact</h2>
      <form className={styles.form}>
        <div className={styles.first_row}>
          <label className={styles.label}>
            <span className={styles.label_title}>Name</span>
            <input className={styles.input} type="text" placeholder="Your name here" required />
          </label>
          <label className={styles.label}>
            <span className={styles.label_title}>Email</span>
            <input className={styles.input} type="email" placeholder="example@email.com" required />
          </label>
        </div>
        <label className={styles.label}>
          <span className={styles.label_title}>Message</span>
          <textarea className={styles.textarea} placeholder="Your message here" required />
        </label>
        <button className={styles.button} type="submit">Send</button>
      </form>
    </section>
  )
}
