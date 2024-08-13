import React from 'react'
import neurosurgery_1 from '../../../assets/webp/images/neurosurgery.avif'
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums';
import OurDepartments from '../../ourDepartments/OurDepartments';

function Neurology() {
    return (
        <>
            <PageBreadCrums headingBreadCrap={"Neurology"} homeLink={"Home"} pageLink={"Neurology"} />
            <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">

                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Neuro Surgery</h3>
                                <p><img className='departmentImg' src={neurosurgery_1} />
                                    The surgery of Nervous System is the medical specialty concerned with the diagnosis and treatment of patients with injury to, or diseases/disorders of the Brain, Spinal cord and Spinal column, and peripheral nerves within all parts of the body.</p><br /><br />
                                <div class="about-content">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Brain Tumor</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Spine Tumor</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />2Epilepsy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Headache</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Dementia</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Movement Disorder</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Seizures</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Alzheimer’s disease</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Parkinson’s Disorder</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Cerebral Palsy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Brain Hemorrhage</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />(Aneurysm AVM)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Hemorrhagic Stroke</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Ischemic Stroke</li>
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

export default Neurology