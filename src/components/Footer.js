import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_p}>Technical Challenge for Security and System.</p>
      <div className={styles.links}>
        <a href="https://github.com/FacuTombesi/prueba-tecnica-securityAndSystem" target="_blank">
          <img className={styles.github_logo} src="/assets/iconGITHUB(orange).png" alt="GitHub Repository" loading="lazy" />
        </a>
        <a href="https://www.linkedin.com/in/facundotombesi/" target="_blank">
          <img className={styles.linkedin_logo} src="./assets/iconLINKEDIN(orange).png" alt="LinkedIn" loading="lazy" />
        </a>
      </div>
      <a href="https://ftportfolio.vercel.app/" target="_blank">
        <img className={styles.portfolio_logo} src="./assets/logo(orange).png" alt="Facundo Tombesi" loading="lazy" />
      </a>
    </footer>
  )
}