'use client'
import React, { useState, useEffect, useRef } from 'react';
import sitelogo1 from '../../assets/webp/images/logo-1.avif';
import sitelogo2 from '../../assets/webp/images/NBAH.avif';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    specialities: false,
    diagnostic: false,
    media: false
  });
  
  // References for the dropdowns
  const specialitiesRef = useRef(null);
  const diagnosticRef = useRef(null);
  const mediaRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [dropdown]: !prevState[dropdown]
    }));
  };

  // Function to handle clicks outside of the dropdowns
  const handleClickOutside = (event) => {
    if (
      specialitiesRef.current && !specialitiesRef.current.contains(event.target) &&
      diagnosticRef.current && !diagnosticRef.current.contains(event.target) &&
      mediaRef.current && !mediaRef.current.contains(event.target)
    ) {
      setDropdownOpen({
        specialities: false,
        diagnostic: false,
        media: false
      });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="row w-100">
          {/* <div className="row"> */}
            <div className="col-9">
              <a className="navbar-brand d-lg-none mx-auto" href="#">
                <div className="logo-container d-flex">
                  {/* <img src={sitelogo1} alt="Site Logo 1" height="50" /> */}
                  {/* <img src={sitelogo2} alt="Site Logo 2" height="50" /> */}
                  <Image src={sitelogo1} height="50" className="img-fluid mx-1" alt="Site Logo 1" />
                  <Image src={sitelogo2} height="50" className="img-fluid mx-1" alt="Site Logo 2" />

                </div>
              </a>
            </div>

            <div className="col-3 text-end align-items-center">
              <button
                className={`navbar-toggler ${isOpen ? 'open' : ''}`}
                type="button"
                onClick={toggleNavbar}
                aria-controls="navbarNav"
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="col-12 p-0">
              <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav w-100 justify-content-evenly">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">About Us</Link>
                  </li>
                  <li className="nav-item dropdown" ref={specialitiesRef}>
                    <Link
                      className="nav-link dropdown-toggle"
                      href="/departments"
                      id="specialitiesDropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen.specialities ? 'true' : 'false'}
                      onClick={() => toggleDropdown('specialities')}
                    >
                      Specialities
                    </Link>
                    <ul className={`dropdown-menu ${dropdownOpen.specialities ? 'show' : ''}`} aria-labelledby="specialitiesDropdown">
                      <li><Link className="dropdown-item" href="/cardiology">Cardiology</Link></li>
                      <li><Link className="dropdown-item" href="/gastroenterology">Gastroenterology</Link></li>
                      <li><Link className="dropdown-item" href="/neurology">Neurology</Link></li>
                      <li><Link className="dropdown-item" href="/orthopedics">Orthopedics</Link></li>
                      <li><Link className="dropdown-item" href="/urology">Urology</Link></li>
                      <li><Link className="dropdown-item" href="/reconstruction">Reconstruction</Link></li>
                      <li><Link className="dropdown-item" href="/nephrology-dialysis">Nephrology & Dialysis</Link></li>
                      <li><Link className="dropdown-item" href="/internal-medicine">Internal Medicine</Link></li>
                      <li><Link className="dropdown-item" href="/laparoscopic-surgery">General & Laparoscopic Surgery</Link></li>
                      <li><Link className="dropdown-item" href="/gynaecology">Gynaecology</Link></li>
                      <li><Link className="dropdown-item" href="/paediatrics">Paediatrics</Link></li>
                      <li><Link className="dropdown-item" href="/ent">ENT</Link></li>
                      <li><Link className="dropdown-item" href="/anesthesiology&pain-management">Anesthesiology & Pain Management</Link></li>
                      <li><Link className="dropdown-item" href="/radiology">Radiology</Link></li>
                      <li><Link className="dropdown-item" href="/pathology&laboratory-medicine">Pathology and Laboratory Medicine</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown" ref={diagnosticRef}>
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="diagnosticDropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen.diagnostic ? 'true' : 'false'}
                      onClick={() => toggleDropdown('diagnostic')}
                    >
                      Diagnostic
                    </Link>
                    <ul className={`dropdown-menu ${dropdownOpen.diagnostic ? 'show' : ''}`} aria-labelledby="diagnosticDropdown">
                      <li><Link className="dropdown-item" href="/laboratory">Laboratory</Link></li>
                      <li><Link className="dropdown-item" href="/radiology">Radiology</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown" ref={mediaRef}>
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="mediaDropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen.media ? 'true' : 'false'}
                      onClick={() => toggleDropdown('media')}
                    >
                      Media
                    </Link>
                    <ul className={`dropdown-menu ${dropdownOpen.media ? 'show' : ''}`} aria-labelledby="mediaDropdown">
                      <li><Link className="dropdown-item" href="/gallery">Gallery</Link></li>
                      <li><Link className="dropdown-item" href="#">News</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/doctors">Doctors</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" href="#">Enquiry</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/empanelments">Empanelments</Link>
                  </li>
                  <li className="nav-item book-appoint rounded">
                    <Link className="nav-link" href="#">Book Appointment</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
