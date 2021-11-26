import '../styles/globals.css'
import Nav from './nav'
import Head from 'next/head'
import Layout from './layout'
function MyApp({ Component, pageProps }) {

  return(
    <>
   
  <Component {...pageProps} />
  

  </>
  )
}

export default MyApp
