import React from 'react'
import PageBreadCrums from '../../components/pageBreadCrums/PageBreadCrums'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import OurDepartments from '../../components/ourDepartments/OurDepartments'
import Pediatrics_1 from '../../assets/webp/images/pediatrics.avif'
import "@/app/pageBody.css"
import Image from 'next/image'


function PathologyLaboratory() {
  return (
    <>
        <PageBreadCrums headingBreadCrap={"Anesthesiology & Pain Management"} homeLink={"Home"} pageLink={"Anesthesiology & Pain Management"} />
        <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">

                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Pathology and Laboratory Medicine</h3>
                                <p>
                                {/* <img src={ Pediatrics_1 } /> */}
                                <Image src={Pediatrics_1} className='departmentImg'   alt='Anesthesiology & Pain Management' />
                                Laboratory Medicine and Pathology supports physicians at Moga Medicity Super & Multispecialty Hospital byperforming testing services for diagnostics and therapeutic evaluations. The laboratory team consists of highly experienced Physicians, Medical Technologists, Technicians, Pathologist, Phlebotomist, Lab Assistant, Analytical Chemist,and Microbiologist working collaboratively.</p><br /><br />
                                <div class="about-content">
                                    <h4>Facilities Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />State of the ART Equipment with facilities matching Global Standards.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Fully Automated Pathology, Biochemistry, and Microbiology Lab.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />FNAC’s - Specially Thyroid Gland and other Swellings</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Well Equipped Lab and Dedicated Pathology</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Microbiology</li>
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

export default PathologyLaboratory