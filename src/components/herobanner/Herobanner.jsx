'use client'
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from "next/link";


export default function HeroBanner() {
    const slidesData = [
        {
            id: 1,
            heading1: 'MOGA MEDICITY',
            heading2: 'HOSPITAL',
            description: 'Since our inception in 2005, we have been setting exemplary healthcare standards as the best hospital in Punjab.',
            buttonText: 'Book Appointment',
            slideClass: 'slide1'
        },
        {
            id: 2,
            heading1: 'WE CARE ABOUT',
            heading2: 'YOUR HEALTH',
            description: 'Do allow us to guide you on the best treatment option for you.',
            buttonText: 'Book Appointment',
            slideClass: 'slide2'
        },
        // Add more slides here if needed
    ];



    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <FaChevronLeft />,
        nextArrow: <FaChevronRight />,
    };
  return (
        <section id="hero-slider" className='mb-4'>
            <Slider {...settings} className="hero-slider__wrapper">
                {slidesData.map(slide => (
                    <div key={slide.id} className={`hero-slider__slide ${slide.slideClass}`}>
                        <div className="hero-slider__content">
                            <h1 className='heading1 mb-3 animate-up'>{slide.heading1}</h1>
                            <h2 className='heading2 mb-3 animate-up'>{slide.heading2}</h2>
                            <p className='animate-up'>
                                <span className="left-wing"></span>
                                {slide.description}
                                <span className="right-wing"></span>
                            </p>
                            <Link href="#" className="my-4 default-btn animate-up">
                                {slide.buttonText}
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
  );
}