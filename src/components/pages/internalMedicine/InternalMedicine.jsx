import React from 'react'
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums'
import OurDepartments from '../../ourDepartments/OurDepartments'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import internalMedicine_1 from '../../../assets/webp/images/internal-medicine.avif'

function InternalMedicine() {
  return (
    <>
            <PageBreadCrums headingBreadCrap={"Internal Medicine"} homeLink={"Home"} pageLink={"Internal Medicine"} />
            <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Department of Internal Medicine</h3>
                                <p><img className='departmentImg' src={internalMedicine_1} />
                                The medical specialty in which physicians apply scientific knowledge and clinical expertise to diagnose and treat adults with a very broad range of health concerns and diseases. In other word, this is the branch of medicine that deals with the prevention, diagnosis, and treatment of undifferentiated and multi-system diseases and their processes.
                                </p><br /><br />
                                <div class="about-content">
                                    <h4>Nephrology:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Diabetes</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Hypertension</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Fever (Pyrexia)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Joint Pain</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Generalized Weakness</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Skin Diseases</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Sleep Disorders</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Liver Disease</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Generalized Swelling</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Mood Disorders</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Stomach Ache/ Abdominal Ache</li>
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

export default InternalMedicine