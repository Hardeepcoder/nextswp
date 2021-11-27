import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
function Home() {
  return (
    <>
    <Head>
    <title>Clyde - Free Bootstrap 4 Template by Colorlib</title>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="css/animate.css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <link rel="stylesheet" href="css/owl.theme.default.min.css" />
    <link rel="stylesheet" href="css/magnific-popup.css" />
    <link rel="stylesheet" href="css/flaticon.css" />
    <link rel="stylesheet" href="css/style.css" />
   
    </Head>
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Clyde<span>.</span>
        </a>
        <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
              <a href="#home-section" className="nav-link">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-section" className="nav-link">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills-section" className="nav-link">
                <span>Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#services-section" className="nav-link">
                <span>Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects-section" className="nav-link">
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog-section" className="nav-link">
                <span>Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="home-section" className="hero">
      <div className="home-slider owl-carousel">
        <div className="slider-item">
          <div className="overlay" />
          <div className="container-fluid px-md-0">
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third order-md-last img"
                style={{ backgroundImage: "url(images/bg_1.jpg)" }}
              >
                <div className="overlay" />
                <div className="overlay-1" />
              </div>
              <div
                className="one-forth d-flex  align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">Hello! This is Clyde</span>
                  <h1 className="mb-4 mt-3">
                    Creative <span>UI/UX</span> Designer &amp; Developer
                  </h1>
                  <p>
                    <a href="#" className="btn btn-primary">
                      Hire me
                    </a>{" "}
                    <a href="#" className="btn btn-primary btn-outline-primary">
                      Download CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="overlay" />
          <div className="container-fluid px-md-0">
            <div
              className="row d-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third order-md-last img"
                style={{ backgroundImage: "url(images/bg_2.jpg)" }}
              >
                <div className="overlay" />
                <div className="overlay-1" />
              </div>
              <div
                className="one-forth d-flex align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">We Design &amp; Build Brands</span>
                  <h1 className="mb-4 mt-3">
                    Hi, I am <span>Clyde</span> This is my favorite work.
                  </h1>
                  <p>
                    <a href="#" className="btn btn-primary">
                      Hire me
                    </a>{" "}
                    <a href="#" className="btn btn-primary btn-outline-primary">
                      Download CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-counter img bg-light" id="section-counter">
      <div className="container">
        <div className="row">
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-suitcase" />
              </div>
              <div className="text">
                <strong className="number" data-number={750}>
                  0
                </strong>
                <span>Project Complete</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-loyalty" />
              </div>
              <div className="text">
                <strong className="number" data-number={568}>
                  0
                </strong>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-coffee" />
              </div>
              <div className="text">
                <strong className="number" data-number={478}>
                  0
                </strong>
                <span>Cups of coffee</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-calendar" />
              </div>
              <div className="text">
                <strong className="number" data-number={780}>
                  0
                </strong>
                <span>Years experienced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="ftco-about ftco-section ftco-no-pt ftco-no-pb"
      id="about-section"
    >
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay" />
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(images/about-1.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
            <div className="py-md-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <span className="subheading">My Intro</span>
                  <h2
                    className="mb-4"
                    style={{ fontSize: 34, textTransform: "capitalize" }}
                  >
                    About Me
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies it
                    with the necessary regelialia. It is a paradisematic country,
                    in which roasted parts of sentences fly into your mouth.
                  </p>
                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex">
                      <span>Name:</span> <span>Clyde Nowitzki</span>
                    </li>
                    <li className="d-flex">
                      <span>Date of birth:</span> <span>January 01, 1990</span>
                    </li>
                    <li className="d-flex">
                      <span>Address:</span>{" "}
                      <span>San Francisco CA 97987 USA</span>
                    </li>
                    <li className="d-flex">
                      <span>Zip code:</span> <span>1000</span>
                    </li>
                    <li className="d-flex">
                      <span>Email:</span> <span>cydenowitzki@gmail.com</span>
                    </li>
                    <li className="d-flex">
                      <span>Phone: </span> <span>+1-2234-5678-9-0</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="my-interest d-lg-flex w-100">
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-listening" />
                      </div>
                      <div className="text">Music</div>
                    </div>
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-suitcases" />
                      </div>
                      <div className="text">Travel</div>
                    </div>
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-video-player" />
                      </div>
                      <div className="text">Movie</div>
                    </div>
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-football" />
                      </div>
                      <div className="text">Sports</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section bg-light" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Skills</span>
            <h2 className="mb-4">My Skills</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row progress-circle mb-5">
          <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="h5 font-weight-bold text-center mb-4">CSS</h2>
              {/* Progress bar 1 */}
              <div className="progress mx-auto" data-value={95}>
                <span className="progress-left">
                  <span className="progress-bar border-primary" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar border-primary" />
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    95<sup className="small">%</sup>
                  </div>
                </div>
              </div>
              {/* END */}
              {/* Demo info */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">28%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">60%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="h5 font-weight-bold text-center mb-4">HTML</h2>
              {/* Progress bar 1 */}
              <div className="progress mx-auto" data-value={98}>
                <span className="progress-left">
                  <span className="progress-bar border-primary" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar border-primary" />
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    98<sup className="small">%</sup>
                  </div>
                </div>
              </div>
              {/* END */}
              {/* Demo info */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">28%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">60%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="h5 font-weight-bold text-center mb-4">jQuery</h2>
              {/* Progress bar 1 */}
              <div className="progress mx-auto" data-value={68}>
                <span className="progress-left">
                  <span className="progress-bar border-primary" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar border-primary" />
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    68<sup className="small">%</sup>
                  </div>
                </div>
              </div>
              {/* END */}
              {/* Demo info */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">28%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">60%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="h5 font-weight-bold text-center mb-4">Photoshop</h2>
              {/* Progress bar 1 */}
              <div className="progress mx-auto" data-value={92}>
                <span className="progress-left">
                  <span className="progress-bar border-primary" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar border-primary" />
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    92<sup className="small">%</sup>
                  </div>
                </div>
              </div>
              {/* END */}
              {/* Demo info */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">28%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">60%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="h5 font-weight-bold text-center mb-4">WordPress</h2>
              {/* Progress bar 1 */}
              <div className="progress mx-auto" data-value={83}>
                <span className="progress-left">
                  <span className="progress-bar border-primary" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar border-primary" />
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    83<sup className="small">%</sup>
                  </div>
                </div>
              </div>
              {/* END */}
              {/* Demo info */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">28%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">60%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="h5 font-weight-bold text-center mb-4">SEO</h2>
              {/* Progress bar 1 */}
              <div className="progress mx-auto" data-value={95}>
                <span className="progress-left">
                  <span className="progress-bar border-primary" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar border-primary" />
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    95<sup className="small">%</sup>
                  </div>
                </div>
              </div>
              {/* END */}
              {/* Demo info */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">28%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">60%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">I am grat at</span>
            <h2 className="mb-4">We do awesome services for our clients</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-3d-design" />
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Web Design</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
              <div className="icon shadow d-flex align-items-center justify-content-center">
                <span className="flaticon-app-development" />
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Web Application</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
              <div className="icon shadow d-flex align-items-center justify-content-center">
                <span className="flaticon-web-programming" />
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Web Development</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
              <div className="icon shadow d-flex align-items-center justify-content-center">
                <span className="flaticon-branding" />
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Banner Design</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
              <div className="icon shadow d-flex align-items-center justify-content-center">
                <span className="flaticon-computer" />
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Branding</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
              <div className="icon shadow d-flex align-items-center justify-content-center">
                <span className="flaticon-vector" />
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Icon Design</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
              <div className="icon shadow d-flex align-items-center justify-content-center">
                <span className="flaticon-vector" />
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">Graphic Design</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
              <div className="icon shadow d-flex align-items-center justify-content-center">
                <span className="flaticon-zoom" />
              </div>
              <div className="media-body">
                <h3 className="heading mb-3">SEO</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-hireme">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-8 col-lg-8 d-flex align-items-center">
            <div className="w-100 py-4">
              <h2>Have a project on your mind.</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly.
              </p>
              <p className="mb-0">
                <a href="#" className="btn btn-white py-3 px-4">
                  Contact me
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 d-flex align-items-end">
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container-fluid px-md-4">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Accomplishments</span>
            <h2 className="mb-4">Our Projects</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div
              className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/work-1.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/work-2.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/work-3.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/work-4.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/work-5.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/work-6.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/work-7.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/work-8.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section testimony-section bg-primary">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section heading-section-white text-center ftco-animate">
            <span className="subheading">Testimonies</span>
            <h2 className="mb-4">What client says about?</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel">
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <span className="fa fa-quote-left" />
                    <p className="mb-4 pl-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <span className="fa fa-quote-left" />
                    <p className="mb-4 pl-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_2.jpg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <span className="fa fa-quote-left" />
                    <p className="mb-4 pl-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_3.jpg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <span className="fa fa-quote-left" />
                    <p className="mb-4 pl-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <span className="fa fa-quote-left" />
                    <p className="mb-4 pl-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_2.jpg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section bg-light" id="blog-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Blog</span>
            <h2 className="mb-4">Our Blog</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry justify-content-end">
              <a
                href="single.html"
                className="block-20"
                style={{ backgroundImage: 'url("images/image_1.jpg")' }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <div className="d-flex align-items-center mb-3 meta">
                  <p className="mb-0">
                    <span className="mr-2">July 03, 2020</span>
                    <a href="#" className="mr-2">
                      Admin
                    </a>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </p>
                </div>
                <h3 className="heading">
                  <a href="single.html">
                    Why Lead Generation is Key for Business Growth
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry justify-content-end">
              <a
                href="single.html"
                className="block-20"
                style={{ backgroundImage: 'url("images/image_2.jpg")' }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <div className="d-flex align-items-center mb-3 meta">
                  <p className="mb-0">
                    <span className="mr-2">July 03, 2020</span>
                    <a href="#" className="mr-2">
                      Admin
                    </a>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </p>
                </div>
                <h3 className="heading">
                  <a href="single.html">
                    Why Lead Generation is Key for Business Growth
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry">
              <a
                href="single.html"
                className="block-20"
                style={{ backgroundImage: 'url("images/image_3.jpg")' }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <div className="d-flex align-items-center mb-3 meta">
                  <p className="mb-0">
                    <span className="mr-2">July 03, 2020</span>
                    <a href="#" className="mr-2">
                      Admin
                    </a>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </p>
                </div>
                <h3 className="heading">
                  <a href="single.html">
                    Why Lead Generation is Key for Business Growth
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Contact us</span>
            <h2 className="mb-4">Have a Project?</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row block-9">
          <div className="col-md-8">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="textarea"
                      name="msg"
                      cols={30}
                      rows={7}
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4 d-flex pl-md-5">
            <div className="row">
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker" />
                </div>
                <div className="text">
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New York
                    NY 10016
                  </p>
                </div>
              </div>
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone" />
                </div>
                <div className="text">
                  <p>
                    <span>Phone:</span>{" "}
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
              </div>
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane" />
                </div>
                <div className="text">
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe" />
                </div>
                <div className="text">
                  <p>
                    <span>Website</span> <a href="#">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
            {/* <div id="map" class="map"></div> */}
          </div>
        </div>
      </div>
    </section>
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Lets talk about</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Data Analysis
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Graphic Design
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map marker" />
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-phone" />
                      <span className="text">+2 392 3929 210</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-paper-plane pr-4" />
                      <span className="text">info@yourdomain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="fa fa-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank" rel="noreferrer">
                Colorlib
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
    </footer>
    <Script src="js/jquery.min.js"></Script>
    <Script src="js/jquery-migrate-3.0.1.min.js"></Script>
		<Script src="js/popper.min.js"></Script>
		<Script src="js/bootstrap.min.js"></Script>
		<Script src="js/jquery.easing.1.3.js"></Script>
		<Script src="js/jquery.waypoints.min.js"></Script>
		<Script src="js/jquery.stellar.min.js"></Script>
		<Script src="js/owl.carousel.min.js"></Script>
		<Script src="js/jquery.magnific-popup.min.js"></Script>
		<Script src="js/jquery.animateNumber.min.js"></Script>
		<Script src="js/scrollax.min.js"></Script>
		<Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></Script>
		<Script src="js/google-map.js"></Script>
    <Script src="js/main.js"></Script>

  </>
  
 
    
  )
}

export default Home