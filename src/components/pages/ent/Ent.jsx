import React from 'react'
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import OurDepartments from '../../ourDepartments/OurDepartments'
import ent_1 from '../../../assets/webp/images/ent.avif'

function Ent() {
  return (
    <>
        <PageBreadCrums headingBreadCrap={"Ent"} homeLink={"Home"} pageLink={"Ent"} />
        <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">

                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>ENT(Ear, Nose, Throat)</h3>
                                <p><img src={ ent_1 } />
                                Otorhinolaryngology is a medical specialty that treats conditions of the Ears, Nose, and Throat. Specialists in this field have special training in surgery as well as medicine. Because, Otorhinolaryngology involves the Ears, Nose, and Throat, these specialists are known as ENT Doctors.</p><br /><br />
                                <div class="about-content">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Latest Coblation assisted Adenotonsillectomy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Functional Endoscopic Sinus Surgery</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Endoscopic Septoplasty</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Rhinoplasty</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Ear surgeries and hearing aids</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Allergy testing and Immunotherapy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Ear Infections</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Vertigo</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Voice & Swallowing problems</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Tonsillectomy, Adenoidectomy, Maxillectomy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Thyroidectomy, Mastoidectomies</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Tympanoplasty</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Endoscopic FESS</li>
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

export default Ent