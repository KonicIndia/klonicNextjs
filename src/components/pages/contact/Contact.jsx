import React from 'react'
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums'
import { MdAddIcCall } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { FaHashtag } from 'react-icons/fa';

function Contact() {
    return (
        <>
            <PageBreadCrums headingBreadCrap={"Contact"} homeLink={"Home"} pageLink={"Contact"} />

            <section className="about-area p-5" style={{ backgroundolor: '#fff' }}>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-sm-4">
                            <div className="single-core-features">
                                <div className="icon">
                                    <MdAddIcCall />
                                </div>
                                <h3>Mobile</h3>
                                <a href="tel:+919115510109">+91-91155-10109</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-4">
                            <div className="single-core-features">
                                <div className="icon">
                                    <MdMarkEmailRead />
                                </div>
                                <h3>Email</h3>
                                <a href="mailto:info@mogamedicity.com">info@mogamedicity.com</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-4">
                            <div className="single-core-features">
                                <div className="icon">
                                    <GrMapLocation />
                                </div>
                                <h3>Address</h3>
                                <a href="javascript:void(0)"> Barnala - Amritsar Bye Pass, Moga, PUNJAB</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>






            <section className="contact-area p-4">
        <div className="container">
            <div className="section-title">
                <span className="sub-title">
                <FaHashtag />
                Message Us
                </span>
                <h2>Enquiry Form</h2>
            </div>
            <div className="contact-form">
                <form action="./query.php" method="post">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
                                <input type="text" name="name" className="form-control" required="" data-error="Please enter your name" placeholder="Name" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" required="" data-error="Please enter your email" placeholder="Email" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" name="mobile" required="" data-error="Please enter your number" className="form-control" placeholder="Phone" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" name="subject" className="form-control" required="" data-error="Please enter your subject" placeholder="Subject" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <textarea name="message" className="form-control" cols="30" rows="5" required="" data-error="Write your message" placeholder="Your Message"></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <button className="default-btn" type="submit" name="submit" value="Submit" style={{pointerEvents: 'all', cursor: 'pointer'}}>Send Message</button>

                            <div className="clearfix"></div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </section>









        </>
    )
}

export default Contact