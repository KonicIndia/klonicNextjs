import React from 'react'
import Image from 'next/image'

import Emergency24_7  from '@/assets/webp/images/24X7.avif'
import Ambulance  from '@/assets/webp/images/ambulance.avif'
import Healthcare2  from '@/assets/webp/images/healthcare2.avif'

const data = [
  {
    id: 1,
    image: Emergency24_7,
    title: "EMERGENCY 24X7",
    description: "We are there at your service 24 hours a day and 7 days a week to attend to your emergencies in the most time pressed manner.",
    bgClass: ""
  },
  {
    id: 2,
    image: Ambulance,
    title: "AMBULANCE SERVICE",
    description: "We are one of the well-known Multi-Super Specialty Hospitals in Punjab to provide prompt ambulance services as and when required.",
    bgClass: "bg-f57e57"
  },
  {
    id: 3,
    image: Healthcare2,
    title: "HEALTH AWARENESS",
    description: "We promote health awareness through medical camps, lifestyle programs, scientific talks, and ongoing education by our specialists.",
    bgClass: "bg-4a6577"
  }
];

function BannerCard() {
  return (
    <section className='features-area'>
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className={`single-features ${item.bgClass}`}>
                <div className="content">
                  <div className="icon">
                    {/* <img src={item.image} alt="" className="img-fluid" /> */}
                    <Image
                      src={item.image}
                      width={60}
                      height={60}
                      className="img-fluid"
                      alt="Picture of the author"
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BannerCard
