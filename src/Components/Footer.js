import React from 'react'

const Footer = () => {
    return (
   <>
            <footer id="footer" >

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>CIAP</h3>
                                <p> <br />
                                    {/* A108 Adam Street <br/>
                                        New York, NY 535022<br/>
                                            United States <br/><br/>
                                                <strong>Phone:</strong> +1 5589 55488 55<br/> */}
                                                    <strong>Email:</strong> tladvisor@srmist.edu.in<br/>
                                                    </p>
                                                </div>

                                                <div className="col-lg-2 col-md-6 footer-links">
                                                    <h4>Useful Links</h4>
                                                    <ul>
                                                        <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                                                        <li><i className="bx bx-chevron-right"></i> <a href="about">About us</a></li>
                                                        <li><i className="bx bx-chevron-right"></i> <a href="upcomingevents">Upcoming Events</a></li>
                                                        <li><i className="bx bx-chevron-right"></i> <a href="news">News</a></li>
                                                        <li><i className="bx bx-chevron-right"></i> <a href="contact">Contact</a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-lg-3 col-md-6 footer-links">
                                                    <h4> Releted Links</h4>
                                                    <ul>
                                                        <li><i className="bx bx-chevron-right"></i> <a href="https://srmiiec.com/">SIIEC</a></li>
                                                        <li><i className="bx bx-chevron-right"></i> <a href="https://fablab.srmiiec.com/"> FABLAB </a></li>
                                                        <li><i className="bx bx-chevron-right"></i> <a href="https://iedc.srmiiec.com/">IEDC</a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-lg-4 col-md-6 footer-newsletter">
                                                    <h4>Join Our Newsletter</h4>
                                                    <p>Get Instant updates of upcoming events.</p>
                                                    <form action="" method="post">
                                                        <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                                    </form>
                                                </div>

                                            </div>
                                            </div>
                                        </div>
                                        {/* footer-copyright text-center p-3 grey lighten-1 text-black-50  */}
                                        <div className="container  py-4 text-center">

                                            <div className="align-items-center justify-content-center">
                                                <div className="copyright text-center">
                                                    &copy; Copyright <strong><span>CIAP</span></strong>. All Rights Reserved
                                                </div>
                                                <div className="credits text-center">
                                                    Designed by <a href="https://www.linkedin.com/in/nikhil-taparia/" target={'_blank'}>NIKHIL TAPARIA 🚀</a>

                                                </div>
                                            </div>
                                            {/* <div className="social-links text-center text-md-right pt-3 pt-md-0">
                                                <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                                                <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                                                <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                                <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
                                                <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                            </div> */}
                                        </div>
                                    </footer>
                                </>
                                )
}

                                export default Footer