import React from 'react'
import PageBreadCrums from '../../components/pageBreadCrums/PageBreadCrums'
import OurDepartments from '../../components/ourDepartments/OurDepartments'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import ortho_1 from '../../assets/webp/images/ortho.avif'
import Image from 'next/image'
import "@/app/pageBody.css"


function Orthopaedics() {
    return (
        <>
            <PageBreadCrums headingBreadCrap={"Orthopaedics"} homeLink={"Home"} pageLink={"Orthopaedics"} />
            <section class="py-5 px-2">
                <div class="container p-4">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Orthopaedics & Joint Replacement</h3>
                                <p>
                                    {/* <img className='departmentImg' src={ortho_1} /> */}
                                <Image src={ortho_1} className='departmentImg' width={400} height={400}   alt='Orthopaedics' />
                                    The branch of medicine concerned with diseases, injuries and conditions of the musculoskeletal system or the body’s muscles and skeleton. This structure also includes the Joints, Tendons, Ligaments and Nerves.</p><br /><br />
                                <div class="about-content">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Complex Trauma Surgeries</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Joint Replacements (TKR, THR)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Sports Injuries</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Congenital Deformities</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Arthroscopic Jointh</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Tendon and Ligament</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Reconstruction Surgeries</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Deformity Correction Surgeries</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Pain Clinic (Neck/Back/ Shoulder/Knee/Hip Pain)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OurDepartments />
        </>
    )
}

export default Orthopaedics