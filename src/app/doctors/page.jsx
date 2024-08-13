import React from 'react';
import Image from 'next/image';
import "@/app/pageBody.css"
import PageBreadCrums from '../../components/pageBreadCrums/PageBreadCrums';
import d66 from "../../assets/webp/doctors/d66.avif";
import v99 from "../../assets/webp/doctors/v99.avif";
import d12 from "../../assets/webp/doctors/d12.avif";
import demo from "../../assets/webp/doctors/demo.avif";
import d445 from "../../assets/webp/doctors/d445.avif";
import d321 from "../../assets/webp/doctors/d321.avif";
import d40 from "../../assets/webp/doctors/d40.avif";
import d333 from "../../assets/webp/doctors/d333.avif";
import d444 from "../../assets/webp/doctors/d444.avif";
import d33 from "../../assets/webp/doctors/d33.avif";

function Doctors() {
  const doctorData = [
    {
      img: d66,
      name: "Dr. Gitanshu Dahuja",
      qualifications: "MBBS, MS(GEN. Surgery)<br/>M.CH, Neurosurgery <br/>Consultant Neurosurgeon"
    },
    {
      img: v99,
      name: "Dr. VISHVANOOR SINGH KALRA",
      qualifications: "MBBS, MD(MEDICINE)<br/>DM(GASTRO) Consultant <br/>Gastroentrologist & Hepatologist"
    },
    {
      img: d12,
      name: "Dr. GAGAN SHARMA",
      qualifications: "MBBS, MD(MEDICINE)<br/>DM CARDIOLOGY<br/>Consultant Cardiologist"
    },
    {
      img: demo,
      name: "Dr. SAROOP KAUR",
      qualifications: "MBBS, MD(ANAESTHESIA)<br/>Consultant Anaesthesia & Critical Care"
    },
    {
      img: d445,
      name: "Dr. SRISHTI CHOPRA",
      qualifications: "MBBS, DNB(INTERNAL MEDICINE)<br/>Consultant General Medicine"
    },
    {
      img: d321,
      name: "Dr. SALEEM JAVID",
      qualifications: "M.B.B.S, M.S<br/>General and Laparoscopic Surgeon"
    },
    {
      img: d40,
      name: "Dr. ANOOP HANDA",
      qualifications: "MBBS, MS(SURGERY)<br/>DNB, SS(UROLOGY)<br/>Consultant-Urologist"
    },
    {
      img: demo,
      name: "Dr. ABHINAV SACHDEVA",
      qualifications: "MS MCH.<br/>(PLASTIC & REC. SURGERY)<br/>Consultant Plastic & Reconstructive Surgeon"
    },
    {
      img: d333,
      name: "Dr. MILAN J.NAKUM",
      qualifications: "MBBS, MD, DCH<br/>NEONATOLOGIST & PAEDIATRICIAN"
    },
    {
      img: d444,
      name: "Dr. ANKIT RAI",
      qualifications: "MBBS, MS(ORTHOPAEDICS)<br/>(CONSULTANT:- ORTHOPAEDICS)"

    },
    {
      img: demo,
      name: "DR. TANIYA ANAND",
      qualifications: "MBBS, MS(OBS & GYNAE)<br/>(CONSULTANT:- GYNAECOLOGIST)"
    },
    {
      img: demo,
      name: "DR. NITASHA KALRA",
      qualifications: "MBBS, DNB(MEDICINE), FELLOWSHIP (NEPHROLOGY)<br/>CONSULTANT:- NEPHROLOGIST"
    },
    {
      img: demo,
      name: "DR. ZAHOOR AHMED",
      qualifications: "MBBS, DM( MEDICINE)<br/>CONSULTANT:- GENERAL MEDICINE"
    },
    {
      img: d33,
      name: "DR. AAQIB",
      qualifications: "RADIOLOGIST"
    }
  ];

  return (
    <>
      <PageBreadCrums headingBreadCrap={"Doctors"} homeLink={"Home"} pageLink={"Doctors"} />
      <section className="py-5">
        <div className="p-4">
          <div className="row">
            {doctorData.map((doctor, index) => (
              <div className="col-md-4 col-lg-3" key={index}>
                <div className="doc-bx">
                  {/* <img src={doctor.img} alt={doctor.name} /> */}
                  <Image src={doctor.img} alt={doctor.name} />
                  <h5>{doctor.name}</h5>
                  <h6 dangerouslySetInnerHTML={{ __html: doctor.qualifications }}></h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;
