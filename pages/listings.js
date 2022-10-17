import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
// import dynamic from "next/dynamic";
// const OwlCarousel = dynamic(import("react-owl-carousel3"));
import { FaClinicMedical } from "react-icons/fa";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import React from "react";
// const OwlCarousel = dynamic(import("react-owl-carousel3"));

//components
import NavbarTwo from "../components/_App/NavbarTwo";
import Footer from "../components/_App/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import Pagination from "../components/Pagination";
// import { useTranslation } from "next-i18next";

import { dataCity } from "../utils/dataCity";
import { dataLocation } from "../utils/dataLocation";
import { dataState } from "../utils/dataState";
import { useDispatch } from "react-redux";

const options = {
	loop: true,
	margin: 20,
	nav: false,
	mouseDrag: false,
	items: 1,
	dots: true,
	autoplay: true,
};

const GridListingsWithLeftSidebar = () => {
	const [categories, setCategories] = useState([]);
	const [business, setBusiness] = useState([]);

	const [allBusinessDetail, setAllBusinessDetail] = useState([]);
	const [allStates, setAllStates] = useState([]);
	const [allCities, setAllCities] = useState([]);
	const [allLocations, setAllLocations] = useState([]);
	const [run, setRun] = useState(false);
	const [stateName, setStateName] = useState("");
	const [cityName, setCityName] = useState("");
	const [selectedCity, setSelectedCity] = useState([]);
	const [locationName, setLocationName] = useState("");
	const [selectedLocation, setSelectedLocation] = useState([]);
	const [categoryName, setCategoryName] = useState("");
	const [loading, setLoading] = useState(false);
	const [businessInterval, setbusinessInterval] = useState(true);
	const [filterBusinessInterval, setFilterBusinessInterval] = useState(true);
	const [categoryFilterInterval, setCategoryFilterInterval] = useState(true);

	let router = useRouter();
	// const { t } = useTranslation("home");

	let dispatch = useDispatch();

	// Pagination

	let interval;
	let filterInterval;
	let categoryInterval;

	let currentPage = 0;

	useEffect(() => {
		if (typeof window != "undefined") {
			dataState.sort((a, b) => (a.Geo_Name < b.Geo_Name ? -1 : 1));
			setAllCities(dataCity.sort((a, b) => (a[0] < b[0] ? -1 : 1)));
			setAllLocations(dataLocation.sort((a, b) => (a[0] < b[0] ? -1 : 1)));
			let categoryFilter = router.query.categoryName;
			let stateFilter = router.query.stateName;
			let cityFilter = router.query.cityName;
			let locationFilter = router.query.locationName;

			interval = setInterval(() => {
				currentPage++;
				businessFilteration(
					currentPage,
					stateFilter,
					cityFilter,
					locationFilter,
					categoryFilter
				);
			}, 100);
			setbusinessInterval(interval);
			localStorage.setItem("interval", interval);
		} else {
			console.log("we area running server side");
		}
	}, []);

	// All Business filter
	const businessFilteration = (
		pageNo,
		stateFilter,
		cityFilter,
		locationFilter,
		categoryFilter
	) => {
		console.log({ interval });

		if (
			(categoryFilter == "" || categoryFilter == undefined) &&
			(stateFilter == "" || stateFilter == undefined) &&
			(cityFilter == "" || cityFilter == undefined) &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			getBusinessWithoutCategory(pageNo);
		}

		// Filter All Business by selected category
		if (
			categoryFilter != "" &&
			categoryFilter != undefined &&
			(stateFilter == "" || stateFilter == undefined) &&
			(cityFilter == "" || cityFilter == undefined) &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			console.log("business");
			getBusinessWithCategory(pageNo, categoryFilter);
		}

		// Filter All Business by selected state
		if (
			(categoryFilter == "" || categoryFilter == undefined) &&
			stateFilter != "" &&
			stateFilter != undefined &&
			(cityFilter == "" || cityFilter == undefined) &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			console.log("state");
			console.log(stateFilter);
			getBusinessWithoutCategory(pageNo, "state", stateFilter);
		}

		// Filter All business by selected city
		if (
			(categoryFilter == "" || categoryFilter == undefined) &&
			(stateFilter == "" || stateFilter == undefined) &&
			cityFilter != "" &&
			cityFilter != undefined &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			console.log("city");
			getBusinessWithoutCategory(pageNo, "city", stateFilter, cityFilter);
		}

		// Filter all business by selected location
		if (
			(categoryFilter == "" || categoryFilter == undefined) &&
			(stateFilter == "" || stateFilter == undefined) &&
			cityFilter != "" &&
			cityFilter != undefined &&
			locationFilter != "" &&
			locationFilter != undefined
		) {
			console.log(locationFilter[3]);
			getBusinessWithoutCategory(
				pageNo,
				"location",
				stateFilter,
				cityFilter,
				locationFilter
			);
		}

		// Filter all business by category and state
		if (
			categoryFilter != "" &&
			categoryFilter != undefined &&
			stateFilter != "" &&
			stateFilter != undefined &&
			(cityFilter == "" || cityFilter == undefined) &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			console.log("state");
			getBusinessWithCategory(pageNo, categoryFilter, "state", stateFilter);
		}

		// Filter all business by category and city
		if (
			categoryFilter != "" &&
			categoryFilter != undefined &&
			(stateFilter == "" || stateFilter == undefined) &&
			cityFilter != "" &&
			cityFilter != undefined &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			console.log("state");
			getBusinessWithCategory(
				pageNo,
				categoryFilter,
				"city",
				stateFilter,
				cityFilter
			);
		}

		// Filter all business by category and city
		if (
			categoryFilter != "" &&
			categoryFilter != undefined &&
			(stateFilter == "" || stateFilter == undefined) &&
			cityFilter != "" &&
			cityFilter != undefined &&
			locationFilter != "" &&
			locationFilter != undefined
		) {
			console.log("state");
			getBusinessWithCategory(
				pageNo,
				categoryFilter,
				"location",
				stateFilter,
				cityFilter,
				locationFilter
			);
		}
	};

	// State Change Function

	const handleStateChange = (e) => {
		console.log("changed");
		console.log("before", { interval });
		clearInterval(businessInterval);
		clearInterval(filterBusinessInterval);
		clearInterval(categoryFilterInterval);

		console.log("after", { interval });
		const stateChange = e.target.value;
		console.log({ stateChange });
		setStateName(stateChange.split(","));
	};

	// City Change Function

	const handleChangeCity = (e) => {
		clearInterval(businessInterval);
		clearInterval(filterBusinessInterval);
		clearInterval(categoryFilterInterval);
		const cty = e.target.value;
		console.log(cty.split(","));
		setCityName(cty.split(","));
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
			console.log(allCities);
			console.log(stateName[1]);
			let arr = [];
			allCities.map((city) => {
				if (city[1] == stateName[1]) {
					arr.push(city);
				}
			});

			console.log(arr);
			setSelectedCity(arr);
		}
	};

	// Location Change Function
	const handleChangeLocation = (e) => {
		clearInterval(businessInterval);
		clearInterval(filterBusinessInterval);
		clearInterval(categoryFilterInterval);
		const loc = e.target.value;
		setLocationName(loc.split(","));
	};

	// Filtering Cities by State

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
				console.log(loc);
				if (loc[2] == cityName[2]) {
					arr.push(loc);
				}
			});

			console.log(arr);
			setSelectedLocation(arr);
		}
	};

	// Category Change Function

	const handleChangeCategory = (e) => {
		clearInterval(businessInterval);
		clearInterval(filterBusinessInterval);
		clearInterval(categoryFilterInterval);
		console.log(e.target.value);
		setCategoryName(e.target.value);
	};

	const filterListings = (
		pageNo,
		stateFilter,
		cityFilter,
		locationFilter,
		categoryFilter
	) => {
		if (
			(categoryFilter == "" || categoryFilter == undefined) &&
			(stateFilter == "" || stateFilter == undefined) &&
			(cityFilter == "" || cityFilter == undefined) &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			getBusinessWithoutCategory(pageNo);
		}

		// Filter All Business by selected category
		if (
			categoryFilter != "" &&
			categoryFilter != undefined &&
			(stateFilter == "" || stateFilter == undefined) &&
			(cityFilter == "" || cityFilter == undefined) &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			console.log("business");
			getBusinessWithCategory(pageNo, categoryFilter);
		}

		// Filter All Business by selected state
		if (
			(categoryFilter == "" || categoryFilter == undefined) &&
			(stateFilter == "" || stateFilter == undefined) &&
			(cityFilter == "" || cityFilter == undefined) &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			console.log("state");
			console.log(stateFilter);
			getBusinessWithoutCategory(pageNo, "state", stateFilter);
		}

		// Filter All business by selected city
		if (
			(categoryFilter == "" || categoryFilter == undefined) &&
			(stateFilter == "" || stateFilter == undefined) &&
			cityFilter != "" &&
			cityFilter != undefined &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			console.log("city");
			getBusinessWithoutCategory(pageNo, "city", stateFilter, cityFilter);
		}

		// Filter all business by selected location
		if (
			(categoryFilter == "" || categoryFilter == undefined) &&
			(stateFilter == "" || stateFilter == undefined) &&
			cityFilter != "" &&
			cityFilter != undefined &&
			locationFilter != "" &&
			locationFilter != undefined
		) {
			console.log(locationFilter[3]);
			getBusinessWithoutCategory(
				pageNo,
				"location",
				stateFilter,
				cityFilter,
				locationFilter
			);
		}

		// Filter all business by category and state
		if (
			categoryFilter != "" &&
			categoryFilter != undefined &&
			stateFilter != "" &&
			stateFilter != undefined &&
			(cityFilter == "" || cityFilter == undefined) &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			console.log("state");
			getBusinessWithCategory(pageNo, categoryFilter, "state", stateFilter);
		}

		// Filter all business by category and city
		if (
			categoryFilter != "" &&
			categoryFilter != undefined &&
			(stateFilter == "" || stateFilter == undefined) &&
			cityFilter != "" &&
			cityFilter != undefined &&
			(locationFilter == "" || locationFilter == undefined)
		) {
			console.log("state");
			getBusinessWithCategory(
				pageNo,
				categoryFilter,
				"city",
				stateFilter,
				cityFilter
			);
		}

		// Filter all business by category and city
		if (
			categoryFilter != "" &&
			categoryFilter != undefined &&
			(stateFilter == "" || stateFilter == undefined) &&
			cityFilter != "" &&
			cityFilter != undefined &&
			locationFilter != "" &&
			locationFilter != undefined
		) {
			console.log("state");
			getBusinessWithCategory(
				pageNo,
				categoryFilter,
				"location",
				stateFilter,
				cityFilter,
				locationFilter
			);
		}
	};

	// Filter Listings
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(false);
		console.log("filter");
		clearInterval(businessInterval);
		clearInterval(filterBusinessInterval);
		clearInterval(categoryFilterInterval);
		console.log({ interval });
		setBusiness([]);
		let categoryFilter = categoryName;
		let stateFilter = stateName;
		let cityFilter = cityName;
		let locationFilter = locationName;
		console.log({ categoryFilter });
		console.log({ stateFilter });
		console.log({ cityFilter });
		console.log({ locationFilter });
		// let pageNo = currentPage + 1
		currentPage = 0;

		filterInterval = setInterval(() => {
			currentPage++;
			filterListings(
				currentPage,
				stateFilter,
				cityFilter,
				locationFilter,
				categoryFilter
			);
		}, 100);
		setFilterBusinessInterval(filterInterval);
		localStorage.setItem("interval", filterInterval);
	};

	// Get Business without category function
	const getBusinessWithoutCategory = async (
		pageNo,
		type,
		state,
		city,
		location
	) => {
		console.log(pageNo);
		try {
			let arr = [];
			console.log(currentPage);
			if (type == "" || type == undefined) {
				const { data } = await axios.get(
					`${process.env.DOMAIN_NAME}/api/business/get-profiles-from-all-categories/${pageNo}`
				);
				if (data.success) {
					setLoading(false);
					arr = data.profilesArray;
				} else {
					setLoading(true);
					clearInterval(interval);
					clearInterval(filterInterval);
					console.log("success false");
				}
			} else if (type === "state") {
				console.log(state);
				const { data } = await axios.get(
					`${process.env.DOMAIN_NAME}/api/business/get-profiles-by-state/${state[0]}/${state[1]}/${pageNo}`
				);
				if (data.success) {
					setLoading(false);
					arr = data.profilesArray;
				} else {
					setLoading(true);
					console.log({ interval }, { filterInterval });
					clearInterval(interval);
					clearInterval(filterInterval);
					console.log("success false");
				}
			} else if (type === "city") {
				console.log(city);
				const { data } = await axios.get(
					`${process.env.DOMAIN_NAME}/api/business/get-profiles-by-city/${city[0]}/${city[1]}/${city[2]}/${pageNo}`
				);
				if (data.success) {
					setLoading(false);
					arr = data.profilesArray;
				} else {
					setLoading(true);
					clearInterval(interval);
					clearInterval(filterInterval);
					console.log("success false");
				}
			} else if (type === "location") {
				const { data } = await axios.get(
					`${process.env.DOMAIN_NAME}/api/business/get-profiles-by-location/${location[0]}/${location[1]}/${location[2]}/${location[3]}/${pageNo}`
				);
				if (data.success) {
					setLoading(false);
					arr = data.profilesArray;
				} else {
					setLoading(true);
					clearInterval(interval);
					clearInterval(filterInterval);
					console.log("success false");
				}
			} else {
				console.log("running");
				setLoading(false);
				arr = data.profilesArray;
			}

			setBusiness((businessData) => [...businessData, ...arr]);
		} catch (error) {
			console.log(error);
		}
	};

	// Get Business with category function
	const getBusinessWithCategory = async (
		pageNo,
		category,
		type,
		state,
		city,
		location
	) => {
		let arr = [];
		if (type == "" || type == undefined) {
			const { data } = await axios.get(
				`${process.env.DOMAIN_NAME}/api/business/get-profiles-from-unique-category/${category}/${pageNo}`
			);
			if (data.success) {
				setLoading(false);
				arr = data.profilesArray;
			} else {
				setLoading(true);
				clearInterval(interval);
				clearInterval(filterInterval);
				console.log("success false");
			}
		} else if (type === "state") {
			console.log(state);
			const { data } = await axios.get(
				`${process.env.DOMAIN_NAME}/api/business/get-profiles-by-state-category/${state[0]}/${state[1]}/${category}/${pageNo}`
			);
			if (data.success) {
				setLoading(false);
				arr = data.profilesArray;
			} else {
				setLoading(true);
				clearInterval(interval);
				clearInterval(filterInterval);
				console.log("success false");
			}
		} else if (type === "city") {
			console.log(city);
			const { data } = await axios.get(
				`${process.env.DOMAIN_NAME}/api/business/get-profiles-by-city-category/${city[0]}/${city[1]}/${city[2]}/${category}/${pageNo}`
			);
			if (data.success) {
				setLoading(false);
				arr = data.profilesArray;
			} else {
				setLoading(true);
				clearInterval(interval);
				clearInterval(filterInterval);
				console.log("success false");
			}
		} else if (type === "location") {
			const { data } = await axios.get(
				`${process.env.DOMAIN_NAME}/api/business/get-profiles-by-location-category/${location[0]}/${location[1]}/${location[2]}/${location[3]}/${category}/${pageNo}`
			);
			if (data.success) {
				setLoading(false);
				arr = data.profilesArray;
			} else {
				setLoading(true);
				clearInterval(interval);
				clearInterval(filterInterval);
				console.log("success false");
			}
		} else {
			console.log("running");
			setLoading(false);
			arr = data.profilesArray;
		}

		setBusiness((businessData) => [...businessData, ...arr]);
	};

	// Categories Filter Change
	const categoriesChange = (e) => {
		clearInterval(businessInterval);
		clearInterval(filterBusinessInterval);
		clearInterval(categoryFilterInterval);
		console.log(e.target.value);
		const available = categories.find((category) => category == e.target.value);
		console.log(categories);
		console.log(available);
		if (!available) setCategories((cate) => [...cate, e.target.value]);
		if (available) {
			const filtered = categories.filter((cate) => cate !== e.target.value);
			setCategories(filtered);
		}
	};

	const callAllCategories = async (currentPage) => {
		let arr = [];
		try {
			console.log(currentPage);
			const { data } = await axios.get(
				`${process.env.DOMAIN_NAME}/api/business/get-profiles-from-all-categories/${currentPage}`
			);
			console.log(data);
			if (data.success) {
				setLoading(false);
				arr = data.profilesArray;
				setBusiness((businessData) => [...businessData, ...arr]);
			} else {
				setLoading(true);
				clearInterval(categoryInterval);
			}
		} catch (error) {
			return console.log(error);
		}
	};

	const callUniqueCategory = async (category, currentPage) => {
		let arr = [];
		try {
			console.log(currentPage);
			console.log(category);
			const { data } = await axios.get(
				`${process.env.DOMAIN_NAME}/api/business/get-profiles-from-unique-category/${category}/${currentPage}`
			);
			console.log(data);
			if (data.success) {
				setLoading(false);
				arr = data.profilesArray;
				setBusiness((businessData) => [...businessData, ...arr]);
			} else {
				setLoading(true);
				clearInterval(categoryInterval);
			}
		} catch (error) {
			return console.log(error);
		}
	};

	// Filter Business By Categories Function
	const getBusinessByCategories = async (e) => {
		e.preventDefault();
		setBusiness([]);
		clearInterval(businessInterval);
		clearInterval(filterBusinessInterval);
		console.log(categories);
		if (categories.length < 1) {
			categoryInterval = setInterval(() => {
				currentPage++;
				callAllCategories(currentPage);
			}, 100);
			setCategoryFilterInterval(categoryInterval);
			localStorage.setItem("interval", categoryInterval);
		} else {
			categoryInterval = setInterval(() => {
				currentPage++;
				for (var i = 0; i < categories.length; i++) {
					console.log(categories[i]);
					let cat = categories[i];

					console.log(cat);
					callUniqueCategory(cat, currentPage);
				}
			}, 100);
			setCategoryFilterInterval(categoryInterval);
			localStorage.setItem("interval", categoryInterval);
		}
	};

	// Move to Single Listing Page
	const gotoSingleProfilePage = (
		e,
		state,
		city,
		location,
		businessName,
		category,
		id
	) => {
		e.preventDefault();
		console.log(id, "id");
		router.push({
			pathname: "single-listings",
			query: { state, city, location, businessName, category, id },
		});
	};

	return (
		<>
			<NavbarTwo />

			{/* <div className="owl-theme">
				<OwlCarousel {...options}>
					<div>
						<img src="/images/slider1.jpg" alt="image" />
					</div>
					<div>
						<img src="/images/slider2.jpg" alt="image" />
					</div>
					<div>
						<img src="/images/slider3.jpg" alt="image" />
					</div>
					<div>
						<img src="/images/slider4.jpg" alt="image" />
					</div>
					<div>
						<img src="/images/slider2.jpg" alt="image" />
					</div>
				</OwlCarousel>
			</div> */}

			{/* Find popular section */}
			<div className="page-title-bg">
				<div className="container">
					<h2>Find Popular Services</h2>
					<form
						onSubmit={handleSubmit}
						style={{ maxWidth: "1080px !important", paddingRight: 0 }}
					>
						<div className="row m-0 align-items-center py-2">
							<div class="col-lg-3 col-md-6 py-1">
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
										<option value={"PetGrooming"}>Pet Grooming</option>
										<option value={"PetBoarding"}>Pet Boarding</option>
										<option value={"PetTraining"}>Pet Training</option>
										{/* <option>Pet Food</option> */}
									</select>
								</div>
							</div>

							{/* <div class="col-lg-3 col-md-6 py-1">
								<div className="form-group category-select">
									<label className="category-icon">
										<i className="flaticon-pin"></i>
									</label>
									<select
										className="banner-form-select-two"
										value={stateName}
										onChange={handleStateChange}
									>
										<option>State</option>

										{dataState.map((state) => {
											if (state.id != null) {
												return (
													<option
														value={[state.Geo_Name, state.id]}
														key={state.Geo_Name}
													>
														{state.Geo_Name}
													</option>
												);
											}
										})}
									</select>
								</div>
							</div> */}

							<div class="col-lg-4 col-md-6 py-1">
								<div className="form-group category-select">
									<label className="category-icon">
										<i className="flaticon-pin"></i>
									</label>
									<select
										className="banner-form-select-two"
										onFocus={handleClickCity}
										onChange={handleChangeCity}
									>
										<option>
											{cityName.length > 0 ? cityName[0] : "City"}
										</option>
										{dataCity.map((city) => {
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

							<div class="col-lg-4 col-md-6 py-1">
								<div className="form-group category-select">
									<label className="category-icon">
										<i className="flaticon-pin"></i>
									</label>
									<select
										className="banner-form-select-two"
										onFocus={handleClickLocation}
										onChange={handleChangeLocation}
									>
										<option>
											{locationName.length > 0 ? locationName[0] : "Location"}
										</option>
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
			</div>

			<section className="listings-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-12">
							<aside className="listings-widget-area">
								<section className="widget widget_categories">
									<h3 className="widget-title">Categories</h3>
									<form onSubmit={getBusinessByCategories}>
										<ul>
											<li>
												<input
													id="categories1"
													type="checkbox"
													value="PetClinic"
													onChange={categoriesChange}
												/>
												<label htmlFor="categories1">Clinic</label>
											</li>
											<li>
												<input
													id="categories2"
													type="checkbox"
													value="PetGrooming"
													onChange={categoriesChange}
												/>
												<label htmlFor="categories2">Grooming</label>
											</li>
											<li>
												<input
													id="categories3"
													type="checkbox"
													value="PetBoarding"
													onChange={categoriesChange}
												/>
												<label htmlFor="categories3">Boarding</label>
											</li>
											<li>
												<input
													id="categories4"
													type="checkbox"
													value="PetTraining"
													onChange={categoriesChange}
												/>
												<label htmlFor="categories4">Training</label>
											</li>
											<li>
												<button type="submit" className="btn-filter">
													Filter
												</button>
											</li>
										</ul>
									</form>
								</section>

								{/* <section className="widget widget_features">
                  <h3 className="widget-title">Features</h3>

                  <ul>
                    <li>
                      <input id="categories1" type="checkbox" />
                      <label htmlFor="categories1">Restaurant</label>
                    </li>
                    <li>
                      <input id="categories2" type="checkbox" />
                      <label htmlFor="categories2">Hotel</label>
                    </li>
                    <li>
                      <input id="categories3" type="checkbox" />
                      <label htmlFor="categories3">Beauty & Spa</label>
                    </li>
                    <li>
                      <input id="categories4" type="checkbox" />
                      <label htmlFor="categories4">Fitness</label>
                    </li>
                    <li>
                      <input id="categories5" type="checkbox" />
                      <label htmlFor="categories5">Shopping</label>
                    </li>
                    <li className="hide">
                      <input id="categories6" type="checkbox" />
                      <label htmlFor="categories6">Hospital</label>
                    </li>
                    <li className="hide">
                      <input id="categories7" type="checkbox" />
                      <label htmlFor="categories7">Events</label>
                    </li>
                    <li className="hide">
                      <input id="categories8" type="checkbox" />
                      <label htmlFor="categories8">Clothing</label>
                    </li>
                    <li className="see-all-btn">
                      <span>See All</span>
                    </li>
                  </ul>
                </section> */}

								{/* <section className="widget widget_distance">
                  <h3 className="widget-title">Distance</h3>

                  <ul>
                    <li>
                      <input id="distance1" type="checkbox" />
                      <label htmlFor="distance1">Driving (5 mi.)</label>
                    </li>
                    <li>
                      <input id="distance2" type="checkbox" />
                      <label htmlFor="distance2">Walking (1 mi.)</label>
                    </li>
                    <li>
                      <input id="distance3" type="checkbox" />
                      <label htmlFor="distance3">Biking (2 mi.)</label>
                    </li>
                    <li>
                      <input id="distance4" type="checkbox" />
                      <label htmlFor="distance4">Within 4 blocks</label>
                    </li>
                    <li>
                      <input id="distance5" type="checkbox" />
                      <label htmlFor="distance5">Bicycle (6 mi.)</label>
                    </li>
                    <li className="hide">
                      <input id="distance6" type="checkbox" />
                      <label htmlFor="distance6">Driving (10 mi.)</label>
                    </li>
                    <li className="hide">
                      <input id="distance7" type="checkbox" />
                      <label htmlFor="distance7">Walking (11 mi.)</label>
                    </li>
                    <li className="see-all-btn">
                      <span>See All</span>
                    </li>
                  </ul>
                </section> */}
							</aside>
						</div>

						<div className="col-lg-8 col-md-12">
							{/* <div className="listings-grid-sorting row align-items-center">
                <div className="col-lg-5 col-md-6 result-count">
                  <p>
                    We found <span className="count">9</span> listings available
                    for you
                  </p>
                </div>

                <div className="col-lg-7 col-md-6 ordering">
                  <div className="d-flex justify-content-end">
                    <div className="select-box">
                      <label>Sort By:</label>
                      <select className="blog-select">
                        <option>Recommended</option>
                        <option>Default</option>
                        <option>Popularity</option>
                        <option>Latest</option>
                        <option>Price: low to high</option>
                        <option>Price: high to low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div> */}

							<div className="row">
								{/* {console.log(business)} */}
								{business.map((bus) => {
									//   console.log(bus);
									let profileImg = `${process.env.DOMAIN_NAME}/api/business/get-photos/${bus.profileImage}`;
									return (
										<div
											className="col-xl-6 col-lg-6 col-md-6"
											key={bus._id}
											loading="lazy"
										>
											<div
												className="single-listings-box"
												style={{ height: "92%" }}
											>
												<div
													className="listings-image"
													onClick={(e) =>
														gotoSingleProfilePage(
															e,
															bus.state[0],
															bus.city[0],
															bus.location[0],
															bus.businessName,
															bus.category,
															bus._id
														)
													}
												>
													<img
														src={profileImg}
														alt="image"
														loading="lazy"
														className="img-fixed"
													/>
													{/* <Link href="/single-listings">
                            <a className="link-btn"></a>
                          </Link> */}
													{/* <a href="#" className="bookmark-save">
                            <i className="flaticon-heart"></i>
                          </a>
                          <a href="#" className="category">
                            <i className="flaticon-cooking"></i>
                          </a> */}
												</div>

												<div className="listings-content">
													<ul className="listings-meta">
														<li>
															<a href="#">
																<i>
																	<FaClinicMedical />
																</i>
																{bus.category}
															</a>
														</li>
														<li>
															<a href="#">
																<i className="flaticon-pin"></i>{" "}
																{bus.location[0]}, {bus.city[0]}
															</a>
														</li>
													</ul>
													<h3
														onClick={(e) =>
															gotoSingleProfilePage(
																e,
																bus.state[0],
																bus.city[0],
																bus.location[0],
																bus.businessName,
																bus.category,
																bus._id
															)
														}
													>
														{/* <Link href="/single-listings"> */}
														{bus.businessName}
														{/* </Link> */}
													</h3>
													{/* <span className="status">
                            <i className="flaticon-save"></i> Open Now
                          </span> */}
													{/* <div className="d-flex align-items-center justify-content-between">
                            <div className="rating">
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <span className="count">(45)</span>
                            </div>
                            <div className="price">
                              Start From <span>$150</span>
                            </div>
                          </div> */}
												</div>
											</div>
										</div>
									);
								})}
								{loading && business.length < 1 && (
									<div className="d-flex justify-content-center align-items-center w-100">
										<h1>Data Not Found</h1>
									</div>
								)}
								{/* <Pagination
									className="pagination-bar"
									currentPage={currentPage}
									// totalCount={business.length}
									totalCount={pageCount}
									pageSize={PageSize}
									onPageChange={(page) => pageChange(page)}
								/> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer bgColor="bg-f5f5f5" />
		</>
	);
};

export default GridListingsWithLeftSidebar;
