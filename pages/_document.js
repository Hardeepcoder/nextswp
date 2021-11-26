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
        <script  src="vendor/jquery/jquery.min.js"></script>
  <script   type="text/javascript"  src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script   type="text/javascript" src="assets/js/owl-carousel.js"></script>
  <script   type="text/javascript" src="assets/js/animation.js"></script>
  <script  type="text/javascript"  src="assets/js/imagesloaded.js"></script>
  <script  type="text/javascript"  src="assets/js/custom.js"></script>
          <Main />
          <NextScript />
        
  
     
        </body>
      </Html>
    )
  }
}

export default MyDocument