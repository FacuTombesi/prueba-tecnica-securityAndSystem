import { useEffect, useState } from "react";
import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [mailAlert, setMailAlert] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(!(name && email && message));
  }, [name, email, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setMailAlert(true);
      setTimeout(() => {
        setMailAlert(false);
      }, 5000);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}><span className={styles.title_capital}>C</span>ontact</h2>
      <div className={`${styles.mail_alert} ${mailAlert ? styles.show_alert : ""}`}>
        Message sent successfully!
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.first_row}>
          <label className={styles.label}>
            <span className={styles.label_title}>Name</span>
            <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name here" required />
          </label>
          <label className={styles.label}>
            <span className={styles.label_title}>Email</span>
            <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" required />
          </label>
        </div>
        <label className={styles.label}>
          <span className={styles.label_title}>Message</span>
          <textarea className={styles.textarea} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message here" required />
        </label>
        <button className={styles.button} type="submit" disabled={isButtonDisabled}>Send</button>
      </form>
    </section>
  )
}
