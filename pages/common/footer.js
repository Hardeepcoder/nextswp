import Script from 'next/Script'
function Footer() {
    return (
        <>
          <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              Copyright © 2021
             
            </p>
          </div>
        </div>
      </div>
    </footer>
    <Script src="vendor/jquery/jquery.min.js"></Script>
  <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
  <Script src="assets/js/owl-carousel.js"></Script>
  <Script src="assets/js/animation.js"></Script>
  <Script src="assets/js/imagesloaded.js"></Script>
  <Script src="assets/js/custom.js"></Script>
        </>
    )
}

export default Footer