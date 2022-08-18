import React from "react";
import { useRouter } from "next/router";

const Footer = ({ bgColor }) => {
  let router = useRouter();
  const handleFilter = (category, state, city) => {
    // e.preventDefault();
    router.push({
      pathname: "/listings",
      query: {
        categoryName: category,
        stateName: state,
        cityName: city,
        locationName: "",
      },
    });
  };
  return (
    <>
      <footer className={`footer-area ${bgColor}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <ul className="link-list">
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetClinic",
                        ["Tamil Nadu", 33],
                        ["Chennai", 33, 42]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Clinic in
                      Chennai
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetGrooming",
                        ["Tamil Nadu", 33],
                        ["Chennai", 33, 42]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Grooming in
                      Chennai
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetTraining",
                        ["Tamil Nadu", 33],
                        ["Chennai", 33, 42]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Training in
                      Chennai
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetBoarding",
                        ["Tamil Nadu", 33],
                        ["Chennai", 33, 42]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Boarding in
                      Chennai
                    </a>
                  </li>
                  {/* <li>
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Food in
                      chennai
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <ul className="link-list">
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetClinic",
                        ["Delhi", 8],
                        ["New Delhi", 8, 533]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Clinic in
                      Delhi
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetGrooming",
                        ["Delhi", 8],
                        ["New Delhi", 8, 533]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Grooming in
                      Delhi
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetTraining",
                        ["Delhi", 8],
                        ["New Delhi", 8, 533]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Training in
                      Delhi
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetBoarding",
                        ["Delhi", 8],
                        ["New Delhi", 8, 533]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Boarding in
                      Delhi
                    </a>
                  </li>
                  {/* <li>
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Food in
                      Delhi
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <ul className="link-list">
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetClinic",
                        ["Telangana", 36],
                        ["Hyderabad", 36, 939]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Clinic in
                      Hyderabad
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetGrooming",
                        ["Telangana", 36],
                        ["Hyderabad", 36, 939]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Grooming in
                      Hyderabad
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetTraining",
                        ["Telangana", 36],
                        ["Hyderabad", 36, 939]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Training in
                      Hyderabad
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetBoarding",
                        ["Telangana", 36],
                        ["Hyderabad", 36, 939]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Boarding in
                      Hyderabad
                    </a>
                  </li>
                  {/* <li>
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Food in
                      Hyderabad
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <ul className="link-list">
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetClinic",
                        ["Maharashtra", 28],
                        ["Mumbai City", 28, 774]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i> Pet Clinic in
                      Mumbai
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetGrooming",
                        ["Maharashtra", 28],
                        ["Mumbai City", 28, 774]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i>Pet Grooming in
                      Mumbai
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetTraining",
                        ["Maharashtra", 28],
                        ["Mumbai City", 28, 774]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i>Pet Training in
                      Mumbai
                    </a>
                  </li>
                  <li
                    onClick={() =>
                      handleFilter(
                        "PetBoarding",
                        ["Maharashtra", 28],
                        ["Mumbai City", 28, 774]
                      )
                    }
                  >
                    <a>
                      <i className="flaticon-left-chevron"></i>Pet Boarding in
                      Mumbai
                    </a>
                  </li>
                  {/* <li>
                    <a>
                      <i className="flaticon-left-chevron"></i>Pet Food in
                      Bangalore
                    </a>
                  </li> */}
                </ul>
              </div>
              <h3>Social Media</h3>
              <div className="footer-social-media mt-4">
                <div>
                  <a
                    href="https://www.facebook.com/beyondlove.pet"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook-square"></i>
                  </a>
                </div>
                {/* <div>
                  <a href="#" target="_blank">
                    <i className='bx bxl-twitter'></i>
                  </a>
                </div> */}
                <div>
                  <a
                    href="https://www.instagram.com/beyondlove.pet/"
                    target="_blank"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <p>
              <span> Copyright © 2022</span>{" "}
              <a href="/" rel="noreferrer">
                BEYONDLOVE.
              </a>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
        </div>

        <div className="footer-image text-center">
          <img src="/images/footer-image.png" alt="image" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
