import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.image} src="/img/foto_perfil.png" alt="Profile picture" />
      <h1 className={styles.name}>Facundo Tombesi</h1>
    </header>
  )
}
