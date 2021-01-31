import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <h1> Foodzilla </h1>

      <nav className={styles.navBar}>
        <a className={styles.selected}>Inicio</a>
        <a>Sobre o app</a>
        <a>Donwload</a>
      </nav>
    </header>
  );
}