import React from 'react'
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums'
import OurDepartments from '../../ourDepartments/OurDepartments'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import internalMedicine_1 from '../../../assets/webp/images/internal-medicine.avif'


function LaparoscopicSurgery() {
  return (
    <>
            <PageBreadCrums headingBreadCrap={"General & Laparoscopic Surgery"} homeLink={"Home"} pageLink={"General & Laparoscopic Surgery"} />
            <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Department of General & Laparoscopic Surgery</h3>
                                <p><img className='departmentImg' src={internalMedicine_1} />
                                This is the surgical specialty that focuses on the subject of entire surgical process, from the initial evaluation through preparation, procedure, and post-operative management. Also perform on alimentary canal and abdominal organs and operates on common abdominal complaints with Open and Laparoscopic technique.</p><br /><br />
                                <div class="about-content">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Laparoscopic Cholecystectomy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Laparoscopic Appendectomy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Laparoscopic Hernia Repair</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Piles/Haemorrhoidectomy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Anal Fissure/Anal Fistula</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Amputations</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Splenectomy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Gut Perforation Repair</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Colostomy/Ileostomy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Excision of Breast Lump</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Varicose Vein Surgery</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Trauma Surgery</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Surgery of Hydrocoele & Varicocoele</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Tumor (Lipoma/Lump)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Circumcision</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Abscess</li>
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

export default LaparoscopicSurgery