import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addAllBusiness } from "../../Redux/allBusinessSlice";
import { useRouter } from "next/router";
import Typist from "react-typist";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { dataState } from "../../utils/dataState";
import { dataCity } from "../../utils/dataCity";
import { dataLocation } from "../../utils/dataLocation";
import Typed from "react-typed";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import TextField from "@mui/material/TextField";

const Banner = () => {
	const [contactForm, setContactForm] = useState(false);
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [category, setCategory] = useState("");
	const [city, setCity] = useState("");
	const [location, setLocation] = useState("");
	const [dateTime, setDateTime] = useState(new Date());
	const [error, setError] = useState(false);
	const [stateName, setStateName] = useState("");
	const [cityName, setCityName] = useState("");
	const [selectedCity, setSelectedCity] = useState([]);
	const [locationName, setLocationName] = useState("");
	const [selectedLocation, setSelectedLocation] = useState([]);
	const [categoryName, setCategoryName] = useState("");
	const [allBusinessDetail, setAllBusinessDetail] = useState([]);
	const [allStates, setAllStates] = useState([]);
	const [allCities, setAllCities] = useState([]);
	const [allLocations, setAllLocations] = useState([]);
	const [run, setRun] = useState(false);
	const [token, setToken] = useState("");
	const [userType, setUserType] = useState("");
	const { t } = useTranslation("home");

	let router = useRouter();
	let dispatch = useDispatch();

	// Contact Form Function
	const contactFormShow = () => {
		if (userType == "Customer") {
			setContactForm(!contactForm);
		} else {
			toast.error("Please login as a customer", {
				theme: "light",
				position: "top-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	useEffect(() => {
		if (typeof window != "undefined") {
			console.log("we are running the client");
			const token = localStorage.getItem("token");
			const user = JSON.parse(localStorage.getItem("user"));
			console.log(user);
			if (user != null && user != undefined) {
				setName(user.customerName);
				setMobile(user.mobile);
				setCity(user.city[0]);
				setLocation(user.location[0]);
				setUserType(user.userType);
			}
			setToken(token);
			let sArray = dataState.sort((a, b) => (a.Geo_Name < b.Geo_Name ? -1 : 1));
			console.log(sArray);
			setAllCities(dataCity.sort((a, b) => (a[0] < b[0] ? -1 : 1)));
			setAllLocations(dataLocation.sort((a, b) => (a[0] < b[0] ? -1 : 1)));
			const interval = localStorage.getItem("interval");
			console.log(interval);
			if (interval !== undefined || interval !== null) {
				clearInterval(interval);
				localStorage.removeItem("interval");
			}

			console.log("we are running server side");
		}
	}, []);

	// Appointment Form Function
	const appointmentFormSubmit = async (e) => {
		let s = new Date(dateTime).toLocaleString(undefined, {
			timeZone: "Asia/Kolkata",
		});
		console.log(s);
		e.preventDefault();
		const d = {
			name,
			mobile,
			category,
			city,
			location,
			appointmentDate: s,
		};
		console.log(d);
		if (
			name === "" ||
			mobile === "" ||
			category === "" ||
			city === "" ||
			location === "" ||
			dateTime === ""
		) {
			setError(true);
		} else {
			try {
				const { data } = await axios.post(
					`${process.env.DOMAIN_NAME}/api/customer/appointment-booking/${token}`,
					d
				);
				console.log(data);
				if (data.success) {
					toast.success(data.msg, {
						theme: "light",
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					setName("");
					setMobile("");
					setCategory("");
					setCity("");
					setLocation("");
					setDateTime("");
				} else {
					toast.error(data.msg, {
						theme: "light",
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	// Move to All Listings page
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(
			{ categoryName },
			{ stateName },
			{ cityName },
			{ locationName }
		);

		router.push({
			pathname: "/listings",
			query: { categoryName, stateName, cityName, locationName },
		});
	};

	// Category Change Function
	const handleChangeCategory = (e) => {
		console.log(e.target.value);
		setCategoryName(e.target.value);
	};

	// Location Change Function
	const handleChangeLocation = (e) => {
		const loc = e.target.value;
		setLocationName(loc.split(","));
	};

	// Filtering Locations by City
	const handleClickLocation = () => {
		console.log(cityName);
		if (cityName == "" || cityName[2] == undefined) {
			toast.error("Please Select City", {
				theme: "light",
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			console.log(allCities);
			console.log(cityName);
			let arr = [];
			allLocations.map((loc) => {
				// console.log(loc);
				if (loc[2] == cityName[2]) {
					arr.push(loc);
				}
			});
			setSelectedLocation(arr);
		}
	};

	// Filtering Cities by State
	const handleClickCity = () => {
		console.log(stateName);
		if (stateName == "" || stateName[1] == undefined) {
			toast.error("Please Select State", {
				theme: "light",
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			let arr = [];
			allCities.map((city) => {
				if (city[1] == stateName[1]) {
					arr.push(city);
				}
			});
			setSelectedCity(arr);
		}
	};

	// City Change Function
	const handleChangeCity = (e) => {
		const cty = e.target.value;
		console.log(cty.split(","));
		setCityName(cty.split(","));
	};

	// State Change Function
	const handleStateChange = (e) => {
		console.log(e.target.value);
		if (e.target.value == "") {
			setRun(!run);
		}
		const stateChange = e.target.value;
		console.log({ stateChange });
		setStateName(stateChange.split(","));
	};
	return (
		<>
			<div className="row mx-1">
				<div className="col-lg-1 col-sm-6 col-md-4">
					<section></section>
				</div>

				<div className="col-lg-10 col-sm-12 col-md-12">
					<section className="banner-wrapper-area-main-banner">
						<ToastContainer />
						<div className="mx-4">
							<div className="row">
								<div className="col-lg-8 col-sm-12 col-md-12 mt-5">
									<div className="banner-content banner-form mt-4">
										<h1
											className="banner-two-heading"
											style={{ height: "14vh" }}
										>
											<span className="typewrite">{t("Find Nearby")}</span>
											{/* <Typist>
										<span> </span>
										<Typist.Backspace count={0} loop delay={1000} />
										<span>{t("Pet Clinic")}</span>
										<Typist.Backspace count={20} delay={750} />
										<span> </span>
										<Typist.Backspace count={20} delay={150} />
										<span>{t("Pet Grooming")}</span>
										<Typist.Backspace count={25} delay={750} />
										<span> </span>
										<Typist.Backspace count={25} delay={150} />
										<span>{t("Pet Training")}</span>
										<Typist.Backspace count={22} delay={750} />
										<span> </span>
										<Typist.Backspace count={22} delay={150} />
										<span>{t("Pet Boarding")}</span>
									</Typist> */}
											<Typed
												style={{ color: "white" }}
												strings={[
													t("Pet Clinic"),
													t("Pet Grooming"),
													t("Pet Training"),
													t("Pet Boarding"),
												]}
												typeSpeed={100}
												backSpeed={50}
												loop
											/>
											<span className="wrap"></span>
										</h1>

										<form onSubmit={handleSubmit}>
											<div
												className="row m-0 align-items-center"
												style={{ padding: "6px" }}
											>
												<div class="col-lg-3 col-md-6 p-0">
													<div className="form-group category-select">
														<label className="category-icon">
															<i className="flaticon-pin"></i>
														</label>
														<select
															className="banner-form-select-two"
															value={stateName}
															onChange={handleStateChange}
														>
															<option>{t("States")}</option>
															{dataState.map((state) => {
																console.log(state, "from return");
																// if (state[1] != null) {
																return (
																	<option
																		value={[state.Geo_Name, state.id]}
																		key={state.id}
																	>
																		{console.log(state.Geo_Name)}
																		{state.Geo_Name != ""
																			? state.Geo_Name
																			: window.location.reload(false)}
																		{/* {state[0]} */}
																	</option>
																);
																// }
															})}
														</select>
													</div>
												</div>

												<div class="col-lg-3 col-md-6 p-0">
													<div className="form-group category-select">
														<label className="category-icon">
															<i className="flaticon-pin"></i>
														</label>
														<select
															className="banner-form-select-two"
															onFocus={handleClickCity}
															onChange={handleChangeCity}
														>
															<option>{t("City")}</option>
															{selectedCity.map((city) => {
																return (
																	<option
																		value={[city[0], city[1], city[2]]}
																		key={city[0]}
																	>
																		{city[0]}
																	</option>
																);
															})}
														</select>
													</div>
												</div>

												<div class="col-lg-3 col-md-6 p-0">
													<div className="form-group category-select">
														<label className="category-icon">
															<i className="flaticon-pin"></i>
														</label>
														<select
															className="banner-form-select-two"
															onFocus={handleClickLocation}
															onChange={handleChangeLocation}
														>
															<option>{t("Location")}</option>
															{selectedLocation.map((location) => {
																return (
																	<option
																		value={[
																			location[0],
																			location[1],
																			location[2],
																			location[3],
																		]}
																		key={location[0]}
																	>
																		{location[0]}
																	</option>
																);
															})}
														</select>
													</div>
												</div>

												<div class="col-lg-2 col-md-6 p-0">
													<div className="form-group category-select">
														<label className="category-icon">
															<i className="flaticon-search"></i>
														</label>
														<select
															className="banner-form-select-two"
															onChange={handleChangeCategory}
														>
															<option>Categories</option>
															<option value={"PetClinic"}>Pet Clinic</option>
															<option value={"PetGrooming"}>
																Pet Grooming
															</option>
															<option value={"PetBoarding"}>
																Pet Boarding
															</option>
															<option value={"PetTraining"}>
																Pet Training
															</option>
														</select>
													</div>
												</div>

												<div class="col-lg-1 col-md-6 p-0">
													<div className="submit-btn ">
														<button type="submit">
															{" "}
															<i className="flaticon-search"></i>
														</button>
													</div>
												</div>
											</div>
										</form>
									</div>
									<div style={{ display: "flex" }}>
										{/* <div className='search-btn mr-2'>
                                    <Link href='/listings' >
                                        <button>Search Now</button>
                                    </Link>
                                </div> */}
										<div className="search-btn">
											<button onClick={contactFormShow}>
												{t("Leave Your Search to Us")}
											</button>
										</div>
									</div>
								</div>

								{contactForm && (
									<div className="col-lg-4 col-sm-12 col-md-12">
										<div className="contact-form mt-5">
											<form id="contactForm" onSubmit={appointmentFormSubmit}>
												<div className="row">
													<div className="col-lg-12 col-md-6">
														<div className="form-group">
															<input
																type="text"
																className="dashbaord-category-select"
																placeholder="Name"
																style={{ border: "none" }}
																value={name}
																onChange={(e) => setName(e.target.value)}
															/>
															{error && name == "" ? (
																<span className="text-danger">
																	Please enter name
																</span>
															) : (
																<> </>
															)}
														</div>
													</div>

													<div className="col-lg-12 col-md-6">
														<div className="form-group">
															<input
																type="text"
																className="dashbaord-category-select"
																placeholder="Mobile"
																style={{ border: "none" }}
																value={mobile}
																onChange={(e) => setMobile(e.target.value)}
															/>
															{error && mobile == "" ? (
																<span className="text-danger">
																	Please enter mobile number
																</span>
															) : (
																<></>
															)}
														</div>
													</div>

													<div className="col-lg-12 col-md-6">
														<div className="form-group">
															<select
																className="dashbaord-category-select"
																placeholder="Select the state"
																style={{ border: "none" }}
																value={category}
																onChange={(e) => setCategory(e.target.value)}
															>
																<option>Categories</option>
																<option>Pet Clinic</option>
																<option>Pet Grooming</option>
																<option>Pet Boarding</option>
																<option>Pet Training</option>
																<option>Pet Food</option>
															</select>
															{error && category.length == "" ? (
																<span className="text-danger">
																	Please select category
																</span>
															) : (
																<></>
															)}
														</div>
													</div>

													<div className="col-lg-12 col-md-6">
														<div className="form-group">
															<input
																type="text"
																className="dashbaord-category-select"
																placeholder="City"
																style={{ border: "none" }}
																value={city}
																onChange={(e) => setCity(e.target.value)}
															/>
															{error && location == "" ? (
																<span className="text-danger">
																	Please enter city
																</span>
															) : (
																<></>
															)}
														</div>
													</div>

													<div className="col-lg-12 col-md-6">
														<div className="form-group">
															<input
																type="text"
																className="dashbaord-category-select"
																placeholder="Location"
																style={{ border: "none" }}
																value={location}
																onChange={(e) => setLocation(e.target.value)}
															/>
															{error && location == "" ? (
																<span className="text-danger">
																	Please enter location
																</span>
															) : (
																<></>
															)}
														</div>
													</div>

													{/* <div className="col-lg-6 col-md-6">
												<div className="form-group">
													<label>
														<i className="bx bx-menu-alt-left"></i> Appoinment:
													</label>
												</div>
											</div> */}

													<div className="col-lg-12 col-md-6">
														<div className="form-group">
															{/* <input
														type="datetime-local"
														className="form-control"
														placeholder="Appointment"
														value={dateTime}
														onChange={(e) => setDateTime(e.target.value)}
													/> */}
															<LocalizationProvider
																dateAdapter={AdapterDateFns}
															>
																<DesktopDateTimePicker
																	ampm={false}
																	renderInput={(props) => (
																		<TextField {...props} />
																	)}
																	label="Appointment Date"
																	value={dateTime}
																	onChange={(newValue) => {
																		setDateTime(newValue);
																	}}
																/>
															</LocalizationProvider>
															{error && dateTime == "" ? (
																<span className="text-danger">
																	Please select date
																</span>
															) : (
																<></>
															)}
														</div>
													</div>

													<div className="col-lg-12 col-md-12">
														<button type="submit" className="default-btn">
															Reach Us
														</button>
														<div
															id="msgSubmit"
															className="h3 text-center hidden"
														></div>
														<div className="clearfix"></div>
													</div>
												</div>
											</form>
										</div>
									</div>
								)}
							</div>
						</div>
					</section>
				</div>

				<div className="col-lg-1 col-sm-6 col-md-4">
					<section></section>
				</div>
			</div>
		</>
	);
};

export default Banner;
