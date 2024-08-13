import Link from 'next/link'
import React from 'react'

function PageBreadCrums({headingBreadCrap, homeLink, pageLink}) {
    return (
        <>
            <div class="page-banner-area">
                <div class="container">
                    <div class="page-banner-content">
                        <h2> { headingBreadCrap } </h2>
                        <ul class="pages-list">
                            <li className='m-0'><Link href="/"> { homeLink } </Link></li>
                            <li> { pageLink } </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageBreadCrums