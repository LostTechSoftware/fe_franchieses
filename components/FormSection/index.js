import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles.module.css';

const StyledTextField = withStyles({
  root: {
    marginBottom: 30,
    width: '100%',
    maxWidth: 272,
    height: 48,
    '& label.Mui-focused': {
      color: '#F8E22B'
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: '#707070'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#F8E22B'
    }
  }
})(TextField);

export default function FormSection() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ city, setCity ] = useState('');
  const [ uf, setUf ] = useState('');

  async function registerLead(event) {
    event.preventDefault();
    try {
      alert('shall save a new lead');
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  return (
    <main className={styles.container}>
      <form onSubmit={registerLead} className={styles.form}>
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
            style={{ width: '100%', maxWidth: 272}}
            label='Nome'
            value={city}
            onChange={event => setCity(event.target.value)}
            select
          />

          <StyledTextField
            className={styles.input}
            style={{ width: '100%', maxWidth: 272, color: '#d12'}}
            label='Nome'
            value={uf}
            onChange={event => setUf(event.target.value)}
            select
          >
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </StyledTextField>
        </div>

        <Button className={styles.submitButton} type='submit'>
          Cadastre-se
        </Button>
      </form>
      <p className={styles.cellPhone}> cellphonethumb </p>
    </main>
  );
}
