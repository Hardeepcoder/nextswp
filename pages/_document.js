
  // <script  src="vendor/jquery/jquery.min.js"></script>
  // <script   type="text/javascript"  src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  // <script   type="text/javascript" src="assets/js/owl-carousel.js"></script>
  // <script   type="text/javascript" src="assets/js/animation.js"></script>
  // <script  type="text/javascript"  src="assets/js/imagesloaded.js"></script>
  // <script  type="text/javascript"  src="assets/js/custom.js"></script>
         

  import Document, { Html, Head, Main, NextScript } from 'next/document'
const prod= process.env.NODE_ENV === 'production'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const mainurl =  "vendor/jquery/jquery.min.js";
    const url1 = "vendor/bootstrap/js/bootstrap.bundle.min.js"
    const url2 =  "assets/js/owl-carousel.js"
    const url3 =  "assets/js/animation.js"
    const url4 =  "assets/js/imagesloaded.js"
    const url5 =  "assets/js/custom.js"
    return (
      <Html>
        <Head>
        <script src={mainurl} ></script>
        <script src={url1} ></script>
        <script src={url2} ></script>
        <script src={url3} ></script>
        <script src={url4} ></script>
        <script src={url5} ></script>
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
