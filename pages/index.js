import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header';
import FormSection from '../components/FormSection';
import OurMission from '../components/OurMission';
import FranchiseFee from '../components/FranchiseFee';
import HowWillItWork from '../components/HowWillItWork';
import CommonQuestions from '../components/CommonQuestions';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header />

      <FormSection />

      <OurMission />

      <FranchiseFee />
      
      <HowWillItWork />

      <CommonQuestions />

      <Footer />
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
