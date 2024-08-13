import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import cardiology from "../../../assets/webp/images/cardiology.avif";
import gastro from "../../../assets/webp/images/gastro.avif";
import neuro from "../../../assets/webp/images/neuro.avif";
import ortho from "../../../assets/webp/images/ortho.avif";
import ent from "../../../assets/webp/images/ent.avif";
import pediatrics from "../../../assets/webp/images/pediatrics.avif";
import radiology from "../../../assets/webp/images/radiology.avif";
import surgery from "../../../assets/webp/images/surgery.avif";

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
                                    <img className='ourDepImg' src={department.img} alt="image"/>
                                    <div className="content">
                                        <h3>
                                            <Link to={department.link}>{department.title}</Link>
                                        </h3>
                                        <div className="icon">
                                            <Link to={department.link}><IoIosArrowDroprightCircle /></Link>
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
