import React from 'react'
import PageBreadCrums from '../../components/pageBreadCrums/PageBreadCrums'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import OurDepartments from '../../components/ourDepartments/OurDepartments'
import Gynacology_1 from '../../assets/webp/images/gynacology.avif'
import "@/app/pageBody.css"
import Image from 'next/image'

function Gynaecology() {
  return (
    <>
            <PageBreadCrums headingBreadCrap={"Gynaecology"} homeLink={"Home"} pageLink={"Gynaecology"} />
            <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Department of Gynaecology</h3>
                                <p>
                                {/* <img className='departmentImg' src={Gynacology_1} /> */}
                                <Image src={Gynacology_1} className='departmentImg'   alt='Gynaecology' />
                                A branch of medicine that specializes in the care of women during pregnancy and child birth and in the diagnosis and treatment of diseases of the female reproductive organs.<br/><br/>
                                Every step to your baby into this world is watched over by our Expert.
                                </p><br /><br />
                                <div class="about-content">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Antenatal and Postnatal Care</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />High Risk Pregnancies</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />ICU & NICU</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Male & Female Infertility Workup</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Menopausal Clinic</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Family Planning</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Cancer Screening</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Ultrasonology</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />PCOS Clinic</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Adolescent Clinic</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Antenatal Clinic</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Laparoscopic & Hysteroscopic Surgeries.</li>
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

export default Gynaecology