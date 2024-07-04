import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}><span className={styles.title_capital}>A</span>bout me</h2>
      <p className={styles.content}>
        Hi! My name is Facundo Tombesi, from Argentina. I'm a Multimedia Designer and Full Stack Developer. I got my Multimedia Designer degree on 2018 and ever since I've been working as a freelance designer, doing web design, logo design and personal business cards for my clients. But I wanted to grow even more and do more than just design web sites, I wanted to be able to develop them as well.
      </p>
      <p className={styles.content}>
        So, on october 2022, I started studying for Full Stack Developer at SoyHenry and 4 months later I got my Full Stack Developer certificate. Now I'm looking to work in a place where I can put to test my skills both as a designer and a developer. I'm still a junior developer and I'm still learning but with time I'll become a true professional.
      </p>
    </section>
  )
}
