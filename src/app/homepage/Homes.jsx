import React from 'react'
import Herobanner from '@/components/herobanner/Herobanner'
import BannerCard from '@/components/bannerCard/BannerCard'
// import ImageText from '../../imageText/ImageText'
// import OurDepartments from '../../ourDepartments/OurDepartments'
// import ServicesAndFacilities from '../../servicesAndFacilities/ServicesAndFacilities'
// import AppointmentBanner from '../../appointmentBanner/AppointmentBanner'
// import PatientTestimonials from '../../patientTestimonials/PatientTestimonials'

function Homes() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     ReactGA.send({
  //       hitType: "pageview",
  //       page: "/",
  //       title: "Home"
  //     });
  //   }, 4000); // 4 seconds delay

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      <Herobanner />
      <BannerCard />
      {/* <ImageText /> */}
      {/* <OurDepartments /> */}
      {/* <ServicesAndFacilities /> */}
      {/* <AppointmentBanner /> */}
      {/* <PatientTestimonials /> */}
    </>
  )
}

export default Homes