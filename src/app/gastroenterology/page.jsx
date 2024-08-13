import React from 'react'
import Gastroenterology_1 from '../../assets/webp/images/gastro.avif'
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import PageBreadCrums from '../../components/pageBreadCrums/PageBreadCrums';
import OurDepartments from '../../components/ourDepartments/OurDepartments';
import Image from 'next/image';
import "@/app/pageBody.css"


function Gastroenterology() {
  return (
    <>
        <PageBreadCrums headingBreadCrap={"Gastroenterology"} homeLink={"Home"} pageLink={"Gastroenterology"} />
        <section class="py-5 px-2">
                <div class="container p-4">
                    <div class="row">

                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Gastroenterology</h3>
                                <p>
                                    {/* <img src={ Gastroenterology_1 } /> */}
                                    <Image src={Gastroenterology_1} className='departmentImg'   alt='Gastroenterology' />

                                Department of Gastrointestinal sciences aims at various Gl, Pancreatic and Liver disease including obesity and early detection & management of Gl Cancers.</p><br /><br />
                                <div class="about-content">
                                    <h4>Treatments Available:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Hepatitis Treatment</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Biliary Duct & Pancreatic Disease</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Inflammatory Bowel Diseases</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Cirrhosis & Complications</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Acidity</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Constipation</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Gastric Ulcer Treatment</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />CBD & Gall Bladder Related Diseases</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />GI Bleed</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />ERCP Treatment</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Colonoscopy</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp />Sigmoidoscopy</li>
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

export default Gastroenterology