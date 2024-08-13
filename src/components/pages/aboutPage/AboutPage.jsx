import React from 'react'
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums'
import ImageText from '../../imageText/ImageText'
import BannerCard from '../../bannerCard/BannerCard'
import ServicesAndFacilities from '../../servicesAndFacilities/ServicesAndFacilities'

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