import React from "react";
const App = () => {

    // Function will execute on click of button
    const jan = () => {
        // using Java Script method to get PDF file
        fetch('./Newsletters/CIAP_JAN22_NEWSLETTER.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Jan_22_Newsletter.pdf';
                alink.click();
            })
        })
    }
    const feb = () => {
        // using Java Script method to get PDF file
        fetch('./Newsletters/CIAP_FEB_MAR22_NEWSLETTER.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Feb_Mar_22_Newsletter.pdf';
                alink.click();
            })
        })
    }
    const apr = () => {
        // using Java Script method to get PDF file
        fetch('./Newsletters/CIAP_APR22_NEWSLETTER.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Apr_22_Newsletter.pdf';
                alink.click();
            })
        })
    }
    const may = () => {
        // using Java Script method to get PDF file
        fetch('./Newsletters/CIAP_MAY22_NEWSLETTER.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'May_22_Newsletter.pdf';
                alink.click();
            })
        })
    }
    const june = () => {
        // using Java Script method to get PDF file
        fetch('./Newsletters/CIAP_JUNE22_NEWSLETTER.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'June_22_Newsletter.pdf';
                alink.click();
            })
        })
    }
    const july = () => {
        // using Java Script method to get PDF file
        fetch('./Newsletters/CIAP_JULY22_NEWSLETTER.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'July_22_Newsletter.pdf';
                alink.click();
            })
        })
    }
    const aug = () => {
        // using Java Script method to get PDF file
        fetch('./Newsletters/CIAP_AUG22_NEWSLETTER.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Aug_22_Newsletter.pdf';
                alink.click();
            })
        })
    }
    const sep = () => {
        // using Java Script method to get PDF file
        fetch('./Newsletters/CIAP_SEP22_NEWSLETTER.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Sep_22_Newsletter.pdf';
                alink.click();
            })
        })
    }
    const oct = () => {
        // using Java Script method to get PDF file
        fetch('./Newsletters/CIAP_OCT22_NEWSLETTER.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Sep_22_Newsletter.pdf';
                alink.click();
            })
        })
    }
    const nov = () => {
        // using Java Script method to get PDF file
        fetch('./Newsletters/CIAP_NOV22_NEWSLETTER.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Sep_22_Newsletter.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <section id="team" className="team section-bg">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>Our <strong>NewsLetters</strong></h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>January - 2022</h4>
                                    <center>
                                        <div>

                                        <button className="buttondownload" onClick={jan}>
                                            Download Now
                                        </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>Feb & Mar - 2022</h4>
                                    <center>
                                        <div>

                                        <button className="buttondownload" onClick={feb}>
                                            Download Now
                                        </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>April - 2022</h4>
                                    <center>
                                        <div>

                                        <button className="buttondownload" onClick={apr}>
                                            Download Now
                                        </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>May - 2022</h4>
                                    <center>
                                        <div>

                                        <button className="buttondownload" onClick={may}>
                                            Download Now
                                        </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>June - 2022</h4>
                                    <center>
                                        <div>

                                        <button className="buttondownload" onClick={june}>
                                            Download Now
                                        </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>July - 2022</h4>
                                    <center>
                                        <div>

                                        <button className="buttondownload" onClick={july}>
                                            Download Now
                                        </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>August - 2022</h4>
                                    <center>
                                        <div>

                                        <button className="buttondownload" onClick={aug}>
                                            Download Now
                                        </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>September - 2022</h4>
                                    <center>
                                        <div>

                                        <button className="buttondownload" onClick={sep}>
                                            Download Now
                                        </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>October - 2022</h4>
                                    <center>
                                        <div>

                                        <button className="buttondownload" onClick={oct}>
                                            Download Now
                                        </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>November - 2022</h4>
                                    <center>
                                        <div>

                                        <button className="buttondownload" onClick={nov}>
                                            Download Now
                                        </button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default App;
