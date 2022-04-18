import React, { useEffect } from 'react'

const Contact = (props) => {
    useEffect(() => {
        document.title = `${props.titleChange} - SIDC`;
        //eslint-disable-next-line
    }, [])
    return (
        <>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Contact</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Contact</li>
                        </ol>
                    </div>

                </div>
            </section>
            <div className="map-section">
                <iframe style={{ border: '0', width: '100%', height: '350px' }} title='Map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
            </div>

            <section id="contact" className="contact">
                <div className="container">

                    <div className="row justify-content-center" data-aos="fade-up">

                        <div className="col-lg-10">

                            <div className="info-wrap">
                                <div className="row">
                                    <div className="col-lg-4 info">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street<br />New York, NY 535022</p>
                                    </div>

                                    <div className="col-lg-4 info mt-4 mt-lg-0">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@example.com<br />contact@example.com</p>
                                    </div>

                                    <div className="col-lg-4 info mt-4 mt-lg-0">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="row mt-5 justify-content-center" data-aos="fade-up">
                        <div className="col-lg-10">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact