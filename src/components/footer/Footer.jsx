import React from 'react'
import footer_logo from '../../assets/webp/images/footer_logo.avif'
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <>

            {/* <a href="tel:+919115510109"><img src="assets/images/call.png" class="fix-call" /></a>
            <a href="https://api.whatsapp.com/send?phone=919115510109&text=Hello, I have some query"><img src="assets/images/whatsapp.png" class="fix-wap" /></a>
            <a href="appointment.php"><img src="assetsfooter_logo" class="fix-apt" /></a> */}

            <footer className="footer-area  py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h2>
                                    {/* <img className='logo_img' src={footer_logo} alt="logo" /> */}
                                    <Image src={footer_logo} width={100} height={100} className='log_img' alt='footer logo' />
                                </h2>
                                <p>As one of the foremost names in healthcare in the region Moga Medicity has been setting standards since its inception in 2005.</p>


                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Links</h3>
                                <ul className="quick-links">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/departments">Departments</Link></li>
                                    <li><Link href="/gallery">Gallery</Link></li>
                                    {/* <li><Link href="#">Enquiry</Link></li> */}
                                    <li><Link href="/contact">Contact</Link></li>

                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Information</h3>
                                <ul className="footer-information">
                                    <li>
                                        <TbPhoneCall />
                                        Call Today
                                        <span><a href="tel:+919115510109">+91-91155-10109</a></span>
                                    </li>
                                    <li>
                                        <MdOutlineMarkEmailRead />
                                        Email
                                        <span><a href="mailto:info@mogamedicity.com">info@mogamedicity.com</a></span>
                                    </li>

                                    <li>
                                        <GrMapLocation />
                                        Our Location
                                        <span>  Barnala - Amritsar Bye Pass, Moga, PUNJAB</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Locate Us</h3>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54821.695182974894!2d75.11077880859376!3d30.820690871653373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a091229006bcf%3A0xd5f18945eff00f3f!2sMOGA%20MEDICITY%20SUPERSPECIALTY%20HOSPITAL!5e0!3m2!1sen!2sin!4v1675341816534!5m2!1sen!2sin" width="100%" height="250" style={{ border: "0px" }} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-area-content">
                        <p>Copyright © 2021 Moga Medicity Hospital. All rights reserved.</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Footer