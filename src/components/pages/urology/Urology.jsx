import React from 'react'
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums'
import OurDepartments from '../../ourDepartments/OurDepartments'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import urology_1 from '../../../assets/webp/images/urolog.avif'

function Urology() {
  return (
    <>
            <PageBreadCrums headingBreadCrap={"Urology"} homeLink={"Home"} pageLink={"Urology"} />
            <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Department of Urology</h3>
                                <p><img className='departmentImg' src={urology_1} />
                                Department of Urology is associated with the diseases and disorders of the male & female Urinary tract.<br/><br/>
                                Urologists are the doctors who specialize in the treatment of diseases and conditions affecting the Urinary system including the Bladder, Kidney, Ureter, Urethra and Adrenal glands.
                                </p><br /><br />
                                <div class="about-content">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Urinary Tract Problems</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />TURP, TURBT</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Direct Vision Internal Urethrotomy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Optical Internal Urethrotomy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Urinary tract stone endoscopic surgeries</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Kidney Cancer</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Urethral Stricture Surgeries</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Pediatric Urology</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Female Urology</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Andrology & Infertility</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />(Microscopic Varicocelectomy & Vasovasostomy)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Laparoscopic & Open Surgeries</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />CAPD insertion for CKD patients.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Laparoscopic Nephrectomy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Pyeloplasty</li>
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

export default Urology