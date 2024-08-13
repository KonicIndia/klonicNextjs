import React from 'react';
import { GiCaduceus } from "react-icons/gi";
import { FaHashtag } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "World Class Accommodation",
    description: "Moga Medicity Hospital provides world class facilities to our international patients. We have Deluxe Impatient Rooms with a luxurious ambience, satellite TV, Room Service, Laundry services etc.",
  },
  {
    id: 2,
    title: "Direct Admission Arrangement",
    description: "We can enable direct admission for our International Patients. Your admission will be done in your room itself. You need not stand in queue or wait for the completion of admission procedure.",
  },
  {
    id: 3,
    title: "Scheduling of appointments",
    description: "You need to only confirm your arrival by giving us your arrival details well in advance. We will fix appointments for you accordingly before your arrival so that you need not wait for same.",
  },
  {
    id: 4,
    title: "Food & Beverage",
    description: "We offer choices of cuisine to suit your taste. And what’s more, we will also prepare your favourite dishes on your request.",
  },
  {
    id: 5,
    title: "Multiple Payment Options",
    description: "The hospital accepts payments through Traveler’s Cheque, Credit Cards (Master Visa or Amex), Wire Transfer and Foreign Currencies from International patients.",
  },
  {
    id: 6,
    title: "Private Rooms & Economy Beds",
    description: "We provide single A/C rooms, storage & Locker Facilities in the room, Cable TV, Sofa cum bed for one companion.",
  },
];

function ServicesAndFacilities() {
    return (
        <section className="services-area bg-eef9ff py-5">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <FaHashtag /> Moga Medicity Hospital
                    </span>
                    <h2>SERVICES AND FACILITIES</h2>
                    <p>We give you here a few details so that your experience at our hospitals is comfortable and pleasant.</p>
                </div>
                <div className="row">
                    {servicesData.map(service => (
                        <div className="col-lg-4 col-md-6" key={service.id}>
                            <div className="single-services-box">
                                <div className="icon">
                                    <GiCaduceus />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesAndFacilities;
