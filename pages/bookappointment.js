import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import axios from "axios";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { BsFacebook, BsFillHeartFill, BsYoutube } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import {
    FacebookShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
} from "react-share";
import { MdEmail } from "react-icons/md";
//components
import NavbarTwo from "../components/_App/NavbarTwo";
import PopularPlacesFilter from "../components/Common/PopularPlacesFilter";
import Footer from "../components/_App/Footer";
import { useRouter } from "next/router";


const BookAppoinment = () => {
    return (
        <>
            <NavbarTwo />
            <section>
                <ToastContainer />

                <h2>Book AppDownload</h2>

            </section>
            <Footer bgColor="bg-f5f5f5" />
        </>
    );
};

export default BookAppoinment;
