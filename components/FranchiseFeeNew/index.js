import DefaultButton from '../DefaultButton';
import styles from './styles.module.css';

export default function FranchiseFeeNew() {
  return (
    <section>
      <main className={styles.main}>
        <aside className={styles.asideLeft}>
          <div className={styles.asideImages}>
            <img
              className={styles.cellPhone}
              src="images/cellphonethumb.svg"
              alt="Cell phone"
            />
            <img
              className={styles.elipse}
              src="images/ElipseFranchieseFee.svg"
              alt="ElipseFranchieseFee"
            />
            <img
              className={styles.yellowFade}
              src="images/yellowFade.svg"
              alt="Yellow fade"
            />
          </div>

          <div className={styles.asideLeftText}>
            <h2 className={styles.off}>100% OFF</h2>
            <h2 className={styles.franchiseNumber}>20</h2>
            <h2 className={styles.remaining}>RESTANTES</h2>
          </div>
        </aside>
        <aside className={styles.asideRight}>
          <div className={styles.franchiseFee}>
            <img
              className={styles.priceCoverLine}
              src="images/priceCoverLine.svg"
              alt="price Cover line"
            />
            <h1 className={styles.franchiseFeeText}>Taxa de Franquia</h1>
            <h2 className={styles.price}>De R$1.000 à R$5.000 </h2>
            <p className={styles.conditionPrice}>De acordo com o número de habitantes.</p>
          </div>
          <div className={styles.theNextOnesAreFree}>
            <h1 className={styles.freeRemaining}>Gratuita para os próximos 20 franqueados!</h1>
            <p>Estamos focados em um rápido processo de expansão, por isso zeramos a taxa de franquia para os próximos 20 franqueados aprovados.</p>
            <DefaultButton 
              className={styles.scrollButton}
      
            >
              <a href="#form" className={styles.buttonText}>Aproveite</a>
            </DefaultButton>
          </div>
        </aside>
      </main>
    </section>
  )
}