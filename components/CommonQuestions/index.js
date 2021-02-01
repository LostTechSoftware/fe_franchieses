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

function CommonQuestions({ classes }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Perguntas Frequentes
      </h1>
      <Accordion square className={classes.accordionRoot} >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<p>UE</p>}
        >
          <p className={styles.heading}>1. Quanto custa a franquia?</p>
        </AccordionSummary>
        <AccordionDetails className={classes.none}>
          <p className={styles.details}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion square className={classes.accordionRoot} >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<p>UE</p>}
        >
          <p className={styles.heading}>1. Quanto custa a franquia?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
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