import React from 'react'
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import OurDepartments from '../../ourDepartments/OurDepartments'
import Pediatrics_1 from '../../../assets/webp/images/pediatrics.avif'

function Paediatrics() {
  return (
    <>
            <PageBreadCrums headingBreadCrap={"Paediatrics"} homeLink={"Home"} pageLink={"Paediatrics"} />
            <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Department of Paediatrics</h3>
                                <p><img className='departmentImg' src={Pediatrics_1} />
                                The branch of medicine dealing with the health, development, disease and medical care of infants, children and adolescents from birth up to the age of 18.
                                </p><br /><br />
                                <div class="about-content">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Mechanical Ventilation</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />CPAP</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Surfactant Administration</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Partial Parenteral Nutrition</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Phototherapy/Exchange Transfusion</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />All basic Paediatric & Neonatal procedures</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Intercostal Drainage</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Ascitic</li>
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

export default Paediatrics