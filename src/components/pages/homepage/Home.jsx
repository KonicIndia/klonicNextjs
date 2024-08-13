import React, {useEffect} from 'react'
import Herobanner from '../../herobanner/Herobanner'
import BannerCard from '../../bannerCard/BannerCard'
import ImageText from '../../imageText/ImageText'
import OurDepartments from '../../ourDepartments/OurDepartments'
import ServicesAndFacilities from '../../servicesAndFacilities/ServicesAndFacilities'
import AppointmentBanner from '../../appointmentBanner/AppointmentBanner'
import PatientTestimonials from '../../patientTestimonials/PatientTestimonials'
import ReactGA from 'react-ga4';

function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "Home"
      });
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Herobanner />
      <BannerCard />
      <ImageText />
      <OurDepartments />
      <ServicesAndFacilities />
      <AppointmentBanner />
      <PatientTestimonials />
    </>
  )
}

export default Home