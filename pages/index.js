import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header';
import FormSection from '../components/FormSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <FormSection />

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
