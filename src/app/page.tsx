import Homes from '@/app/homepage/Homes'
import ImageText from "@/components/imageText/ImageText"
import OurDepartment from "@/components/ourDepartments/OurDepartments"
import ServicesAndFacilities from "@/components/servicesAndFacilities/ServicesAndFacilities"
import AppointmentBanner from "@/components//appointmentBanner/AppointmentBanner"
import PatientTestimonials from "@/components/patientTestimonials/PatientTestimonials"
export default function Home() {
  return (
    <main >
      <Homes />
      <ImageText />
      <OurDepartment />
      <ServicesAndFacilities />
      <AppointmentBanner />
      <PatientTestimonials />
    </main>
  );
}
