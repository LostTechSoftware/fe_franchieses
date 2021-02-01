import styles from './styles.module.css';

export default function Footer() {
  return (
    <section>
      <footer className={styles.footer}>
        <section className={styles.social}>
          <img src="icons/FoodZilla.svg" alt="FoodZilla"/>
        </section>

        <section className={styles.links}>
          <h1>Links</h1>
          <a href="">h</a>
          <a href="">h</a>
          <a href="">h</a>
        </section>

        <section className={styles.support}>
          <h1>Support</h1>
          <a href="">h</a>
          <a href="">h</a>
          <a href="">h</a>
          <a href="">h</a>
        </section>

        <section className={styles.quickLink}>
          <h1>Quick Link</h1>
          <a href="">h</a>
          <a href="">h</a>
          <a href="">h</a>
          <a href="">h</a>
        </section>
      </footer>
      <footer className={styles.footerbottom}>
        <div className={styles.line}></div>
        <div className={styles.textbottom}></div>
      </footer>
    </section>
  )
}