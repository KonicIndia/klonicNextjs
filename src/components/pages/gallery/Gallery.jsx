import React, { useEffect } from 'react';
import pain_management_1 from '../../../assets/webp/images/pain_management.avif';
import PageBreadCrums from '../../pageBreadCrums/PageBreadCrums';
import { Link } from 'react-router-dom';
import './gallery.css'
import gallery_1 from '../../../assets/webp/gallery/1.avif'
import gallery_2 from '../../../assets/webp/gallery/2.avif'
import gallery_3 from '../../../assets/webp/gallery/3.avif'
import gallery_4 from '../../../assets/webp/gallery/4.avif'
import gallery_5 from '../../../assets/webp/gallery/5.avif'
import gallery_6 from '../../../assets/webp/gallery/6.avif'
import gallery_7 from '../../../assets/webp/gallery/7.avif'
import gallery_8 from '../../../assets/webp/gallery/8.avif'
import gallery_9 from '../../../assets/webp/gallery/9.avif'
import gallery_10 from '../../../assets/webp/gallery/10.avif'
import gallery_11 from '../../../assets/webp/gallery/11.avif'
import gallery_12 from '../../../assets/webp/gallery/12.avif'

function Gallery() {

    useEffect(() => {
        // Function to handle the popup display
        const handlePopup = (e) => {
            e.preventDefault();
            const popup = document.createElement('div');
            popup.className = 'magnific-popup';
            document.body.appendChild(popup);

            // Create the popup content
            const popupContent = document.createElement('div');
            popupContent.className = 'popup-content';

            // Create the image element
            const img = document.createElement('img');
            img.src = e.currentTarget.href;
            img.alt = 'Popup Image';

            // Create the close button
            const closeButton = document.createElement('span');
            closeButton.className = 'close-popup';
            closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95 1.414-1.414z"/></svg>`;

            // Append elements to the popup content
            popupContent.appendChild(img);
            popupContent.appendChild(closeButton);

            // Append popup content to popup
            popup.appendChild(popupContent);

            // Close popup when clicking the close button or outside the popup content
            const closePopup = () => {
                popup.remove();
            };

            closeButton.addEventListener('click', closePopup);
            popup.addEventListener('click', (e) => {
                if (e.target === popup) closePopup();
            });
        };

        // Attach event listeners to all gallery links
        const galleryLinks = document.querySelectorAll('.glry-pic a');
        galleryLinks.forEach(link => {
            link.addEventListener('click', handlePopup);
        });

        // Cleanup function to remove event listeners
        return () => {
            galleryLinks.forEach(link => {
                link.removeEventListener('click', handlePopup);
            });
        };
    }, []);

    const data = [
        {
            id: 1,
            image: gallery_1,
        },
        {
            id: 2,
            image: gallery_2,
        },
        {
            id: 3,
            image: gallery_3,
        },
        {
            id: 4,
            image: gallery_4,
        },
        {
            id: 5,
            image: gallery_5,
        },
        {
            id: 6,
            image: gallery_6,
        },
        {
            id: 7,
            image: gallery_7,
        },
        {
            id: 8,
            image: gallery_8,
        },
        {
            id: 9,
            image: gallery_9,
        },
        {
            id: 10,
            image: gallery_10,
        },
        {
            id: 11,
            image: gallery_11,
        },
        {
            id: 12,
            image: gallery_12,
        },
    ]
    return (
        <>
            <PageBreadCrums headingBreadCrap={"Gallery"} homeLink={"Home"} pageLink={"Gallery"} />

            <section className="gallery-area py-4">
                <div className="container p-0">
                    <div className="d-flex flex-wrap justify-content-center">

                        {data.map((item) => (
                            <div className="col-md-4 col-lg-3 px-2" key={item.id}>
                                <div className="glry-pic">
                                    <Link to={item.image}><img src={item.image} alt="Gallery" /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Gallery;
