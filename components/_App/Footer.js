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
			<div className="row mx-1">
				<div className="col-lg-1 col-sm-6 col-md-4">
					<section>

					</section>
				</div>
				<div className="col-lg-10 col-sm-12 col-md-12">
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
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Clinic")} {t("In Chennai")}
												</a>
											</li>
											<li
												onClick={() =>
													handleFilter("PetClinic", ["Delhi", 8], ["Delhi", 8, 533])
												}
											>
												<a>
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Clinic")} {t("In Delhi")}
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
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Clinic")} {t("In Hyderabad")}
												</a>
											</li>
											<li
												onClick={() =>
													handleFilter(
														"PetClinic",
														["Maharashtra", 28],
														["Mumbai", 28, 774]
													)
												}
											>
												<a>
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Clinic")} {t("In Mumbai")}
												</a>
											</li>
											{/* <li>
										<a>
											<i className="flaticon-left-chevron"></i>{" "}
											{t("Pet Clinic")} {t("In Bangalore")}
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
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Grooming")} {t("In Chennai")}
												</a>
											</li>
											<li
												onClick={() =>
													handleFilter(
														"PetGrooming",
														["Delhi", 8],
														["Delhi", 8, 533]
													)
												}
											>
												<a>
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Grooming")} {t("In Delhi")}
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
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Grooming")} {t("In Hyderabad")}
												</a>
											</li>
											<li
												onClick={() =>
													handleFilter(
														"PetGrooming",
														["Maharashtra", 28],
														["Mumbai", 28, 774]
													)
												}
											>
												<a>
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Grooming")} {t("In Mumbai")}
												</a>
											</li>
											{/* <li>
										<a>
											<i className="flaticon-left-chevron"></i>{" "}
											{t("Pet Grooming")} {t("In Bangalore")}
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
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Boarding")} {t("In Chennai")}
												</a>
											</li>
											<li
												onClick={() =>
													handleFilter(
														"PetBoarding",
														["Delhi", 8],
														["Delhi", 8, 533]
													)
												}
											>
												<a>
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Boarding")} {t("In Delhi")}{" "}
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
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Boarding")} {t("In Hyderabad")}
												</a>
											</li>
											<li
												onClick={() =>
													handleFilter(
														"PetBoarding",
														["Maharashtra", 28],
														["Mumbai", 28, 774]
													)
												}
											>
												<a>
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Boarding")} {t("In Mumbai")}
												</a>
											</li>
											{/* <li>
										<a>
											<i className="flaticon-left-chevron"></i>{" "}
											{t("Pet Boarding")} {t("In Bangalore")}
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
													<i className="flaticon-left-chevron"></i>{" "}
													{t("Pet Training")} {t("In Chennai")}
												</a>
											</li>
											<li
												onClick={() =>
													handleFilter(
														"PetTraining",
														["Delhi", 8],
														["Delhi", 8, 533]
													)
												}
											>
												<a>
													<i className="flaticon-left-chevron"></i>
													{t("Pet Training")} {t("In Delhi")}
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
													<i className="flaticon-left-chevron"></i>
													{t("Pet Training")} {t("In Hyderabad")}
												</a>
											</li>
											<li
												onClick={() =>
													handleFilter(
														"PetTraining",
														["Maharashtra", 28],
														["Mumbai", 28, 774]
													)
												}
											>
												<a>
													<i className="flaticon-left-chevron"></i>
													{t("Pet Training")} {t("In Mumbai")}
												</a>
											</li>
											{/* <li>
										<a>
											<i className="flaticon-left-chevron"></i>{" "}
											{t("Pet Training")} {t("In Bangalore")}
										</a>
									</li> */}
										</ul>
									</div>
									{/* <h3>Social Media</h3> */}
								</div>
							</div>
						</div>
					</footer>

					<footer className="footer-new-section">
						<div className="container">
							<div className="row" style={{ alignItems: "normal" }}>
								<div className="col-lg-3 col-sm-6 col-md-6 ">
									<p>
										<img src="/images/black-logo2.png" alt="logo" />
									</p>
								</div>
								<div className="col-lg-3 col-sm-6 col-md-6 footer-content-second">
									<p>Company</p>
									<a href="/">About Beyond Love</a>
									{/* <a href="/">Press & Investors</a> */}
									<a href="/">Beyond Love Partners</a>
									<a href="/">Blog</a>
									{/* <a href="/">Petted</a> */}
								</div>
								<div className="col-lg-3 col-sm-6 col-md-6 footer-content-second">
									<p>Support</p>
									<a href="/">Help Center & Safety</a>
									<a href="/">Trust and Safety</a>
									<a href="/">Community guidelines</a>
									<a href="/">Responsible disclosure</a>
								</div>
								<div className="col-lg-3 col-sm-6 col-md-6 footer-content-second">
									<p>Apply</p>
									{/* <a href="/">Become a Dog Walker</a> */}
									<a href="/"> Careers</a>
								</div>
							</div>
							<hr height="1px" class="sc-dnqmqq hBuCPu"></hr>

							<div className="row copy-rights-section">

								<div className="col-lg-3 col-sm-6 col-md-6 footer-content-second">
									<a href="/">Privacy policy</a>
								</div>
								<div className="col-lg-3 col-sm-6 col-md-6 footer-content-second">
									<a href="/">Terms & conditions</a>
								</div>
								<div className="col-lg-2 col-sm-6 col-md-6 footer-icons">
									<a href="https://www.facebook.com/beyondlove.pet" target="_blank">
										<i className="bx bxl-facebook-square"></i>
									</a>
									<a href="https://twitter.com/Beyond_love26" target="_blank">
										<i className="bx bxl-twitter"></i>
									</a>
									<a
										href="https://www.instagram.com/beyondlove.pet/"
										target="_blank"
									>
										<i
											className="bx bxl-instagram"
											style={{ color: "rgb(153, 153, 153)" }}
										></i>
									</a>
								</div>
							</div>
							<br />
							<div className="made-section">
								Made With 💙 In India – For the Pets, By Pet Lovers.
							</div>
							<br />
							<div className="made-section">
								<a>Copyright © 2022 BEYONDLOVE. All Rights Reserved</a>
							</div>
						</div>
					</footer>
				</div>
				<div className="col-lg-1 col-sm-6 col-md-4">
					<section>

					</section>
				</div>
			</div>
		</>
	);
};

export default Footer;
