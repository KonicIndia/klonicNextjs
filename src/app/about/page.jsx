import React from 'react'
import PageBreadCrums from "../../components/pageBreadCrums/PageBreadCrums"
import ImageText from '../../components/imageText/ImageText'
import BannerCard from '../../components/bannerCard/BannerCard'
import ServicesAndFacilities from '../../components/servicesAndFacilities/ServicesAndFacilities'


function AboutPage() {
  return (
    <>
        <PageBreadCrums headingBreadCrap={"About Us"} homeLink={"Home"} pageLink={"About Us"} />
        <ImageText />
        <div style={{ marginTop: '0px !important' }}>
          <BannerCard />
        </div>
        <ServicesAndFacilities />
    </>
  )
}

export default AboutPage