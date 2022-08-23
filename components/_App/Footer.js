import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
const Footer = ({ bgColor }) => {
  let router = useRouter();
  const { t } = useTranslation("home");
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

            <div className="col-lg-3 col-sm-6 col-md-6 pt-4">
              <div className="single-footer-widget">
                <h6>{t("Pet Clinic")}</h6>
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Clinic")} {t("In Chennai")}
                    </a>
                  </li>
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Clinic")} {t("In Delhi")}
                    </a>
                  </li>
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Clinic")} {t("In Hyderabad")}
                    </a>
                  </li>
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Clinic")} {t("In Mubai")}
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

            <div className="col-lg-3 col-sm-6 col-md-6 pt-4">
              <div className="single-footer-widget">
                <h6>{t("Pet Grooming")}</h6>
                <ul className="link-list">
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Grooming")} {t("In Chennai")}
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Grooming")} {t("In Delhi")}
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Grooming")} {t("In Hyderabad")}
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Grooming")} {t("In Mubai")}
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

            <div className="col-lg-3 col-sm-6 col-md-6 pt-4">
              <div className="single-footer-widget">
                <h6>{t("Pet Boarding")}</h6>
                <ul className="link-list">
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Boarding")} {t("In Chennai")}
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Boarding")} {t("In Delhi")} </a>
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Boarding")} {t("In Hyderabad")}
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Boarding")} {t("In Mubai")}
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

            <div className="col-lg-3 col-sm-6 col-md-6 pt-4">
              <div className="single-footer-widget">
                <h6>{t("Pet Training")}</h6>
                <ul className="link-list">
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
                      <i className="flaticon-left-chevron"></i> {t("Pet Training")} {t("In Chennai")}
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
                      <i className="flaticon-left-chevron"></i>{t("Pet Training")} {t("In Delhi")}
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
                      <i className="flaticon-left-chevron"></i>{t("Pet Training")} {t("In Hyderabad")}
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
                      <i className="flaticon-left-chevron"></i>{t("Pet Training")} {t("In Mubai")}
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
              {/* <h3>Social Media</h3> */}

            </div>
          </div>
          <div className="copyright-image">
            <a>
              <img src="/images/black-logo2.png" alt="logo" />
            </a>
          </div>

          <div className="about-term-sec pb-2">
            <div>
              <a href="/" >{t("About US")}</a>
            </div>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
            <div>
              <a href="/" >{t("Privacy Policy")}</a>
            </div>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
            <div>
              <a href="/" >{t("Terms & Conditions")}</a>
            </div>
          </div>
          <div className="made-india pt-2">
            Made With 💙 In India – For the Pets, By Pet Lovers.
          </div>

          <div className="copyright-area">
            <div className="footer-social-media mt-4">
              <div>
                <a
                  href="https://www.facebook.com/beyondlove.pet"
                  target="_blank"
                >
                  <i className="bx bxl-facebook-square"></i>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/Beyond_love26" target="_blank">
                  <i className='bx bxl-twitter'></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/beyondlove.pet/"
                  target="_blank"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
            <div >
              <p>
                <span> Copyright © 2022</span>{" "}
                <a href="/" rel="noreferrer">
                  BEYONDLOVE.
                </a>{" "}
                <span>All Rights Reserved</span>
              </p>
            </div>
          </div>

        </div>

        {/* <div className="footer-image text-center">
          <img src="/images/footer-image.png" alt="image" />
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
