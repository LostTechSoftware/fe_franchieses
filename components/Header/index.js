import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <img src="icons/FoodZilla.svg" alt="FoodZilla"/>

      <nav className={styles.navBar}>
        <a className={styles.selected}>Inicio</a>
        <a>Sobre o app</a>
        <a>Donwload</a>
      </nav>
    </header>
  );
}