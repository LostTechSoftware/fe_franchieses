import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script')
    const localScript = document.createElement('script')

    script.src = "https://www.googletagmanager.com/gtag/js?id=G-5WCZZ398RR";
    script.async = true;
    
    localScript.innerHTML = `
      console.log('running that shit on local host')
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());

      gtag('config', 'G-5WCZZ398RR');
      gtag('config', 'AW-835505131');
      console.log('finish that shit')
    `

    document.head.appendChild(script);
    document.head.appendChild(localScript);
  }, []);
  
  useEffect(() => {

  }, []);
  return (
    <>
      <Head>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5WCZZ398RR"
        ></script>
        
        <script>

        </script> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
