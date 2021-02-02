import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import DefaultButton from '../DefaultButton';
import registerLead from './firetore';
import styles from './styles.module.css';

const StyledTextField = withStyles({
  root: {
    marginBottom: 30,
    width: '100%',
    maxWidth: 272,
    height: 48,
    '& input': {
      fontSize: 16,
    },
    '& label.Mui-focused': {
      color: '#F8E22B'
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: '#707070'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#F8E22B'
    },
    '& .MuiFormLabel-root': {
      fontSize: 16
    },
    '& .MuiInputLabel-shrink': {
      fontSize: 20
    }
  }
})(TextField);

export default function FormSection() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ city, setCity ] = useState('');
  const [ uf, setUf ] = useState('');

  return (
    <main className={styles.container}>
      <form onSubmit={event => registerLead(event, name, email, uf, city)} className={styles.form}>
        <h1>
          Torne-se um franqueado FoodZilla e seja dono do seu
          <br/>
          <strong>próprio app de delivery na sua cidade</strong>
        </h1>

        <p>Após cadastrar-se nosso time logo entrará em contato com você!</p>

        <div className={styles.inputs}>
          <StyledTextField
            className={styles.input}
            style={{ width: '100%', maxWidth: 272}}
            label='Nome'
            type='text'
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <StyledTextField
            className={styles.input}
            style={{ width: '100%', maxWidth: 272}}
            label='E-mail'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <StyledTextField
            className={styles.input}
            style={{ width: '100%', maxWidth: 272, color: '#d12'}}
            label='Estado'
            value={uf}
            onChange={event => setUf(event.target.value)}
          >
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </StyledTextField>

          <StyledTextField
            className={styles.input}
            style={{ width: '100%', maxWidth: 272}}
            label='Cidade'
            value={city}
            onChange={event => setCity(event.target.value)}
          />
        </div>

        <DefaultButton className={styles.submitButton} type='submit'>
          Cadastre-se
        </DefaultButton>
      </form>
      <figure className={styles.cellphonearea}>
        <img className={styles.elipsebackground} src="images/Elipseformbackground.svg" alt=""/>
        <img className={styles.elipse} src="images/Elipseform.svg" alt=""/>
        <img className={styles.cellphone} src="images/cellphonethumb.svg" alt=""/>
      </figure>
    </main>
  );
}