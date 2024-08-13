import React from 'react'
import OurDepartments from '../../ourDepartments/OurDepartments'
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import laboratory_1 from '../../../assets/webp/images/laboratory.avif'

function Laboratory() {
  return (
    <>
        <PageBreadCrums headingBreadCrap={"Laboratory"} homeLink={"Home"} pageLink={"Laboratory"} />
        <section class="py-5 px-2">
                <div class=" p-4">
                    <div class="row">

                        <div class="col-sm-12">
                            <div class="department-detail ">
                                <h3>Department of Laboratory</h3>
                                <p><img src={ laboratory_1 } />
                                Our in-house laboratory boasts state-of-the-art technology and is staffed by a team of highly skilled professionals, ensuring precision and promptness in all diagnostic results. Recognizing the pivotal role that accurate diagnostics play in effective treatment, our laboratory services are meticulously designed to support comprehensive medical evaluations and ongoing health management. <br/> <br/>
                                With a steadfast commitment to continuous improvement and adherence to international quality standards, our laboratory exemplifies excellence in every diagnostic test we perform. Whether for routine screenings or specialized testing, our team delivers the reliable data your healthcare provider needs to make informed medical decisions.
                                </p><br /><br />
                                <div class="about-content mb-5">
                                    <h4>Services Offered:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp /><strong>Routine Blood Tests: </strong> Including CBC, blood glucose, lipid profile, and more.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp /><strong>Specialized Tests: </strong> Hormone levels, tumor markers, allergy tests, and other advanced diagnostics.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp /><strong>Microbiology: </strong> Culture and sensitivity tests to identify infections and guide antibiotic therapy.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp /><strong>Pathology: </strong> Biopsy analysis, cytology, and histopathology services for accurate diagnosis of diseases.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp /><strong>Immunology: </strong> Tests for autoimmune diseases, immunodeficiencies, and more.</li>
                                    </ul>
                                </div>
                                <div class="about-content mb-5">
                                    <h4>Commitment to Quality:</h4>
                                    <ul class="row about-list">
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp /><strong>Accuracy: </strong> Utilizing the latest equipment and methodologies to ensure reliable results.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp /><strong>Timeliness: </strong> Quick turnaround times for urgent tests to facilitate prompt treatment decisions.</li>
                                        <li class="col-sm-6"><IoCheckmarkDoneCircleSharp /><strong>Confidentiality: </strong> Strict adherence to patient privacy and confidentiality standards.</li>
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

export default Laboratory