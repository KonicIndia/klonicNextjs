'use client'
import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import cardiology from "../../assets/webp/images/cardiology.avif";
import gastro from "../../assets/webp/images/gastro.avif";
import neuro from "../../assets/webp/images/neuro.avif";
import ortho from "../../assets/webp/images/ortho.avif";
import ent from "../../assets/webp/images/ent.avif";
import pediatrics from "../../assets/webp/images/pediatrics.avif";
import radiology from "../../assets/webp/images/radiology.avif";
import surgery from "../../assets/webp/images/surgery.avif";
import Link from 'next/link';
import Image from 'next/image';

function OurDepartments() {
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
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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

    const departments = [
        { img: cardiology, title: 'Cardiology', link: '/cardiology' },
        { img: gastro, title: 'Gastroenterology', link: '/gastroenterology' },
        { img: neuro, title: 'Neurology', link: '/neurology' },
        { img: ortho, title: 'Orthopedics', link: '/orthopedics' },
        { img: ent, title: 'ENT', link: '/ent' },
        { img: pediatrics, title: 'Pediatrics', link: '/pediatrics' },
        { img: radiology, title: 'Radiology', link: '/radiology' },
        { img: surgery, title: 'General Surgery', link: '/laparoscopic-surgery' },
    ];

    return (
        <section className="gallery-area py-5">
            <div className="container p-0">
                <div className="section-title">
                    <h2>Our Departments</h2>
                </div>
                <div className=" justify-content-center">
                    <Slider {...settings} >
                        {departments.map((department, index) => (
                            <div key={index} className="col-md-3">
                                <div className="single-gallery">
                                {/* <img className='ourDepImg' src={department.img} alt={department.title} /> */}
                                <Image src={department.img} className='ourDepImg'  alt={department.title} />

                                <div className="content">
                                        <h3>
                                            <Link href={department.link}>{department.title}</Link>
                                        </h3>
                                        <div className="icon">
                                            <Link href={department.link}><IoIosArrowDroprightCircle /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="col-sm-12 text-center mt-5">
                    <Link href="/departments" className="default-btn">VIEW ALL DEPARTMENTS</Link>
                </div>
            </div>
        </section>
    );
}

export default OurDepartments;
