import DefaultButton from '../DefaultButton';
import styles from './styles.module.css';

export default function HowWillItWork() {
  return (
    <section>
      <div className={styles.cards}>

        <figure className={styles.card1}>
          <div className={styles.circle1}>
            <div className={styles.internalcircle1}>
              <img src="icons/megaphone.svg" alt="megaphone" />
            </div>
          </div>
          <h2 className={styles.cardTitle}>Marketing</h2>
          <p className={styles.cardText}>Vamos investir no marketing da sua região com notificações push, propagandas direcionadas, bolsas de delivery, panfletos, outdoors, e embalagens. Variando de acordo com o número de habitantes na sua cidade.</p>
        </figure>

        <figure className={styles.card2}>
          <div className={styles.circle2}>
            <div className={styles.internalcircle2}>
              <img src="icons/gear.svg" alt="gear" />
            </div>
          </div>
          <h2 className={styles.cardTitle}>Inovação</h2>
          <p className={styles.cardText}>Estamos trabalhando para implementar recursos inéditos no mercado, como uma inteligência artificial, dentre outras funcionalidades.</p>
        </figure>
      </div>
      <div className={styles.HowWillItWorkText}>
       
          <div className={styles.phases}>
            <text className={styles.phase}>Etapa 1</text>
            <text className={styles.phase}>Etapa 2</text>
            <text className={styles.phase}>Etapa 3</text>
            <text className={styles.phase}>Etapa 4</text>
            <text className={styles.phase}>Etapa 5</text>
          </div>

          <div className={styles.phasesDescriptions}>
            <text className={styles.phaseDescription}>Cadastramento</text>
            <text className={styles.phaseDescription}>Entrevista</text>
            <text className={styles.phaseDescription}>Contrato</text>
            <text className={styles.phaseDescription}>Treinamento</text>
            <text className={styles.phaseDescription}>Ação!</text> 
          </div>
        
        <div className={styles.HowWillItWorkTextRight}>
          <text className={styles.title}>Como vai funcionar assim que eu me franquear?</text>
          <text className={styles.paragraph1}>Após se cadastrar nosso time entrará em contato com você, faremos uma entrevista, após ser aprovado já poderá passar para nosso time jurídico onde será assinado o contrato e será encaminhado e treinado pelo nosso time de campo para já poder começar a atuar. O processo leva menos de uma semana.</text>
          
          <DefaultButton className={styles.submitButton}>
            <a href="#form">Cadastre-se</a>
          </DefaultButton>
        </div>
      </div>  
    </section>
  )
}