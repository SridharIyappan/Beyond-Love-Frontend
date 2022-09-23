import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "../../utils/ActiveLink";

const Tabs = dynamic(
	import("react-tabs").then((mod) => mod.Tabs),
	{ ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from "react-tabs";
import BusinessLogin from "./Business/BusinessLogin";
import BusinessRegister from "./Business/BusinessRegister";
import CustomerRegister from "./Customer/CustomerRegister";
import CustomerLogin from "./Customer/CustomerLogin";
import router from "next/router";
import axios from "axios";
import { FaLanguage } from "react-icons/fa";
import Modal from "react-modal";
import { useTranslation } from "next-i18next";
resetIdCounter();

const NavbarTwo = ({ openCustomer, openBusiness }) => {
	const [displayAuth, setDisplayAuth] = useState(false);
	const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
	const [displayVendorRegister, setDisplayVendorRegister] = useState(false);
	const [sticky, setSticky] = useState(false);
	const [displayDropdownProfile, setDisplayDropdownProfile] = useState(false);
	const [token, setToken] = useState("");
	const [userDetail, setUserDetail] = useState("");
	const [categoryProfile, setCategoryProfile] = useState("");
	const [profile, setProfile] = useState();
	const [run, setRun] = useState(false);
	const [languages, setLanguages] = useState(false);
	const [languagesMobile, setLanguagesMobile] = useState(false);
	const { t } = useTranslation("home");
	//sticky menu
	const showStickyMenu = () => {
		if (window.scrollY >= 80) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};
	if (typeof window !== "undefined") {
		// browser code
		window.addEventListener("scroll", showStickyMenu);
	}

	const toggleAuth = () => {
		setDisplayAuth(!displayAuth);
	};

	const toggleAuthRegister = () => {
		setDisplayVendorRegister(!displayVendorRegister);
	};

	const toggleMiniAuth = () => {
		setDisplayMiniAuth(!displayMiniAuth);
	};

	const [showMenu, setshowMenu] = useState(false);

	const toggleMenu = () => {
		setshowMenu(!showMenu);
	};

	const toggleDropdownProfile = () => {
		setDisplayDropdownProfile(!displayDropdownProfile);
	};

	useEffect(() => {
		console.log({ token }, { userDetail });
	}, [run, userDetail]);

	useEffect(() => {
		// let abortController = new AbortController();
		const tok = localStorage.getItem("token");
		const user = JSON.parse(localStorage.getItem("user"));
		// console.log()
		setToken("");
		if (user !== null && user !== undefined) {
			setToken(tok);
			setUserDetail(user);
			let id = user._id;
			let category = user.category;
			getBusinessProfile(id, category);
			if (user.userType == "Business") {
				setCategoryProfile(category.toLowerCase());
			}
		}
		console.log(openCustomer, "this is customer");
		console.log(openBusiness, "this is busines");
		if (openCustomer && (tok == null || tok == undefined)) {
			setDisplayVendorRegister(true);
			setDisplayAuth(false);
		}
		if (openBusiness && (tok == null || tok == undefined)) {
			setDisplayAuth(true);
			setDisplayVendorRegister(false);
		}
		// your async action is here
		// return () => {
		// abortController.abort();
		// }
	}, [run, openCustomer, openBusiness]);

	// const languagesChange = (e) => {
	//   setLanguages(e.target.value)
	//   localStorage.setItem("lang", languages)
	// }

	const getBusinessProfile = async (id, category) => {
		try {
			const { data } = await axios.get(
				`${process.env.DOMAIN_NAME}/api/business/get-profile/${category}/${id}`
			);
			console.log(data);
			setProfile(
				`${process.env.DOMAIN_NAME}/api/business/get-photos/${data.business.profileImage}`
			);
		} catch (error) {
			console.log(error);
		}
	};

	const languagesChange = (e, lang) => {
		// setLanguages(e.target.value)
		console.log(lang);
		localStorage.setItem("lang", lang);
		router.push(router.route, router.asPath, {
			locale: lang,
		});
		// <getStaticProps loc={e.target.value} />;
		// window.location.reload(false);
	};

	const clickLanguage = () => {
		setLanguages(true);
		setshowMenu(false);
	};

	const clickLanguageMobile = () => {
		setLanguagesMobile(true);
		setshowMenu(false);
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.location.reload(false);
	};

	return (
		<>
			<div className={displayAuth ? "body_overlay open" : "body_overlay"}></div>
			<div
				className={displayVendorRegister ? "body_overlay open" : "body_overlay"}
			></div>
			<div className={sticky ? "is-sticky navbar-area" : "navbar-area"}>
				<div className="miran-responsive-nav">
					<div className="container">
						<div className="miran-responsive-menu">
							<div
								onClick={() => toggleMenu()}
								className="hamburger-menu hamburger-two"
							>
								{showMenu ? (
									<i className="bx bx-x"></i>
								) : (
									<i className="bx bx-menu"></i>
								)}
							</div>
							<div className="logo">
								<Link href="/">
									<a>
										<img
											src="/images/black-logo1.png"
											alt="logo"
											style={{ maxWidth: "50%" }}
										/>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className={showMenu ? "miran-nav show" : "miran-nav"}>
					<div className="container-fluid">
						<nav className="navbar navbar-expand-md navbar-light">
							<Link href="/">
								<a className="navbar-brand" style={{ width: "420px" }}>
									<img
										src="/images/black-logo1.png"
										alt="logo"
										style={{ maxWidth: "50%" }}
									/>
								</a>
							</Link>
							<div
								className="collapse navbar-collapse mean-menu"
								style={{ flexBasis: "none" }}
							>
								<ul className="navbar-nav">
									{/* <li className='nav-item'>
                    <Link href='/' activeClassName='active'>
                      <a href='#' className='dropdown-toggle nav-link'>
                        {text}
                      </a>
                    </Link>
                  </li> */}

									{/* <li className='nav-item'>
                    <Link href='/' activeClassName='active'>
                      <a href='#' className='dropdown-toggle nav-link'>
                        Home
                      </a>
                    </Link>
                  </li> */}

									<li className="nav-item" style={{ marginRight: "7px" }}>
										<Link href="" activeClassName="active">
											<a
												href="https://invisiblesuperhumans.org/"
												target="_blank"
												className="dropdown-toggle nav-link nav-links"
											>
												{t("Donate")}
											</a>
										</Link>
									</li>

									<li
										className="nav-item drop-down-mobile"
										style={{ marginLeft: "0px" }}
									>
										<a>
											<FaLanguage
												size="4rem"
												onClick={clickLanguageMobile}
												className="language-icon"
											/>

											<Modal
												isOpen={languagesMobile}
												onRequestClose={() => setLanguagesMobile(false)}
												style={{
													overlay: {
														position: "fixed",
														top: 0,
														left: 0,
														right: 0,
														bottom: 0,
														backgroundColor: "rgba(255, 255, 255, 0.75)",
													},
													content: {
														position: "absolute",
														top: "40px",
														left: "40px",
														right: "40px",
														width: "79%",
														height: "27%",
														inset: "40px",
														bottom: "40px",
														border: "1px solid #ccc",
														background: "#fff",
														overflow: "auto",
														WebkitOverflowScrolling: "touch",
														borderRadius: "4px",
														outline: "none",
														padding: "20px",
													},
												}}
											>
												<div className="drpdown-popup">
													<p onClick={(e) => languagesChange(e, "en")}>
														English
													</p>
													<p onClick={(e) => languagesChange(e, "mr-IN")}>
														Marathi
													</p>
													<p onClick={(e) => languagesChange(e, "hi-IN")}>
														Hindi
													</p>
													<p onClick={(e) => languagesChange(e, "kn-IN")}>
														Kannada
													</p>
													<p onClick={(e) => languagesChange(e, "ml-IN")}>
														Malayalam
													</p>
													<p onClick={(e) => languagesChange(e, "gu-IN")}>
														Gujarati
													</p>
													<p onClick={(e) => languagesChange(e, "ta-IN")}>
														Tamil
													</p>
													<p onClick={(e) => languagesChange(e, "te-IN")}>
														Telugu
													</p>
												</div>
											</Modal>
										</a>
									</li>

									{/* <div className='donate-btn'>
                    <Link
                      href='/listings'
                      activeClassName='active'
                    >
                      <a className='default-btn'>
                         Search
                      </a>
                    </Link>
                  </div> */}

									{/* <div className='main-donate-btn'>
                    <div className='donate-btn mr-3'>
                      <Link href='/listings' activeClassName='active'>
                        <a href='#' className='dropdown-toggle nav-link'>
                          Home
                        </a>
                      </Link>
                    </div>
                    <div className='donate-btn'>
                      <Link
                        href='/'
                        activeClassName='active'
                      >
                        <a className='default-btn'>
                          <i className='flaticon-more'></i> Community
                        </a>
                      </Link>
                    </div>
                  </div> */}
								</ul>

								<div className="mobile-view" style={{ marginRight: "44px" }}>
									{token == null || token == "" ? (
										<div className="others-option d-flex align-items-center">
											<div className="option-item">
												<span
													data-toggle="modal"
													onClick={toggleAuthRegister}
													className="auth-one"
												>
													<i className="flaticon-user"></i> {t("Login")} /{" "}
													{t("Register")}
												</span>
											</div>
											<div className="option-item">
												<span
													data-toggle="modal"
													onClick={toggleAuth}
													className="active"
												>
													<a className="default-btn button-one">
														{/* <i className="flaticon-more"></i>{" "} */}
														{t("Business Login / Register")}
													</a>
												</span>
											</div>
										</div>
									) : (
										<div className="others-option d-flex align-items-center">
											<div className="option-item">
												<div className="dropdown profile-nav-item menu-profile-one">
													<a
														href="#"
														className=""
														role="button"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<div className="menu-profile">
															{/* {userDetail.profileImage !== undefined ? (
																<img
																	src={profile}
																	className="rounded-circle"
																	alt="image"
																/>
															) : (
																<img
																	src="/images/user1.jpg"
																	className="rounded-circle"
																	alt="image"
																/>
															)} */}
															<span
																className="name"
																onClick={toggleDropdownProfile}
															>
																{t("My Account")}
															</span>
														</div>
													</a>

													<div
														className={
															displayDropdownProfile
																? "dropdown-menu show"
																: "dropdown-menu"
														}
													>
														<div className="dropdown-header d-flex flex-column align-items-center">
															<div className="figure mb-3">
																{/* {userDetail.profileImage !== undefined ? (
																	<img
																		src={profile}
																		className="rounded-circle"
																		alt="image"
																		style={{ height: "80px", width: "80px" }}
																	/>
																) : (
																	<img
																		src="/images/user1.jpg"
																		className="rounded-circle"
																		alt="image"
																		style={{ height: "80px", width: "80px" }}
																	/>
																)} */}
															</div>

															<div className="info text-center">
																<span className="name">
																	{userDetail.businessName}
																</span>
																<p className="mb-3 email">{userDetail.email}</p>
															</div>
														</div>

														<div className="dropdown-body">
															<ul className="profile-nav p-0">
																{userDetail.userType == "Business" ? (
																	<li className="nav-item">
																		<Link
																			href={`/dashboard/category/${categoryProfile}`}
																		>
																			<a className="nav-link">
																				<i className="bx bx-user"></i>{" "}
																				<span>{t("Profile")}</span>
																			</a>
																		</Link>
																	</li>
																) : (
																	<li className="nav-item">
																		<Link href={`/dashboard/CustomerForm/`}>
																			<a className="nav-link">
																				<i className="bx bx-user"></i>{" "}
																				<span>{t("Profile")}</span>
																			</a>
																		</Link>
																	</li>
																)}

																{userDetail.userType == "Business" ? (
																	<li className="nav-item">
																		<Link
																			href={`/dashboard/add-listing/${categoryProfile}`}
																		>
																			<a className="nav-link">
																				<i className="bx bx-plus-circle"></i>
																				<span>{t("Portfolio")}</span>
																			</a>
																		</Link>
																	</li>
																) : (
																	<></>
																)}
															</ul>
														</div>

														<div className="dropdown-footer">
															<ul className="profile-nav">
																<li className="nav-item">
																	<a
																		className="nav-link"
																		onClick={handleLogout}
																	>
																		<i className="bx bx-log-out"></i>{" "}
																		<span>{t("Logout")}</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>

								{/* <li className='nav-item' style={{ display: "flex", alignItems: "end" }}>
                  <div className="form-group">
                    <select
                      className="dashbaord-category-select"
                      placeholder="Select the state"
                      style={{ background: "none" }}
                      onChange={languagesChange}
                    >
                      <h3 onClick={(e) => languagesChange(e, "ta-In")}>Tamil</h3>
                      <option>Languages</option>
                      <option value="en">English</option>
                      <option value="mr-IN">Marathi</option>
                      <option value="hi-IN">Hindi</option>
                      <option value="kn-IN">Karnataka</option>
                      <option value="ml-IN">Malayalam</option>
                      <option value="gu-IN">Gujarati</option>
                      <option value="ta-IN">Tamil</option>
                      <option value="te-IN">Telugu</option>
                    </select>
                  </div>
                </li> */}
								<div>
									<FaLanguage
										size="4rem"
										onClick={clickLanguage}
										className="language-icon"
									/>

									<Modal
										isOpen={languages}
										onRequestClose={() => setLanguages(false)}
										style={{
											overlay: {
												position: "fixed",
												right: 0,
												bottom: 0,
												left: "1140px",
												top: "38px",
												backgroundColor: "unset",
											},
											content: {
												position: "absolute",
												width: "79%",
												inset: "40px",
												border: "1px solid rgb(204, 204, 204)",
												overflow: "auto",
												borderradius: " 4px",
												outline: "none",
												left: "1240px",
												top: "58px",
												height: "38%",
												padding: "20px",
											},
										}}
									>
										<div className="drpdown-popup">
											<p onClick={(e) => languagesChange(e, "en")}>English</p>
											<p onClick={(e) => languagesChange(e, "mr-IN")}>
												Marathi
											</p>
											<p onClick={(e) => languagesChange(e, "hi-IN")}>Hindi</p>
											<p onClick={(e) => languagesChange(e, "kn-IN")}>
												Kannada
											</p>
											<p onClick={(e) => languagesChange(e, "ml-IN")}>
												Malayalam
											</p>
											<p onClick={(e) => languagesChange(e, "gu-IN")}>
												Gujarati
											</p>
											<p onClick={(e) => languagesChange(e, "ta-IN")}>Tamil</p>
											<p onClick={(e) => languagesChange(e, "te-IN")}>Telugu</p>
										</div>
									</Modal>
								</div>
							</div>
						</nav>
					</div>
				</div>

				<div className="others-option-for-responsive">
					<div className="container">
						<div className="dot-menu" onClick={toggleMiniAuth}>
							<div className="inner">
								<div className="circle circle-one"></div>
								<div className="circle circle-two"></div>
								<div className="circle circle-three"></div>
							</div>
						</div>

						<div className={displayMiniAuth ? "container active" : "container"}>
							<div className="option-inner">
								{token == null || token == "" ? (
									<div className="others-option">
										<div className="option-item">
											<span
												data-toggle="modal"
												data-target="#loginRegisterModal"
												onClick={toggleAuthRegister}
											>
												<i className="flaticon-user"></i> {t("Login")} /{" "}
												{t("Register")}
											</span>
										</div>
										<div className="option-item">
											<span
												data-toggle="modal"
												onClick={toggleAuth}
												className="active"
											>
												<a className="default-btn button-one">
													{/* <i className="flaticon-more"></i>{" "} */}
													{t("Business Login / Register")}
												</a>
											</span>
										</div>
									</div>
								) : (
									<div className="others-option d-flex align-items-center">
										<div className="option-item">
											<div className="dropdown profile-nav-item menu-profile-one">
												<a
													href="#"
													className=""
													role="button"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
												>
													<div className="menu-profile">
														{/* {userDetail.profileImage !== undefined ? (
															<img
																src={profile}
																className="rounded-circle"
																alt="image"
															/>
														) : (
															<img
																src="/images/user1.jpg"
																className="rounded-circle"
																alt="image"
															/>
														)} */}
														<span
															className="name"
															onClick={toggleDropdownProfile}
														>
															{t("My Account")}
														</span>
													</div>
												</a>

												<div
													className={
														displayDropdownProfile
															? "dropdown-menu show"
															: "dropdown-menu"
													}
												>
													<div className="dropdown-header d-flex flex-column align-items-center">
														<div className="figure mb-3">
															{/* {userDetail.profileImage !== undefined ? (
																<img
																	src={profile}
																	className="rounded-circle"
																	alt="image"
																	style={{ height: "80px", width: "80px" }}
																/>
															) : (
																<img
																	src="/images/user1.jpg"
																	className="rounded-circle"
																	alt="image"
																	style={{ height: "80px", width: "80px" }}
																/>
															)} */}
														</div>

														<div className="info text-center">
															<span className="name">
																{userDetail.businessName}
															</span>
															<p className="mb-3 email">{userDetail.email}</p>
														</div>
													</div>

													<div className="dropdown-body">
														<ul
															className="profile-nav p-0"
															style={{ listStyle: "none" }}
														>
															{userDetail.userType == "Business" ? (
																<li className="nav-item">
																	<Link
																		href={`/dashboard/category/${categoryProfile}`}
																	>
																		<a className="nav-link">
																			<i className="bx bx-user"></i>{" "}
																			<span>{t("Profile")}</span>
																		</a>
																	</Link>
																</li>
															) : (
																<li className="nav-item">
																	<Link href={`/dashboard/CustomerForm/`}>
																		<a className="nav-link">
																			<i className="bx bx-user"></i>{" "}
																			<span>{t("Profile")}</span>
																		</a>
																	</Link>
																</li>
															)}

															{userDetail.userType == "Business" ? (
																<li className="nav-item">
																	<Link
																		href={`/dashboard/add-listing/${categoryProfile}`}
																	>
																		<a className="nav-link">
																			<i className="bx bx-plus-circle"></i>
																			<span>{t("Portfolio")}</span>
																		</a>
																	</Link>
																</li>
															) : (
																<></>
															)}
														</ul>
													</div>

													<div className="dropdown-footer">
														<ul
															className="profile-nav pl-0"
															style={{ listStyle: "none" }}
														>
															<li className="nav-item">
																<a className="nav-link" onClick={handleLogout}>
																	<i className="bx bx-log-out"></i>{" "}
																	<span>{t("Logout")}</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ------------ Auth Modal Business------- */}
			<div
				className={
					displayAuth
						? "modal loginRegisterModal show"
						: "modal loginRegisterModal"
				}
				id="loginRegisterModal"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<Tabs>
							<button type="button" className="close" onClick={toggleAuth}>
								<i className="bx bx-x"></i>
							</button>

							<ul className="nav nav-tabs" id="myTab">
								<h3 className="vendor-register-head">
									{t("Sign up as Business Register")}
								</h3>
								<TabList>
									<Tab className="nav-item">
										<a className="nav-link" id="login-tab">
											{t("Login")}
										</a>
									</Tab>
									<Tab className="nav-item">
										<a className="nav-link" id="register-tab">
											{t("Register")}
										</a>
									</Tab>
								</TabList>
							</ul>

							<div className="tab-content" id="myTabContent">
								<TabPanel>
									<BusinessLogin />
								</TabPanel>

								<TabPanel>
									<BusinessRegister />
								</TabPanel>
							</div>
						</Tabs>
					</div>
				</div>
			</div>

			{/* ------------ Auth Modal Customer ------- */}
			<div
				className={
					displayVendorRegister
						? "modal loginRegisterModal show"
						: "modal loginRegisterModal"
				}
				id="loginRegisterModal"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<Tabs>
							<button
								type="button"
								className="close"
								onClick={toggleAuthRegister}
							>
								<i className="bx bx-x"></i>
							</button>

							<ul className="nav nav-tabs" id="myTab">
								<h3 className="vendor-register-head">
									{t("Welcome Back. Pet Parent.")}
								</h3>
								<TabList>
									<Tab className="nav-item">
										<a className="nav-link" id="login-tab">
											{t("Login")}
										</a>
									</Tab>
									<Tab className="nav-item">
										<a className="nav-link" id="register-tab">
											{t("Register")}
										</a>
									</Tab>
								</TabList>
							</ul>

							<div className="tab-content" id="myTabContent">
								<TabPanel>
									<CustomerLogin />
								</TabPanel>

								<TabPanel>
									<CustomerRegister />
								</TabPanel>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
