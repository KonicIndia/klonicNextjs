import React from 'react';
// import Slider from "react-slick";

import Counter from '../counter/Counter'; // Import the custom Counter component
import aboutSectionImg1 from "../../assets/webp/images/about-section.avif"
import Link from 'next/link';
import Image from 'next/image';
// import aboutSectionImg2 from "../../assets/webp/images/about-section_2.avif"
// import aboutSectionImg3 from "../../assets/webp/images/about-section_3.avif"

function ImageText() {

    // const settings = {
    //     dots: false, // Hide dots
    //     infinite: true, // Enable infinite looping
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true, // Enable autoplay
    //     autoplaySpeed: 2000, // Set the speed for autoplay
    //     arrows: false, // Hide navigation arrows
    // };

    return (
        <section className="about-area py-5" style={{ backgroundColor: "#eee" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="about-content">
                            <h3><span>Moga Medicity</span> Hospital</h3>
                            <p>As one of the foremost names in Healthcare in Punjab region, Moga Medicity Super & Multispecialty Hospital, MOGA, is the most comprehensive super specialty hospital focusing on Cardio, Neuro, Gastro, Renal Sciences, Trauma & Critical Care and has been setting standards since its inception in 2005, driven by our vision to establish One Stop Solution that provides medical care in compassionate manner.
                                <br /><br />
                                Backing them is the best healthcare infrastructure and the modern state of the art equipment supported by cutting edge technology.<br /><br />

                                The relentless pursuit of excellence is reflected in Moga Medicity Multi-Superspeciality Hospital adherence to the best protocols and standards in patient care and clinical services.</p><br />

                            <div className="row mb-4" id="numbers">
                                <div className="col-md-3 text-center">
                                    <div className="box">
                                        <Counter end={25000} duration={2000} />+
                                        <br />
                                        <b>Happy Patients</b>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="box">
                                        <Counter end={150} duration={2000} />+
                                        <br />
                                        <b>Bedded Hospital</b>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="box">
                                        <Counter end={25} duration={2000} />+
                                        <br />
                                        <b>Doctors</b>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="box">
                                        <Counter end={20} duration={2000} />+
                                        <br />
                                        <b>Years Experience</b>
                                    </div>
                                </div>
                            </div>
                            <Link href="/about" className="default-btn">READ MORE</Link>
                        </div>
                    </div>

                    <div className="col-lg-4" style={{ marginTop: "40px" }}>
                        {/* <Slider {...settings}> */}
                            <div>
                                {/* <img className="d-block w-100" src={aboutSectionImg1} alt="First slide" style={{ borderRadius: "20px" }} /> */}
                                <Image src={aboutSectionImg1} className=' textImage-img w-100 h-auto d-block'  alt="First slide" style={{ borderRadius: "20px" }} />
                            </div>
                            {/* <div>
                                <img className="d-block w-100" src={aboutSectionImg2} alt="Second slide" style={{ borderRadius: "20px" }} />
                            </div>
                            <div>
                                <img className="d-block w-100" src={aboutSectionImg3} alt="Third slide" style={{ borderRadius: "20px" }} />
                            </div>
                        </Slider> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageText;
