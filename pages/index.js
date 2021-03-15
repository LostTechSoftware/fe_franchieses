import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

import Header from '../components/Header';
// import FormSection from '../components/FormSection';
import OurMission from '../components/OurMission';
import FranchiseFeeNew from '../components/FranchiseFeeNew';
import HowWillItWork from '../components/HowWillItWork';
import Footer from '../components/Footer';

const FormSection = dynamic(() => import('../components/FormSection'), {
  ssr: false
})
const CommonQuestions = dynamic(() => import('../components/CommonQuestions'), {
  ssr: false
})

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seja um franqueado Foodzilla</title>
        <link rel="icon" href="/favicon.png"/>
      </Head>

      <Header />

      <FormSection />

      <OurMission />

      <FranchiseFeeNew />
      
      <HowWillItWork />

      <CommonQuestions />

      <Footer />
    </div>
  )
}
