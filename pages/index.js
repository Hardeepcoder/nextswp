import React from 'react'
import Layout from './layout'

function Home() {
  return (
    
    <Layout>
    
    {/* ***** Header Area End ***** */}
    <div
      className="main-banner wow fadeIn"
      id="top"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div
                  className="left-content show-up header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>Digital Media Agency</h6>
                      <h2>We Boost Your Website Traffic</h2>
                      <p>
                        This template is brought to you by TemplateMo website.
                        Feel free to use this for a commercial purpose. You are
                        not allowed to redistribute the template ZIP file on any
                        other template website. Thank you.
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="border-first-button scroll-to-section">
                        <a href="#contact">Free Quote</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="right-image wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="assets/images/slider-dec-v3.png"  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-left-image  wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="assets/images/about-dec-v3.png"  />
                </div>
              </div>
              <div
                className="col-lg-6 align-self-center  wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="about-right-content">
                  <div className="section-heading">
                    <h6>About Us</h6>
                    <h4>
                      Who is DigiMedia <em>Agency</em>
                    </h4>
                    <div className="line-dec" />
                  </div>
                  <p>
                    We hope this DigiMedia template is useful for your work. You
                    can use this template for any purpose. You may{" "}
                    <a
                      rel="nofollow"
                      href="http://paypal.me/templatemo"
                      target="_blank"
                    >
                      contribute a little amount
                    </a>{" "}
                    via PayPal to{" "}
                    <a href="https://templatemo.com/contact" target="_blank">
                      support TemplateMo
                    </a>{" "}
                    in creating new templates regularly.
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item first-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="progress" data-percentage={90}>
                          <span className="progress-left">
                            <span className="progress-bar" />
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar" />
                          </span>
                          <div className="progress-value">
                            <div>
                              90%
                              <br />
                              <span>Coding</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item second-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="progress" data-percentage={80}>
                          <span className="progress-left">
                            <span className="progress-bar" />
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar" />
                          </span>
                          <div className="progress-value">
                            <div>
                              80%
                              <br />
                              <span>Photoshop</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item third-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="progress" data-percentage={80}>
                          <span className="progress-left">
                            <span className="progress-bar" />
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar" />
                          </span>
                          <div className="progress-value">
                            <div>
                              80%
                              <br />
                              <span>Animation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="services" className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-heading  wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h6>Our Services</h6>
              <h4>
                What Our Agency <em>Provides</em>
              </h4>
              <div className="line-dec" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="naccs">
              <div className="grid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu">
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img src="assets/images/service-icon-01.png"  />
                          </span>
                          Apartments
                        </div>
                      </div>
                      <div>
                        <div className="thumb">
                          <span className="icon">
                            <img src="assets/images/service-icon-02.png"  />
                          </span>
                          Food &amp; Life
                        </div>
                      </div>
                      <div>
                        <div className="thumb">
                          <span className="icon">
                            <img src="assets/images/service-icon-03.png"  />
                          </span>
                          Cars
                        </div>
                      </div>
                      <div>
                        <div className="thumb">
                          <span className="icon">
                            <img src="assets/images/service-icon-04.png"  />
                          </span>
                          Shopping
                        </div>
                      </div>
                      <div className="last-thumb">
                        <div className="thumb">
                          <span className="icon">
                            <img src="assets/images/service-icon-01.png"  />
                          </span>
                          Traveling
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul className="nacc">
                      <li className="active">
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-6 align-self-center">
                                <div className="left-text">
                                  <h4>SEO Analysis &amp; Daily Reports</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sedr do eiusmod deis tempor
                                    incididunt ut labore et dolore kengan darwin
                                    doerski token. dover lipsum lorem and the
                                    others.
                                  </p>
                                  <div className="ticks-list">
                                    <span>
                                      <i className="fa fa-check" /> Optimized
                                      Template
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> Data Info
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> SEO Analysis
                                    </span>
                                    <span>
                                      <i className="fa fa-check" /> Data Info
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> SEO Analysis
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> Optimized
                                      Template
                                    </span>
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sedr do eiusmod deis tempor
                                    incididunt.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-6 align-self-center">
                                <div className="right-image">
                                  <img
                                    src="assets/images/services-image.jpg"
                                    
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-6 align-self-center">
                                <div className="left-text">
                                  <h4>Hehy Food &amp; Life</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sedr do eiusmod deis tempor
                                    incididunt ut labore et dolore kengan darwin
                                    doerski token. dover lipsum lorem and the
                                    others.
                                  </p>
                                  <div className="ticks-list">
                                    <span>
                                      <i className="fa fa-check" /> Optimized
                                      Template
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> Data Info
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> SEO Analysis
                                    </span>
                                    <span>
                                      <i className="fa fa-check" /> Data Info
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> SEO Analysis
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> Optimized
                                      Template
                                    </span>
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sedr do eiusmod deis tempor
                                    incididunt.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-6 align-self-center">
                                <div className="right-image">
                                  <img
                                    src="assets/images/services-image-02.jpg"
                                    
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-6 align-self-center">
                                <div className="left-text">
                                  <h4>Car Re-search &amp; Transport</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sedr do eiusmod deis tempor
                                    incididunt ut labore et dolore kengan darwin
                                    doerski token. dover lipsum lorem and the
                                    others.
                                  </p>
                                  <div className="ticks-list">
                                    <span>
                                      <i className="fa fa-check" /> Optimized
                                      Template
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> Data Info
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> SEO Analysis
                                    </span>
                                    <span>
                                      <i className="fa fa-check" /> Data Info
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> SEO Analysis
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> Optimized
                                      Template
                                    </span>
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sedr do eiusmod deis tempor
                                    incididunt.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-6 align-self-center">
                                <div className="right-image">
                                  <img
                                    src="assets/images/services-image-03.jpg"
                                    
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-6 align-self-center">
                                <div className="left-text">
                                  <h4>Online Shopping &amp; Tracking ID</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sedr do eiusmod deis tempor
                                    incididunt ut labore et dolore kengan darwin
                                    doerski token. dover lipsum lorem and the
                                    others.
                                  </p>
                                  <div className="ticks-list">
                                    <span>
                                      <i className="fa fa-check" /> Optimized
                                      Template
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> Data Info
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> SEO Analysis
                                    </span>
                                    <span>
                                      <i className="fa fa-check" /> Data Info
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> SEO Analysis
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> Optimized
                                      Template
                                    </span>
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sedr do eiusmod deis tempor
                                    incididunt.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-6 align-self-center">
                                <div className="right-image">
                                  <img
                                    src="assets/images/services-image-04.jpg"
                                    
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-6 align-self-center">
                                <div className="left-text">
                                  <h4>Enjoy &amp; Travel</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sedr do eiusmod deis tempor
                                    incididunt ut labore et dolore kengan darwin
                                    doerski token. dover lipsum lorem and the
                                    others.
                                  </p>
                                  <div className="ticks-list">
                                    <span>
                                      <i className="fa fa-check" /> Optimized
                                      Template
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> Data Info
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> SEO Analysis
                                    </span>
                                    <span>
                                      <i className="fa fa-check" /> Data Info
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> SEO Analysis
                                    </span>{" "}
                                    <span>
                                      <i className="fa fa-check" /> Optimized
                                      Template
                                    </span>
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sedr do eiusmod deis tempor
                                    incididunt.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-6 align-self-center">
                                <div className="right-image">
                                  <img
                                    src="assets/images/services-image.jpg"
                                    
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="free-quote" className="free-quote">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div
              className="section-heading  wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <h6>Get Your Free Quote</h6>
              <h4>Grow With Us Now</h4>
              <div className="line-dec" />
            </div>
          </div>
          <div
            className="col-lg-8 offset-lg-2  wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.8s"
          >
            <form id="search" method="GET">
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <fieldset>
                    <input
                      type="web"
                      name="web"
                      className="website"
                      placeholder="Your website URL..."
                      autoComplete="on"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <fieldset>
                    <input
                      type="address"
                      name="address"
                      className="email"
                      placeholder="Email Address..."
                      autoComplete="on"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <fieldset>
                    <button type="submit" className="main-button">
                      Get Quote Now
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   
    <div id="blog" className="blog">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 offset-lg-4  wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="section-heading">
              <h6>Recent News</h6>
              <h4>
                Check Our Blog <em>Posts</em>
              </h4>
              <div className="line-dec" />
            </div>
          </div>
          <div
            className="col-lg-6 show-up wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="blog-post">
              <div className="thumb">
                <a >
                  <img src="assets/images/blog-post-01.jpg"  />
                </a>
              </div>
              <div className="down-content">
                <span className="category">SEO Analysis</span>
                <span className="date">03 August 2021</span>
                <a >
                  <h4>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adelore Eiusmod Tempor
                    Incididunt
                  </h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doers itii eiumod deis tempor incididunt ut labore.
                </p>
                <span className="author">
                  <img src="assets/images/author-post.jpg"  />
                  By: Andrea Mentuzi
                </span>
                <div className="border-first-button">
                  <a >Discover More</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="blog-posts">
              <div className="row">
                <div className="col-lg-12">
                  <div className="post-item">
                    <div className="thumb">
                      <a >
                        <img src="assets/images/blog-post-02.jpg"  />
                      </a>
                    </div>
                    <div className="right-content">
                      <span className="category">SEO Analysis</span>
                      <span className="date">24 September 2021</span>
                      <a >
                        <h4>Lorem Ipsum Dolor Sit Amei Eiusmod Tempor</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, cocteturi adipiscing
                        eliterski.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="post-item">
                    <div className="thumb">
                      <a >
                        <img src="assets/images/blog-post-03.jpg"  />
                      </a>
                    </div>
                    <div className="right-content">
                      <span className="category">SEO Analysis</span>
                      <span className="date">24 September 2021</span>
                      <a >
                        <h4>Lorem Ipsum Dolor Sit Amei Eiusmod Tempor</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, cocteturi adipiscing
                        eliterski.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="post-item last-post-item">
                    <div className="thumb">
                      <a >
                        <img src="assets/images/blog-post-04.jpg"  />
                      </a>
                    </div>
                    <div className="right-content">
                      <span className="category">SEO Analysis</span>
                      <span className="date">24 September 2021</span>
                      <a >
                        <h4>Lorem Ipsum Dolor Sit Amei Eiusmod Tempor</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, cocteturi adipiscing
                        eliterski.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div
              className="section-heading wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h6>Contact Us</h6>
              <h4>
                Get In Touch With Us <em>Now</em>
              </h4>
              <div className="line-dec" />
            </div>
          </div>
          <div
            className="col-lg-12 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.25s"
          >
            <form id="contact" method="post">
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-dec">
                    <img src="assets/images/contact-dec-v3.png"  />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div id="map">
                    <iframe
                      src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="636px"
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="fill-form">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src="assets/images/phone-icon.png"  />
                            <a >010-020-0340</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src="assets/images/email-icon.png"  />
                            <a >our@email.com</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src="assets/images/location-icon.png"  />
                            <a >123 Rio de Janeiro</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Name"
                            autoComplete="on"
                            required
                          />
                        </fieldset>
                        <fieldset>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="Your Email"
                            required
                          />
                        </fieldset>
                        <fieldset>
                          <input
                            type="subject"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            autoComplete="on"
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <textarea
                            name="message"
                            type="text"
                            className="form-control"
                            id="message"
                            placeholder="Message"
                            required
                            defaultValue={""}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button "
                          >
                            Send Message Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </Layout>
  
    
  )
}

export default Home