import React from 'react'
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums'
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import Cardiology_1 from '../../../assets/webp/images/cardiology.avif'
import OurDepartments from '../../ourDepartments/OurDepartments';


function Cardiology() {
    return (
        <>
            <PageBreadCrums headingBreadCrap={"Cardiology"} homeLink={"Home"} pageLink={"Cardiology"} />
            <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">

                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Cardiology</h3>
                                <p><img className='departmentImg' src={ Cardiology_1 } />
                                    Branch of Medicine that deals with disorders of the heart and the cardiovascular system. The field
                                    includes medical
                                    diagnosis and treatment of Congenital heart defects, Coronary heart disease, Heart failure, Valvular heart
                                    disease and
                                    electrophysiology. </p><br /><br />
                                <div class="about-content">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Electrocardiogram (ECG)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Coronary Angiography (CAG)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />2D Echocardiography</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Peripheral Angiography</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Trans-esophageal</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Coronary Angioplasty (PTCA)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Echocardiography</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Peripheral Angioplasty</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Tread Mill Test (TMT)</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Temporary & Pacemaker</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Stress Echocardiography</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />24 hours Holter monitoring</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Implantation (TPI/PPI), AICD, CRT ENG</li>
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

export default Cardiology