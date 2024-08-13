import React from 'react'
import Image from 'next/image';
import "@/app/pageBody.css"
import  adityaBirla from '../../assets/webp/empanelments/adityaBirla.avif'
import  apollo from '../../assets/webp/empanelments/apollo.avif'
import  cholaMSInsurance from '../../assets/webp/empanelments/cholaMSInsurance.avif'
import  echs from '../../assets/webp/empanelments/echs.avif'
import  hdfc from '../../assets/webp/empanelments/hdfc.avif'
import  healthInsuranceTpa from '../../assets/webp/empanelments/healthInsuranceTpa.avif'
import  healthAssure from '../../assets/webp/empanelments/healthAssure.avif'
import  icici from '../../assets/webp/empanelments/icici.avif'
import  maxBupa from '../../assets/webp/empanelments/maxBupa.avif'
import  md from '../../assets/webp/empanelments/md.avif'
import  mediAssist from '../../assets/webp/empanelments/mediAssist.avif'
import  parkMaclaim from '../../assets/webp/empanelments/parkMaclaim.avif'
import  shalogonew from '../../assets/webp/empanelments/shalogonew.avif'
import  starHealthnsurance from '../../assets/webp/empanelments/starHealthnsurance.avif'
import  tpa from '../../assets/webp/empanelments/tpa.avif'
import  unitedIndia from '../../assets/webp/empanelments/unitedIndia.avif'

function Empanelments() {
    return (
        <>
            <section class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            {/* <img src={hdfc} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={hdfc} alt={'hdfc'}  class="emp-emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={adityaBirla} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={adityaBirla} alt={'adityaBirla'}  class="emp-img-fluid"  width="65%"/>


                        </div>
                        <div class="col-md-3">
                            {/* <img src={cholaMSInsurance} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={cholaMSInsurance} alt={'cholaMSInsurance'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={healthInsuranceTpa} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={healthInsuranceTpa} alt={'healthInsuranceTpa'}  class="emp-img-fluid"  width="65%"/>
                            
                        </div>
                        <div class="col-md-3">
                            {/* <img src={healthAssure} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={healthAssure} alt={'healthAssure'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={icici} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={icici} alt={'icici'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={maxBupa} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={maxBupa} alt={'maxBupa'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={mediAssist} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={mediAssist} alt={'mediAssist'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={parkMaclaim} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={parkMaclaim} alt={'parkMaclaim'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={shalogonew} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={shalogonew} alt={'shalogonew'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={tpa} alt="" class="emp-img-fluid" width="65%"/>  */}
                            <Image src={tpa} alt={'tpa'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={unitedIndia} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={unitedIndia} alt={'unitedIndia'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={starHealthnsurance} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={starHealthnsurance} alt={'starHealthnsurance'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={echs} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={echs} alt={'echs'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={apollo} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={apollo} alt={'apollo'}  class="emp-img-fluid"  width="65%"/>

                        </div>
                        <div class="col-md-3">
                            {/* <img src={md} alt="" class="emp-img-fluid" width="65%"/> */}
                            <Image src={md} alt={'md'}  class="emp-img-fluid" />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Empanelments