'use client'
import Link from 'next/link';
import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import Slider from 'react-slick';


function PatientTestimonials() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3, // Default to show 3 slides
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="review-area py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="section-title-warp">
                                <h2>Patient Testimonials</h2>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="section-warp-btn">
                                <Link href="#" className="default-btn">View All</Link>
                            </div>
                        </div>
                    </div>

                    <div className="review-slides col-12">
                        <Slider {...settings}>
                            <div className="single-review-item">
                                <div className="icon">
                                    <FaQuoteLeft />
                                </div>
                                <p>I am really happy with the services and treatment provided by the dialysis department of Moga Medicity. I had never expected this kind of treatment for dialysis.</p>
                                <div className="review-info">
                                    <h3>- Siya</h3>
                                </div>
                            </div>

                            <div className="single-review-item ">
                                <div className="icon">
                                    <FaQuoteLeft />
                                </div>
                                <p>The Hospital provides quality healthcare services to its patients. Thank you to all the courteous staff members for excellent diagnosis and treatment.</p>
                                <div className="review-info">
                                    <h3>- Priya</h3>
                                </div>
                            </div>
                            <div className="single-review-item ">
                                <div className="icon">
                                    <FaQuoteLeft />
                                </div>
                                <p>I am very much satisfied with the facilities and friendly behaviour of doctors and staff of Moga Medicity. I would definitely recommend this hospital to others.</p>
                                <div className="review-info">
                                    <h3>- Amit</h3>
                                </div>
                            </div>

                            <div className="single-review-item ">
                                <div className="icon">
                                    <FaQuoteLeft />
                                </div>
                                <p>Moga Medicity is one of the best hospitals I have ever seen in my life. I have recommended this hospital to many of my friends and relatives. Thank you.</p>
                                <div className="review-info">
                                    <h3>- Jatin</h3>
                                </div>
                            </div>

                            <div className="single-review-item ">
                                <div className="icon">
                                    <FaQuoteLeft />
                                </div>
                                <p>The Hospital provides quality healthcare services to its patients. Thank you to all the courteous staff members for excellent diagnosis and treatment.</p>
                                <div className="review-info">
                                    <h3>- Priya</h3>
                                </div>
                            </div>

                            <div className="single-review-item ">
                                <div className="icon">
                                    <FaQuoteLeft />
                                </div>
                                <p>I am really happy with the services and treatment provided by the dialysis department of Moga Medicity. I had never expected this kind of treatment for dialysis.</p>
                                <div className="review-info">
                                    <h3>- Siya</h3>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PatientTestimonials;
