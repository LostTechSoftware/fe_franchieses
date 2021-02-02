import styles from './styles.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.social}>
          <img className={styles.foodzillalogo} src="icons/FoodZilla.svg" alt="FoodZilla"/>
          <div className={styles.socialicons}>
            <a href="https://www.facebook.com/foodzillabr/"><img className={styles.iconsimg} src="icons/facebook.svg" alt="facebook"/></a>
            <a href="https://www.instagram.com/foodzillabr/"><img className={styles.iconsimg} src="icons/instagram.svg" alt="instagram"/></a>
          </div>
        </section>

        <section className={styles.links}>
          <h1 className={styles.title}>Links</h1>
          <div className={styles.linkarea}>
            <a className={styles.linktext} href="https://foodzilla.com.br/">•FoodZilla</a>
            <a className={styles.linktext} href="https://restaurant.foodzilla.com.br/">•Para empresas</a>
            <a className={styles.linktext} href="https://helpcenter.foodzilla.com.br/">•Contato</a>
          </div>
        </section>

        <section className={styles.support}>
          <h1 className={styles.title}>Support</h1>
          <div className={styles.linkarea}>
            <a className={styles.linktext} href="https://helpcenter.foodzilla.com.br/">•FAQ</a>
            <a className={styles.linktext} href="https://foodzilla.com.br/politic.html">•Política de privacidade</a>
            <a className={styles.linktext} href="https://foodzilla.com.br/terms.html">•Termos de uso</a>
            <a className={styles.linktext} href="https://foodzilla.com.br/codig.html">•Código de conduta</a>
          </div>
        </section>

        <section className={styles.quickLink}>
          <h1 className={styles.title}>Quick Link</h1>
          <div className={styles.linkarea2}>
            <text className={styles.linktext}><img src="icons/phone.svg" alt="phone"/> +55 19 98186-1870</text>
            <a className={styles.linktext} href="mailto:contato@foodzilla.com.br"><img src="icons/mail.svg" alt="mail"/> contato@foodzilla.com.br</a>
            <a className={styles.linktext} href="https://foodzilla.com.br/"><img src="icons/globe.svg" alt="globe"/> foodzilla.com.br</a>
            <text className={styles.linktext}><img src="icons/map.svg" alt="map"/> Marino martucci, 90, Aguaí.</text>
          </div>
        </section>
      </footer>
      <footer className={styles.footerbottom}>
        <div className={styles.line}></div>
        <div className={styles.textbottom}>
          <text className={styles.crafttedtext}>Crafted by </text>
          <text className={styles.foodzillatext}>Foodzila</text>
        </div>
      </footer>
    </>
  )
}