import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles.module.css';

const materialStyles = {
  accordionRoot: {
    maxWidth: 750,
    color: '#000',
    boxShadow: 'none',
    borderTop: 'solid 1px #343a40',
    '&:last-of-type': {
      borderBottom: 'solid 1px #343a40',
    },
    '&::before': {
      display: 'none'
    }
  },
  accordionSummary: {
    boxShadow: 'none',
    paddingTop: 18,
    paddingBottom: 18,
    border: 'none',
    '&::before': {
      display: 'none'
    }
  },
  none: {
    border: 'none'
  }
};

const ArrowIcon = () => <img
  src='/icons/arrow.svg'
  alt='mostrar conteúdo'
  className={styles.arrowIcon}
/> 

function CommonQuestions({ classes }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Perguntas Frequentes
      </h1>
      <Accordion square className={classes.accordionRoot} >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ArrowIcon />}
        >
          <p className={styles.heading}>1. Quanto custa a franquia?</p>
        </AccordionSummary>
        <AccordionDetails className={classes.none}>
          <p className={styles.details}>
            O valor da franquia é de 1 a 5 mil reais variando de
            acordo com o número de habitantes da região desejada. Porém por tempo limitado
            zeramos a taxa de adesão da franquia para os próximos 20 aprovados pelo
            processo, contando a partir do dia desta postagem. Pois estamos focados em
            acelerar nosso processo de expansão.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion square className={classes.accordionRoot} >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ArrowIcon />}
        >
          <p className={styles.heading}>2. Como consigo cadastrar os restaurantes da minha cidade?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Após ser aprovado você passará por um treinamento onde aprenderá 
            tudo que for preciso para atuar como um de nossos franqueados.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion square className={classes.accordionRoot} >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ArrowIcon />}
        >
          <p className={styles.heading}>3. Como vai funcionar o marketing?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Assim que estiver franqueado, após cadastrar os restaurantes 
            da sua cidade, faremos o marketing e prepararemos tudo para o 
            lançamento do app bombar na sua região.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion square className={classes.accordionRoot} >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ArrowIcon />}
        >
          <p className={styles.heading}>4. O mercado não está saturado?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Nosso aplicativo é focado nas cidades que possuem entre 10 a 
            300 mil habitantes, tais cidades onde não é o foco da maioria
            das marcas do mercado e que ficam carentes desse tipo de serviço.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

CommonQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(materialStyles)(CommonQuestions);