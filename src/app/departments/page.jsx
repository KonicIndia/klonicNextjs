import React from 'react';
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
import "@/app/pageBody.css"


function Departments() {

    const departments = [
        { img: cardiology, title: 'Cardiology', link: '/cardiology' },
        { img: gastro, title: 'Gastroenterology', link: '/gastroenterology' },
        { img: neuro, title: 'Neurology', link: '#' },
        { img: ortho, title: 'Orthopedics', link: '#' },
        { img: ent, title: 'ENT', link: '#' },
        { img: pediatrics, title: 'Pediatrics', link: '#' },
        { img: radiology, title: 'Radiology', link: '#' },
        { img: surgery, title: 'General Surgery', link: '#' },
    ];

    return (
        <>
            <section className="gallery-area pb-70" style={{ paddingTop: '60px' }}>
                <div className="container">
                    <div className="row">
                        {departments.map((department, index) => (
                            <div key={index} className="col-sm-4">
                                <div className="single-gallery">
                                    <Image src={department.img} className='ourDepImg'  alt='image' />
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Departments;
