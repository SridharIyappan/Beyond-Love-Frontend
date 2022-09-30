import * as React from "react";
import Link from "next/link";
import NavbarThree from "../../../components/_App/NavbarThree";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { states } from "../../../utils/state";
import { cities } from "../../../utils/cities";
import { locations } from "../../../utils/location";
import { useDropzone } from "react-dropzone";

const PetTraining = () => {
	const [email, setEmail] = useState("");
	const [businessName, setBusinessName] = useState("");
	const [mobile, setMobile] = useState("");
	const [about, setAbout] = useState("");
	const [facebookUrl, setFacebookUrl] = useState("");
	const [instagramUrl, setInstagramUrl] = useState("");
	const [twitterUrl, setTwitterUrl] = useState("");
	const [pincode, setPincode] = useState("");
	const [doorNumber, setDoorNumber] = useState("");
	const [street, setStreet] = useState("");
	const [landmark, setLandmark] = useState("");
	const [state, setState] = useState([]);
	const [city, setCity] = useState([]);
	const [cityFilter, setCityFilter] = useState([]);
	const [locationFilter, setLocationFilter] = useState([]);
	const [location, setLocation] = useState([]);
	const [established, setestablished] = useState("");
	const [token, setToken] = useState("");
	const [error, setError] = useState(false);
	const [files, setFiles] = useState([]);
	const [apiprofileImg, setApiProfileImg] = useState();
	const [apiCoverImg, setApiCoverImg] = useState();
	const [categoriesProfile, setCategoryProfile] = useState("");
	const [businessId, setBusinessid] = useState("");
	const [profile, setProfile] = useState();
	const [cover, setCover] = useState();
	const [userDetail, setUserDetail] = useState("");
	const [service, setService] = useState("");
	const [serviceCost, setServiceCost] = useState("");
	const [duration, setDuration] = useState("");
	const [id, setId] = useState(1);
	const [pack, setPack] = useState([]);
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [timing, setTiming] = useState([]);
	const [bookingSlot, setBookingSlot] = useState(1);

	// const handleServiceAdd = () => {
	//   setServiceList([...serviceList, { service: "" }]);
	// }

	// const handleServiceRemove = (index) => {
	//   const list = [...serviceList];
	//   list.splice(index, 1)
	//   setServiceList(list)
	// }

	// const handleServiceChange = (e, index) => {
	//   const { name, value } = e.target;
	//   const list = [...serviceList];
	//   list[index][name] = value;
	//   setServiceList(list);
	// }

	useEffect(() => {
		if (typeof window != "undefined") {
			console.log("we are running on the client");
			let token = localStorage.getItem("token");
			let user = JSON.parse(localStorage.getItem("user"));
			setUserDetail(user);
			setCategoryProfile(user.category);
			let id = user._id;
			setBusinessid(id);
			getBusinessProfile(id);
			setToken(token);
			states.sort((a, b) =>
				a.Geo_Name.toLowerCase() < b.Geo_Name.toLocaleLowerCase() ? -1 : 1
			);
		} else {
			console.log("we are running on the server");
		}
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const thumbs = files.map((file) => (
		<div key={file.name} className="drop-gallery-thumb">
			<img src={file.preview} />
		</div>
	));

	const getBusinessProfile = async (id) => {
		try {
			const { data } = await axios.get(
				`${process.env.DOMAIN_NAME}/api/business/get-profile/PetBoarding/${id}`
			);
			console.log(data);
			setEmail(data.business.email);
			setMobile(data.business.mobile);
			setBusinessName(data.business.businessName);
			setFacebookUrl(data.business.facebookUrl);
			setInstagramUrl(data.business.instagramUrl);
			setTwitterUrl(data.business.twitterUrl);
			setLandmark(data.business.landmark);
			setPincode(data.business.pincode);
			setestablished(data.business.establishedYear);
			setDoorNumber(data.business.address[0]);
			setStreet(data.business.address[1]);
			setState(data.business.state);
			setCity(data.business.city);
			setLocation(data.business.location);
			setAbout(data.business.description);
			setTiming(data.business.timeSlots);
			setBookingSlot(data.business.bookingPerSlot);
			setPack(data.business.packages);
			setProfile(
				`${process.env.DOMAIN_NAME}/api/business/get-photos/${data.business.profileImage}`
			);
			setCover(
				`${process.env.DOMAIN_NAME}/api/business/get-photos/${data.business.coverImage}`
			);
		} catch (error) {
			console.log(error);
		}
	};

	const addProfileFormSubmit = async (e) => {
		e.preventDefault();
		const d = {
			email,
			businessName,
			mobile,
			description: about,
			facebookUrl,
			instagramUrl,
			twitterUrl,
			pincode,
			address: [doorNumber, street],
			landmark: landmark,
			state,
			city,
			location,
			establishedYear: established,
			timeSlots: timing,
			bookingPerSlot: bookingSlot,
			packages: pack,
		};
		console.log(d);
		if (
			email == "" ||
			(email == undefined && businessName == "") ||
			(businessName == undefined && mobile == "") ||
			(mobile == undefined && pincode == "") ||
			(pincode == undefined && state == "") ||
			(state == undefined && city == "") ||
			(city == undefined && location == "") ||
			(location == undefined && street == "") ||
			(doorNumber == undefined && doorNumber == "") ||
			(street == undefined && street == "")
		) {
			setError(true);
		} else {
			try {
				const { data } = await axios.put(
					`${process.env.DOMAIN_NAME}/api/business/update-profile/PetBoarding/${token}`,
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

	const handleClickState = (e) => {
		const stay = e.target.value;
		setState(stay.split(","));
	};

	const handleOnChangeCity = (e) => {
		const cty = e.target.value;
		setCity(cty.split(","));
	};

	const handleOnChangeLocation = (e) => {
		console.log(e.target.value);
		const loca = e.target.value;
		setLocation(loca.split(","));
	};

	const handleClickCity = () => {
		if (state == "") {
			toast.error("Plese select state", {
				theme: "light",
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
			});
		} else {
			const filterCity = cities.filter((citi) => citi.Geo_Head == state[1]);
			setCityFilter(filterCity);
		}
	};

	const handleClickLocation = () => {
		if (city == "") {
			toast.error("Plese select city", {
				theme: "light",
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
			});
		} else {
			const filterLocation = locations.filter(
				(loca) => loca.Geo_City == city[2]
			);
			setLocationFilter(filterLocation);
		}
	};

	const uploadProfilePhotos = (e) => {
		setProfile(URL.createObjectURL(e.target.files[0]));
		setApiProfileImg(e.target.files[0]);
	};

	const uploadCoverPhotos = (e) => {
		setCover(URL.createObjectURL(e.target.files[0]));
		setApiCoverImg(e.target.files[0]);
	};

	const profilePicSubmit = async (e) => {
		e.preventDefault();
		console.log(apiprofileImg);
		if (apiprofileImg == undefined) {
			console.log("error");
			return toast.error("Please Select Image", {
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
		const formData = new FormData();
		formData.append("file", apiprofileImg);
		try {
			const { data } = await axios.post(
				`${process.env.DOMAIN_NAME}/api/business/update-profile-cover-picture/${businessId}/${categoriesProfile}/profile`,
				formData
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
	};

	const coverPicSubmit = async (e) => {
		e.preventDefault();
		if (apiCoverImg == undefined) {
			console.log("error");
			return toast.error("Please Select Image", {
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
		const formData = new FormData();
		formData.append("file", apiCoverImg);
		try {
			const { data } = await axios.post(
				`${process.env.DOMAIN_NAME}/api/business/update-profile-cover-picture/${businessId}/${categoriesProfile}/cover`,
				formData
			);
			console.log(data);
			console.log(data.bussinessCoverImage);
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
	};

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handlePackage = () => {
		setPack((pack) => [...pack, { id: id, service, serviceCost, duration }]);
		console.log(pack);
		setService("");
		setServiceCost("");
		setDuration("");
	};

	const createPackage = () => {
		if (service !== "" && serviceCost !== "" && duration !== "") {
			setId((id) => id + 1);
			handlePackage();
		}
	};

	const removePackage = (name) => {
		const removeData = pack.filter((rem) => rem.service !== name);
		setPack(removeData);
	};

	const createTime = () => {
		if (
			startTime != "" &&
			endTime != "" &&
			startTime != null &&
			endTime != null
		) {
			setTiming((timing) => [
				...timing,
				{
					id: timing.length,
					timeSlot: `${startTime} - ${endTime}`,
					startTime,
					endTime,
				},
			]);
			setStartTime("");
			setEndTime("");
		}
	};

	const removeTimeSlot = (time) => {
		const removeTime = timing.filter((tim) => tim.startTime !== time);
		setTiming(removeTime);
	};

	return (
		<>
			<DashboardNavbar />
			<div className="main-content d-flex flex-column">
				<NavbarThree />
				<div className="row">
					<ToastContainer />
					<div className="col-lg-12 col-md-12">
						<div className="my-profile-box">
							<h3>Pet Boarding</h3>
							<div className="row mt-5">
								<div className="col-lg-6 col-md-12">
									<form onSubmit={profilePicSubmit}>
										<div className="col-xl-6 col-lg-6 col-md-12">
											<div className="form-group profile-box">
												{userDetail.profileImage !== undefined && (
													<img
														src={profile}
														alt="imag"
														className="profile-image"
													/>
												)}
												<input
													type="file"
													name="file"
													id="file"
													className="inputfile p-5 w-10 file-upload input-size opacity-input"
													onChange={uploadProfilePhotos}
												></input>
											</div>
											<div className="mt-5">
												<button type="submit">
													<i className="bx bx-upload"></i> Upload Profile Photo
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-lg-6 col-md-12">
									<form onSubmit={coverPicSubmit}>
										<div className="col-xl-6 col-lg-6 col-md-12">
											<div className="form-group profile-box">
												{userDetail.profileImage !== undefined && (
													<img
														src={cover}
														alt="imag"
														className="profile-image"
													/>
												)}
												<input
													type="file"
													name="file"
													id="cover"
													className="inputfile p-5 w-10  file-upload input-size opacity-input"
													onChange={uploadCoverPhotos}
												></input>
											</div>
											<div className="mt-5">
												<button type="submit">
													<i className="bx bx-upload"></i> Upload Cover Photo
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>

							<form onSubmit={addProfileFormSubmit}>
								<div className="row">
									<div className="col-xl-6 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Email</label>
											<input
												type="email"
												className="form-control form-color"
												placeholder="Email"
												onChange={(e) => setEmail(e.target.value)}
												value={email}
											/>
											{error && email == "" ? (
												<span className="text-danger">Please enter email</span>
											) : (
												<></>
											)}
										</div>
									</div>

									<div className="col-xl-6 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Phone</label>
											<input
												type="text"
												className="form-control form-color"
												placeholder="Mobile Number"
												onChange={(e) => setMobile(e.target.value)}
												value={mobile}
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

									<div className="col-xl-6 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Business Name</label>
											<input
												type="text"
												className="form-control form-color"
												placeholder="Business Name"
												onChange={(e) => setBusinessName(e.target.value)}
												value={businessName}
											/>
											{error && businessName == "" ? (
												<span className="text-danger">
													Please enter business name
												</span>
											) : (
												<></>
											)}
										</div>
									</div>

									<div className="col-xl-6 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Established Year</label>
											<input
												type="text"
												className="form-control form-color"
												onChange={(e) => setestablished(e.target.value)}
												value={established}
											/>
										</div>
									</div>

									{/* <div className=" <div className="col-xl-4 col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Established Year</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setestablished(e.target.value)}
                              value={established}
                            />
                          </div>
                        </div>">
                    <div className="form-group">
                      <label id="studio">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      {error && name == "" ? (
                        <span className='text-danger'>Please enter name</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div> */}

									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<label>About</label>
											<textarea
												cols="30"
												rows="6"
												placeholder="Short description about you..."
												className="form-control form-color"
												onChange={(e) => setAbout(e.target.value)}
												value={about}
											></textarea>
										</div>
									</div>

									<div className="col-xl-4 col-lg-4 col-md-4">
										<div className="form-group">
											<label className="social-icons-style" id="facebook">
												<i className="bx bxl-facebook-square"></i> Facebook URL
											</label>
											<input
												type="text"
												className="form-control form-color"
												placeholder="Facebook Url"
												onChange={(e) => setFacebookUrl(e.target.value)}
												value={facebookUrl}
											/>
										</div>
									</div>

									<div className="col-xl-4 col-lg-4 col-md-4">
										<div className="form-group">
											<label className="social-icons-style">
												<i className="bx bxl-instagram"></i>Instagram URL
											</label>
											<input
												type="text"
												className="form-control form-color"
												placeholder="Instagram URL"
												onChange={(e) => setInstagramUrl(e.target.value)}
												value={instagramUrl}
											/>
										</div>
									</div>

									<div className="col-xl-4 col-lg-4 col-md-4">
										<div className="form-group">
											<label className="social-icons-style">
												<i className="bx bxl-twitter"></i>Twitter URL
											</label>
											<input
												type="text"
												className="form-control form-color"
												placeholder="twitter URL"
												onChange={(e) => setTwitterUrl(e.target.value)}
												value={twitterUrl}
											/>
										</div>
									</div>

									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<h3 id="address">ADDRESS</h3>
										</div>
									</div>

									<div className="col-xl-6 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Door No.</label>
											<input
												type="text"
												className="form-control form-color"
												placeholder="Door No."
												onChange={(e) => setDoorNumber(e.target.value)}
												value={doorNumber}
											/>
											{error && doorNumber == undefined ? (
												<span className="text-danger">Please enter number</span>
											) : (
												<></>
											)}
										</div>
									</div>

									<div className="col-xl-6 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Street, Sector, Area, Colony</label>
											<input
												type="text"
												className="form-control form-color"
												placeholder="Street"
												onChange={(e) => setStreet(e.target.value)}
												value={street}
											/>
											{error && street == undefined ? (
												<span className="text-danger">Please enter street</span>
											) : (
												<></>
											)}
										</div>
									</div>

									<div className="col-xl-6 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Landmark</label>
											<input
												type="text"
												className="form-control form-color"
												placeholder="Landmark"
												onChange={(e) => setLandmark(e.target.value)}
												value={landmark}
											/>
										</div>
									</div>

									<div className="col-xl-6 col-lg-12 col-md-12">
										<div className="form-group">
											<label>PIN code</label>
											<input
												type="text"
												className="form-control form-color"
												placeholder="Pin Code"
												onChange={(e) => setPincode(e.target.value)}
												value={pincode}
											/>
											{error && pincode == undefined ? (
												<span className="text-danger">
													Please enter pincode
												</span>
											) : (
												<></>
											)}
										</div>
									</div>

									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>
												<i className="bx bx-menu-alt-left"></i> State:
											</label>
											<select
												className="dashbaord-category-select form-color"
												placeholder="Select the state"
												onChange={handleClickState}
												value={state}
											>
												<option>Select the State</option>
												{states.map((state) => {
													return (
														<option
															id={state.Geo_TinNo}
															value={[state.Geo_Name, state.Geo_TinNo]}
															key={state.Geo_TinNo}
														>
															{state.Geo_Name}
														</option>
													);
												})}
											</select>
											{error && state.length == "" ? (
												<span className="text-danger">Please select state</span>
											) : (
												<></>
											)}
										</div>
									</div>

									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>
												<i className="bx bx-menu-alt-left"></i> City:
											</label>
											<select
												className="dashbaord-category-select form-color"
												onChange={handleOnChangeCity}
												onFocus={handleClickCity}
											>
												<option>
													{city.length > 0 ? city[0] : "Select the City"}
												</option>
												{cityFilter.map((cityMap) => {
													return (
														<option
															value={[
																cityMap.Geo_Name,
																cityMap.Geo_Head,
																cityMap.id,
															]}
															key={cityMap.id}
														>
															{cityMap.Geo_Name}
														</option>
													);
												})}
											</select>
											{error && city.length == "" ? (
												<span className="text-danger">Please select city</span>
											) : (
												<></>
											)}
										</div>
									</div>

									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<label>
												<i className="bx bx-menu-alt-left"></i> Location:
											</label>
											<select
												className="dashbaord-category-select form-color"
												onChange={handleOnChangeLocation}
												onFocus={handleClickLocation}
											>
												<option>
													{location.length > 0
														? location[0]
														: "Select the Location"}
												</option>
												{locationFilter.map((locaMap) => {
													return (
														<option
															value={[
																locaMap.Geo_Name,
																locaMap.Geo_Head,
																locaMap.Geo_City,
																locaMap.id,
															]}
															key={locaMap.id}
														>
															{locaMap.Geo_Name}
														</option>
													);
												})}
											</select>
											{error && location.length == "" ? (
												<span className="text-danger">
													Please select location
												</span>
											) : (
												<></>
											)}
										</div>
									</div>

									{/* <div className="col-lg-12 col-md-12">
                    <div {...getRootProps()} className='dropzone mb-3'>
                      <h3>Facilities</h3>
                      {files.length > 0 ? (
                        <div className='gallery-flex'>
                          {thumbs}
                          <input {...getInputProps()} />
                        </div>
                      ) : (
                        <div className='file-upload-box'>
                          <input {...getInputProps()} />
                          <p>Drag 'n' drop files here, or click to select files</p>
                        </div>
                      )}
                    </div>
                  </div> */}

									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<h3 id="address">PACKAGES</h3>
										</div>
									</div>

									<div className="col-xl-4 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Service Name</label>
											<input
												type="text"
												className="form-control"
												value={service}
												onChange={(e) => setService(e.target.value)}
											/>
										</div>
									</div>

									<div className="col-xl-3 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Service Cost</label>
											<input
												type="text"
												value={serviceCost}
												className="form-control"
												onChange={(e) => setServiceCost(e.target.value)}
											/>
										</div>
									</div>
									<div className="col-xl-3 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Duration</label>
											<input
												type="text"
												className="form-control"
												value={duration}
												onChange={(e) => setDuration(e.target.value)}
											/>
										</div>
									</div>

									<div className="col-xl-2 col-lg-12 col-md-12">
										<div className="form-group">
											<label>
												<br />
											</label>
											<span data-toggle="modal" activeClassName="active">
												<a
													className="default-btn"
													style={{ width: "100%" }}
													onClick={createPackage}
												>
													Add
												</a>
											</span>
										</div>
									</div>

									{pack != undefined &&
										pack.map((pac) => {
											return (
												<div
													className="col-xl-4 col-lg-12 col-md-12 package-view"
													key={pac.id}
													style={{ padding: "0px" }}
												>
													<div className="card-body ">
														<div
															className="events-details-info"
															style={{ backgroundColor: "unset" }}
														>
															<ul className="info">
																<li className="price">
																	<div className="d-flex justify-content-between align-items-center">
																		<span>Service</span>
																		{pac.service}
																	</div>
																</li>
																<li>
																	<div className="d-flex justify-content-between align-items-center">
																		<span>Service Cost</span>
																		{pac.serviceCost}
																	</div>
																</li>
																<li>
																	<div className="d-flex justify-content-between align-items-center">
																		<span>Duration</span>
																		<span>{pac.duration}</span>
																	</div>
																</li>
																<br />
																<span
																	data-toggle="modal"
																	activeClassName="active"
																>
																	<a
																		className="default-btn"
																		onClick={() => removePackage(pac.service)}
																	>
																		Remove
																	</a>
																</span>
															</ul>
														</div>
													</div>
												</div>
											);
										})}

									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<h3 id="address">Time Slot</h3>
										</div>
									</div>

									<div className="col-xl-4 col-lg-12 col-md-12">
										<div className="form-group">
											<label>Start Time</label>
											<input
												type="time"
												className="form-control"
												placeholder="start time"
												value={startTime}
												onChange={(e) => {
													console.log(e.target.value);
													setStartTime(e.target.value);
												}}
											/>
										</div>
									</div>

									<div className="col-xl-4 col-lg-12 col-md-12">
										<div className="form-group">
											<label>End Time</label>
											<input
												type="time"
												className="form-control"
												placeholder="end time"
												value={endTime}
												onChange={(e) => {
													console.log(e.target.value);
													setEndTime(e.target.value);
												}}
											/>
										</div>
									</div>

									<div className="col-xl-2 col-lg-12 col-md-12">
										<div className="form-group">
											<label>
												<br />
											</label>
											<span data-toggle="modal" activeClassName="active">
												<a
													className="default-btn"
													style={{ width: "100%" }}
													onClick={createTime}
												>
													Add
												</a>
											</span>
										</div>
									</div>

									{timing.map((time) => {
										return (
											<div
												className="col-xl-2 col-lg-12 col-md-12 package-view mt-2"
												key={time.id}
												style={{ marginRight: "17px", marginBottom: "5px" }}
											>
												<button
													type="button"
													className="time-slot-close"
													onClick={() => removeTimeSlot(time.startTime)}
												>
													<i className="bx bx-x"></i>
												</button>
												<div className="card-body ">
													<div
														className="events-details-info"
														style={{ backgroundColor: "unset", padding: "8px" }}
													>
														<ul className="info">
															<li className="price">
																<div className="justify-content-between align-items-center">
																	{time.startTime}
																	{""} - {""} {time.endTime}
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										);
									})}

									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<h3 id="address">Bookings for Slot</h3>
										</div>
									</div>

									<div className="col-xl-4 col-lg-12 col-md-12">
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												placeholder="start time"
												value={bookingSlot}
												onChange={(e) => setBookingSlot(e.target.value)}
											/>
										</div>
									</div>

									{/* {serviceList.map((ser, index) => {
                    return (
                      <div className="row m-1">
                        <div className="col-xl-6 col-lg-12 col-md-12" key={index}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="time"
                              id="service"
                              value={ser.service}
                              name="service"
                              onChange={(e) => handleServiceChange(e, index)}
                            />
                          </div>
                        </div>

                        <div className="col-xl-3 col-lg-12 col-md-12" key={index}>
                          <div className="form-group">
                            {serviceList.length > 1 &&
                              (<span data-toggle="modal" activeClassName="active" onClick={() => handleServiceRemove(index)}>
                                <a className="default-btn" style={{ width: "100%" }}
                                >
                                  -
                                </a>
                              </span>)}
                          </div>
                        </div>

                        <div className="col-xl-3 col-lg-12 col-md-12" key={index}>
                          <div className="form-group">
                            {serviceList.length - 1 === index && serviceList.length < 8 &&
                              (<span data-toggle="modal" activeClassName="active" onClick={handleServiceAdd}>
                                <a className="default-btn" style={{ width: "100%" }}
                                >
                                  +
                                </a>
                              </span>)}
                          </div>
                        </div>

                      </div>
                    )
                  })} */}

									{/* <div className="col-lg-12 col-md-12">
                    <div
                      className="add-listings-box"
                      style={{ boxShadow: "none" }}
                    >
                      <div className="form-group">
                        <h3>ADDITIONAL INFORMATION</h3>
                        <p>How long you have been into Business?</p>                        
                      </div>
                    </div>
                  </div> */}

									{/* <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Payment terms</label>
                      <textarea
                        cols="30"
                        rows="6"
                        placeholder="..."
                        className="form-control"
                      ></textarea>
                    </div>
                  </div> */}

									{/* <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Additional costs</label>
                      <textarea
                        cols="30"
                        rows="6"
                        placeholder="..."
                        className="form-control"
                      ></textarea>
                    </div>
                  </div> */}

									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<button onClick={goToTop} type="submit">
												Save Changes
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div className="flex-grow-1"></div>
				<div className="copyrights-area">
					<div className="row align-items-center">
						<div className="col-lg-6 col-sm-6 col-md-6">
							<p>
								<i className="bx bx-copyright"></i>Copyright © 2020{" "}
								<a href="/">BEYONDLOVE</a>. All Rights Reserved
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default PetTraining;
