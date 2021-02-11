import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const DefaultButton = withStyles({
  root: {
    transition: '0.2s',
    padding: 0,
    textTransform: 'none',
  
    backgroundColor: '#F8E22B',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',

    '& *': {
      fontSize: 16,
      color: '#FFF',
    },
    '& p': {
      height: '100%',
      width: '100%',
      padding: '16.5px 24.5px',
      backgroundColor: '#F8E22B',
      borderRadius: 8,
    },
    '& a': {
      height: '100%',
      width: '100%',
      backgroundColor: '#F8E22B',
      borderRadius: 8,
      padding: '16.5px 24.5px',
    },

    '&:hover': {
      transition: '0.2s',
      backgroundColor: '#F8E22B',
      filter: 'contrast(90%)'
    }
  }
})(Button);

export default DefaultButton;
