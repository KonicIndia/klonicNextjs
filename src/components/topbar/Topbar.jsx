import React from 'react';
// import './Topbar.css'
import sitelogo1 from '../../assets/webp/images/logo-1.avif';
import sitelogo2 from '../../assets/webp/images/NBAH.avif';
import facebookIcon from '../../assets/webp/images/facebook.avif';
import instagramIcon from '../../assets/webp/images/instagram.avif';
import youtubeIcon from '../../assets/webp/images/youtube.avif';
import { PiPhonePlusBold } from "react-icons/pi";
import { RxTimer } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';

function Topbar() {
    return (
        <section className="top-bar p-4 ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="row">
                            <div className="col-md-6">
                                <Link className='topbar-anchor' href="/">
                                    {/* <img src={sitelogo1} className="img-fluid" alt="logo" style={{width: "98%"}} /> */}
                                    <Image src={sitelogo1} width={'100%'} height={'100%'} className="img-fluid" alt="logo" />
                                </Link>
                            </div>
                            <div className="col-md-6 text-center">
                                {/* <img src={sitelogo2} alt="logo" className="img-fluid" style={{width: "40%"}} /> */}
                                <Image src={sitelogo2}  width={78} height={78} className="img-fluid" alt="logo" />

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                                <div className="row align-items-center">
                                    <div className="col-2 ps-0">
                                    <PiPhonePlusBold style={{ fontSize: '40px' }} />
                                    </div>
                                    <div className="col-10">
                                        <p className='topbar-para'>Call Today</p>
                                        <p className='topbar-para'><a className='topbar-anchor' href="tel:+919115510109">+91-91155-10109</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                                <div className="row align-items-center">
                                    <div className="col-2  ps-0"> 
                                        <RxTimer style={{ fontSize: "40px" }}/>
                                    </div>
                                    <div className="col-10">
                                        <p className='topbar-para'>OPD Timings</p>
                                        <p className='topbar-para'>09:00 AM to 05:00 PM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 text-center">
                                <a href="https://drvishavnoorkalra.com" className="nav-link topbar-anchor">Dr Vishavnoor Kalra</a>
                                <div className="d-flex justify-content-center mt-2">
                                    <a href="https://www.facebook.com/mogamedicityhosp">
                                        {/* <img src={facebookIcon} className="img-fluid mx-2" alt="Facebook" /> */}
                                        <Image src={facebookIcon} width={30} height={30} className="img-fluid  mx-2" alt="Facebook" />

                                    </a>
                                    <a href="https://www.instagram.com/medicitymoga/">
                                        {/* <img src={instagramIcon} className="img-fluid mx-2" alt="Instagram" /> */}
                                        <Image src={instagramIcon} width={30} height={30} className="img-fluid  mx-2" alt="Instagram" />

                                    </a>
                                    <a href="https://www.youtube.com/channel/UCKRigTXpxRqTzK2o0XNzwZw">
                                        {/* <img src={youtubeIcon} className="img-fluid mx-2" alt="YouTube" /> */}
                                        <Image src={youtubeIcon} width={30} height={30} className="img-fluid  mx-2" alt="YouTube" />

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar;
