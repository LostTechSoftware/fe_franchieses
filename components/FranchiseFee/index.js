import styles from './styles.module.css';


export default function FranchiseFee() {
  return (
    <section>
      <div className={styles.franchiseoff}>
        <div className={styles.leftText}>
          <text className={styles.off}>100% OFF</text>
          <text className={styles.franchisenumber}>20</text>
          <text className={styles.remaining}>RESTANTES</text>
        </div>
        <div className={styles.rightText}>
          <div className={styles.rightTextTop}>
            <text className={styles.franchisefee}>Taxa de Franquia</text>
            <text className={styles.price}>De R$1.000 à R$5.000</text>
            <text className={styles.priceCondition}>De acordo com o número de habitantes.</text>
          </div>
          <div className={styles.rightTextBottom}>
            <text className={styles.freeFranchise}>Gratuita para os próximos 20 franqueados!</text>
            <text className={styles.rightTextBottomParagraph}>Estamos focados em um rápido processo de expansão, por isso zeramos a taxa de franquia para os próximos 20 franqueados aprovados.</text>
          </div>
        </div>
      </div>
    </section>
  )
}