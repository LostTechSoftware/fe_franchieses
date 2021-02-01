import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles.module.css';

const useStyles = makeStyles(() => ({
  accordionRoot: {
    maxWidth: 750,
    color: '#000',
    border: 'none',
    '&::before': {
      display: 'none'
    }
  },
  accordionSummary: {
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
}));

export default function CommonQuestions() {
  const materialStyles = useStyles();
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Perguntas Frequentes
      </h1>
      <Accordion square className={materialStyles.accordionRoot} >
        <AccordionSummary
          className={materialStyles.accordionSummary}
          expandIcon={<p>UE</p>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className={styles.heading}>1. Quanto custa a franquia?</p>
        </AccordionSummary>
        <AccordionDetails className={materialStyles.none}>
          <p className={styles.details}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion square className={materialStyles.accordionRoot} >
        <AccordionSummary
          className={materialStyles.accordionSummary}
          expandIcon={<p>UE</p>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className={styles.heading}>1. Quanto custa a franquia?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.details}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
