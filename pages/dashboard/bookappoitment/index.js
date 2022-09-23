import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

//components
import NavbarThree from '../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';

const options = {
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: false,
    items: 1,
    dots: false,
    autoplay: true,
    smartSpeed: 500,

    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>",
    ],
};

const BookAppoinment = () => {
    const [display, setDisplay] = useState(false);
    const [isMounted, setisMounted] = useState(false);

    useEffect(() => {
        setisMounted(true);
        setDisplay(true);
        setisMounted(false);
    }, []);

    return (
        <>
            <DashboardNavbar />
            <div className='main-content d-flex flex-column'>
                <NavbarThree />

                <div className='breadcrumb-area'>
                    <h1>Book Appoinment</h1>
                </div>

                <section className='listing-area'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-6 col-md-6'>
                            <h5>Your Appoinment</h5>
                            <div className='single-listings-box'>
                                <div className='listings-image'>
                                    <img src='/images/listings/listings1.jpg' alt='image' />
                                    <Link href="/single-listings">
                                        <a className='link-btn'></a>
                                    </Link>
                                </div>

                                <div className='listings-content'>
                                    <ul className='listings-meta'>
                                        <li>
                                            <a href='#'>
                                                <i className='flaticon-furniture-and-household'></i>{' '}
                                                Restaurant
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <i className='flaticon-pin'></i> New York, USA
                                            </a>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/single-listings">

                                            <a>Chipotle Mexican Grill</a>
                                        </Link>
                                    </h3>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className='rating'>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <span className='count'>(45)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='listings-footer'>
                                    <a href='#' className='default-btn'>
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <div className='flex-grow-1'></div>

                <div className='copyrights-area'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-sm-6 col-md-6'>
                            <p>
                                <i className='bx bx-copyright'></i>2020 <a href='#'>Indice</a>. All
                                rights reserved
                            </p>
                        </div>

                        <div className='col-lg-6 col-sm-6 col-md-6 text-right'>
                            <p>
                                Designed by ❤️{' '}
                                <a href='https://envytheme.com/' target='_blank' rel="noreferrer">
                                    EnvyTheme
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookAppoinment;
