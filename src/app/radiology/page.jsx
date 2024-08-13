import React from 'react'
import OurDepartments from '../../components/ourDepartments/OurDepartments'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import PageBreadCrums from '../../components/pageBreadCrums/PageBreadCrums'
import radiology_1 from '../../assets/webp/images/radiology.avif'
import "@/app/pageBody.css"
import Image from 'next/image'




function Radiology() {
  return (
    <>
        <PageBreadCrums headingBreadCrap={"Radiology"} homeLink={"Home"} pageLink={"Radiology"} />
        <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">

                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Department of Radiology</h3>
                                <p>
                                {/* <img src={ radiology_1 } /> */}
                                <Image src={radiology_1} className='departmentImg'   alt='Radiology' />
                                Radiology is the medical discipline that usesmedical imaging to diagnose diseases and guide their treatment, within the bodies ofhumans. It’s not about justone test. It’s about judging someone’s disease for his or her life.
                                 <br/> <br/>
                                 USG (Ultrasonography) – Abdominal, Obstetrics, Small parts USG, TVS, All Doppler Studies, Diabetic, Cardiac & Vascular Ultrasound, Dedicated Abdominal Ultrasound, Dedicated ICU Ultrasound for Bed Side Evaluation, and Trans Cranial Doppler for Dynamic Blood Flow Evaluation.
                                </p><br /><br />
                                <div class="about-content mb-5">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />CT (Computed Tomography) – 16 Slice CT Scan for Head, Body CT, CT Angiography, High Resolution CT.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />MRI (Magnetic Resonance Imaging) – 1.5 Tesla MRI GE Explorer for Brain, Spine, Body & Joints.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />X-ray – All routine Low Radiation X-ray, IVU, Barium studies, HSG, and MCU/RGU.</li>
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

export default Radiology