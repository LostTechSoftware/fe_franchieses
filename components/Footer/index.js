import styles from './styles.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.social}>
          <img src="icons/FoodZilla.svg" alt="FoodZilla"/>
          <div className={styles.socialicons}>
            <a href=""><img src="icons/facebook.svg" alt="facebook"/></a>
            <a href=""><img src="icons/instagram.svg" alt="instagram"/></a>
          </div>
        </section>

        <section className={styles.links}>
          <h1 className={styles.title}>Links</h1>
          <div className={styles.linkarea}>
            <a className={styles.linktext} href="">•FoodZilla</a>
            <a className={styles.linktext} href="">•Para empresas</a>
            <a className={styles.linktext} href="">•Contato</a>
          </div>
        </section>

        <section className={styles.support}>
          <h1 className={styles.title}>Support</h1>
          <div className={styles.linkarea}>
            <a className={styles.linktext} href="">•FAQ</a>
            <a className={styles.linktext} href="">•Política de privacidade</a>
            <a className={styles.linktext} href="">•Termos de uso</a>
            <a className={styles.linktext} href="">•Código de conduta</a>
          </div>
        </section>

        <section className={styles.quickLink}>
          <h1 className={styles.title}>Quick Link</h1>
          <div className={styles.linkarea}>
            <a className={styles.linktext} href=""><img src="" alt=""/></a>
            <a className={styles.linktext} href=""><img src="" alt=""/></a>
            <a className={styles.linktext} href=""><img src="" alt=""/></a>
            <a className={styles.linktext} href=""><img src="" alt=""/></a>
          </div>
        </section>
      </footer>
      <footer className={styles.footerbottom}>
        <div className={styles.line}></div>
        <div className={styles.textbottom}></div>
      </footer>
    </>
  )
}