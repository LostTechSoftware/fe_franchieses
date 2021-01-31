import styles from './styles.module.css';

export default function OurMission() {
  return (
    <section>
      <div>
      <h1 className={styles.title}>A Nossa Missão</h1>
      <p className={styles.text}>Somos uma plataforma em busca do crescimento, inovação e a<br></br>comodidade. Aliamos um bom design a fácil usabilidade e velocidade, oferecendo uma<br></br>excelente experiência do usuário.</p>
      <p className={styles.text}>Por isso queremos você no nosso time!</p>
      </div>

      <div className={styles.cards}>

        <figure className={styles.card1}>
          <div className={styles.circle1}>
            <div className={styles.internalcircle1}></div>
          </div>
          <h2 className={styles.cardTitle}>Ótima Oportunidade</h2>
          <p className={styles.cardText}>Fature 25% de toda a renda bruta que o aplicativo gerar em vendas e entregas na sua cidade.</p>
        </figure>

        <figure className={styles.card2}>
          <div className={styles.circle2}>
            <div className={styles.internalcircle2}></div>
          </div>
          <h2 className={styles.cardTitle}>Exclusividade</h2>
          <p className={styles.cardText}>Você será o único franqueado da sua região.</p>
        </figure>

        <figure className={styles.card3}>
          <div className={styles.circle3}>
            <div className={styles.internalcircle3}></div>
          </div>
          <h2 className={styles.cardTitle}>Excelente Produto</h2>
          <p className={styles.cardText}>Aplicativo altamente tecnológico, rápido e elegante.</p>
        </figure>

        <figure className={styles.card4}>
          <div className={styles.circle4}>
            <div className={styles.internalcircle4}></div>
          </div>
          <h2 className={styles.cardTitle}>Relação Ganha-ganha</h2>
          <p className={styles.cardText}>Investiremos para o seu negócio fazer o maior sucesso! Pois assim também ganhamos juntos.</p>
        </figure>
      </div>
    </section>
  )
}