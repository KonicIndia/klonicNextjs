import React from 'react'
import PageBreadCrums from '../../components/pageBreadCrums/PageBreadCrums'
import OurDepartments from '../../components/ourDepartments/OurDepartments'
import urology_1 from '../../assets/webp/images/urolog.avif'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import "@/app/pageBody.css"
import Image from 'next/image'

function NephrologyDialysis() {
  return (
    <>
            <PageBreadCrums headingBreadCrap={"Nephrology Dialysis"} homeLink={"Home"} pageLink={"Nephrology Dialysis"} />
            <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Department of Nephrology & Dialysis</h3>
                                <p>
                                {/* <img className='departmentImg' src={urology_1} /> */}
                                <Image src={urology_1} className='departmentImg'   alt='Reconstruction' />
                                Moga Medicity Super Specialty Hospital provides comprehensive treatment for Kidney issues, Hypertension induced kidney disease, and Hemodialysis.<br /><br />
                                Moga Medicity Super Specialty Hospital also provides super specialized dialysis services.
                                </p><br /><br />
                                <div class="about-content">
                                    <h4>Nephrology:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Acute and chronic kidney failure</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Critical care nephrology</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Diabetic nephropathy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Glomerular disease (glomerulonephritis)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Hyperoxaluria</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Kidney stones</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Paediatric kidney disorders</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Polycystic kidney disease</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Renal parenchymal disease</li>
                                    </ul>
                                </div>
                                <div class="about-content">
                                    <h4>Dialysis:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />In-center hemodialysis</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />24-hour emergency dialysis services</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Pre-emptive kidney transplantation evaluation</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Glomerular disease (glomerulonephritis)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Educational programs for dialysis patients and their families</li>

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

export default NephrologyDialysis