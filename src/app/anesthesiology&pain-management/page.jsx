import React from 'react'
import PageBreadCrums from '../../components/pageBreadCrums/PageBreadCrums'
import OurDepartments from '../../components/ourDepartments/OurDepartments'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import pain_management_1 from '../../assets/webp/images/pain_management.avif'
import "@/app/pageBody.css"
import Image from 'next/image'



function PainManagement() {
  return (
    <>
        <PageBreadCrums headingBreadCrap={"Anesthesiology & Pain Management"} homeLink={"Home"} pageLink={"Anesthesiology & Pain Management"} />
        <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">

                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Department of Anesthesiology & Pain Management</h3>
                                <p>
                                {/* <img src={ pain_management_1 } /> */}
                                <Image src={pain_management_1} className='departmentImg'   alt='Anesthesiology & Pain Management' />
                                It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicineThe division of Pain Management in the department of Anesthesiology offers a full spectrum of treatment options for preventing and treating both acute pain and chronic pain.</p><br /><br />
                                <div class="about-content">
                                    <h4>Facilities:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Ambulatory BP Monitoring</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Continuous Glucose Monitoring</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />FNAC’s - Specially Thyroid Gland and other Swellings</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Well Equipped Lab and Dedicated Pathology</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Microbiology</li>
                                    </ul>
                                </div>
                                    <div class="about-content">
                                        <h4>Treatments Available:</h4>
                                        <ul class="row about-list">
                                            <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Diabetes</li>
                                            <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Low Back Pain & Sciatica</li>
                                            <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Neuropathic Pain</li>
                                            <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Neck & Arm Pain</li>
                                            <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Joint Pain</li>
                                            <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Cancer Pain</li>
                                            <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Widespread Body Pain & Fibromyalgia</li>
                                            <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Headache</li>
                                            <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Chronic Pain</li>
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

export default PainManagement