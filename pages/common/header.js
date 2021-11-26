import Head  from "next/dist/shared/lib/head"
function Header() {
    return (
        <>
        <Head>
        <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content />
    <meta name="author" content />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <title>DigiMedia - Creative SEO HTML5 Template</title>
    {/* Bootstrap core CSS */}
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    {/* Additional CSS Files */}
    <link rel="stylesheet" href="assets/css/fontawesome.css" />
    <link rel="stylesheet" href="assets/css/templatemo-digimedia-v3.css" />
    <link rel="stylesheet" href="assets/css/animated.css" />
    <link rel="stylesheet" href="assets/css/owl.css" />
        </Head>

         {/* ***** Preloader Start ***** */}
    <div id="js-preloader" className="js-preloader">
      <div className="preloader-inner">
        <span className="dot" />
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
    {/* ***** Preloader End ***** */}
    {/* Pre-header Starts */}
    <div className="pre-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-8 col-7">
            <ul className="info">
              <li>
                <a href="#">
                  <i className="fa fa-envelope" />
                  digimedia@company.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-phone" />
                  010-020-0340
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-4 col-5">
            <ul className="social-media">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Pre-header End */}
    {/* ***** Header Area Start ***** */}
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="index.html" className="logo">
                <img src="assets/images/logo-v3.png" />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about">About</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#services">Services</a>
                </li>
               
                <li className="scroll-to-section">
                  <a href="#blog">Blog</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact">Contact Us</a>
                </li>
                <li className="scroll-to-section">
                  <div className="border-first-button">
                    <a href="#contact">Free Quote</a>
                  </div>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
       
        </>
    )
}

export default Header