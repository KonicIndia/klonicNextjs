import React from 'react'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import OurDepartments from '../../components/ourDepartments/OurDepartments'
import PageBreadCrums from '../../components/pageBreadCrums/PageBreadCrums'
import urology_1 from '../../assets/webp/images/urolog.avif'
import "@/app/pageBody.css"
import Image from 'next/image'


function Reconstruction() {
  return (
    <>
            <PageBreadCrums headingBreadCrap={"Reconstruction"} homeLink={"Home"} pageLink={"Reconstruction"} />
            <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Department of Reconstruction</h3>
                                <p>
                                {/* <img className='departmentImg' src={urology_1} /> */}
                                <Image src={urology_1} className='departmentImg'   alt='Reconstruction' />
                                Reconstructive surgery repairs parts of your body affected by defects you were born with, defects that have developed because of disease, or defects caused by an injury.</p><br /><br />
                                <div class="about-content">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Craniofacial Surgery</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Hand Surgery</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Microsurgery</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Reconstructive Treatment of Burns</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Blepharoplasty</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Phalloplasty</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Mammoplasty</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Buttock Augmentation</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Abdominoplasty</li>
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

export default Reconstruction