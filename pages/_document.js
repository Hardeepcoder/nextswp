import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta property="custom" name="lulu"/>
            </Head>
        <body>
          <Main />
          <NextScript />
          <script  src="vendor/jquery/jquery.min.js"></script>
  <script    src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script   src="assets/js/owl-carousel.js"></script>
  <script   src="assets/js/animation.js"></script>
  <script   src="assets/js/imagesloaded.js"></script>
  <script   src="assets/js/custom.js"></script>
  
     
        </body>
      </Html>
    )
  }
}

export default MyDocument