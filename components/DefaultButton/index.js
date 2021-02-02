import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

 const DefaultButton = withStyles({
  root: {
    transition: '0.2s',
    padding: '16.5px 24.5px',
    fontSize: 16,
    textTransform: 'capitalize',
  
    backgroundColor: '#F8E22B',
    color: '#FFF',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',

    '&:hover': {
      transition: '0.2s',
      backgroundColor: '#F8E22B',
      filter: 'contrast(90%)'
    }
  }
})(Button);

export default DefaultButton;
