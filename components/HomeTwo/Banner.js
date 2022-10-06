import axios from "axios";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addAllBusiness } from "../../Redux/allBusinessSlice";
import { cities } from "../../utils/cities";
import { locations } from "../../utils/location";
import { useTranslation } from "next-i18next";
import { dataCity } from "../../utils/dataCity";
import { dataLocation } from "../../utils/dataLocation";

const Banner = () => {
	const [serviceProvider, setServiceProvider] = useState("");
	const [citiesLength, setCitiesLength] = useState("");
	const [locationLength, setLocationLength] = useState("");

	const { t } = useTranslation("home");
	useEffect(() => {
		if (typeof window != "undefined") {
			// getServiceProvide();
			setCitiesLength(dataCity.length);
			setLocationLength(dataLocation.length);
		}
	});

	useEffect(() => {
		if (typeof window != "undefined") {
			let category = localStorage.getItem("category");
			console.log("we are running client side");
		} else {
			console.log("we are running server side");
		}
	}, []);

	// const getServiceProvide = async () => {
	// 	try {
	// 		const { data } = await axios.get(
	// 			`${process.env.DOMAIN_NAME}/api/business/get-serviceproviderscount`
	// 		);
	// 		setServiceProvider(data.serviceProvidersCount);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<>
			{/* <div className="row mx-1">
				<div className="col-lg-1 col-sm-6 col-md-4">
					<section>

					</section>
				</div>
				<div className="col-lg-10 col-sm-12 col-md-12"> */}
			<section className="banner-wrapper-area-main-banner background-img">
				<div className="container" style={{ textAlign: "center" }}>
					<div className="sec-count-head pt-5 p-3">
						{/* <h1>{t("Best Place For All Your Pet Needs")}!</h1> */}
						<h1>Popular Cities</h1>
					</div>
					<div className="row mt-4" >
						<div className="col-lg-1 col-sm-6 col-md-4">
						</div>
						<div className="col-lg-2 col-sm-6 col-md-4">
							<img src="/images/chennai.png" alt="image" />
							<p>Chennai</p>
						</div>
						<div className="col-lg-2 col-sm-6 col-md-4">
							<img src="/images/delhi.png" alt="image" />
							<p>Delhi</p>
						</div>
						<div className="col-lg-2 col-sm-6 col-md-4">
							<img src="/images/Hyderabad.png" alt="image" />
							<p>Hyderabad</p>
						</div>
						<div className="col-lg-2 col-sm-6 col-md-4">
							<img src="/images/kolk.png" alt="image" />
							<p>Kolkata</p>
						</div>
						<div className="col-lg-2 col-sm-6 col-md-4">
							<img src="/images/mumbai.png" alt="image" />
							<p>Mumbai</p>
						</div>
						<div className="col-lg-1 col-sm-6 col-md-4">
						</div>
					</div>

					<div class="land-pack">
						<ul>
							<li>
								<div class="land-pack-grid">
									<div class="land-pack-grid-img">
										<img src="/images/state.png" alt="image" />
									</div>
									<div class="land-pack-grid-text">
										<h4>States<span><br /></span> <CountUp
											start={0}
											end={14}
											duration={3}
											className="countUp"
										/></h4>

									</div>
									{/* <a href="https://petsfeet.com/shops" class="land-pack-grid-btn">View all listings</a> */}
								</div>
							</li>
							<li>
								<div class="land-pack-grid">
									<div class="land-pack-grid-img">
										<img src="/images/city.png" alt="image" />
									</div>
									<div class="land-pack-grid-text">
										<h4>Cities <span><br /></span>
											<CountUp
												start={0}
												end={citiesLength}
												duration={3}
												className="countUp"
											/>
										</h4>

									</div>
									{/* <a href="https://petsfeet.com/doctor" class="land-pack-grid-btn">View all listings</a> */}
								</div>
							</li>
							<li>
								<div class="land-pack-grid">
									<div class="land-pack-grid-img">
										<img src="/images/location.png" alt="image" />
									</div>
									<div class="land-pack-grid-text">
										<h4>Locations  <span><br /></span>
											<CountUp
												start={0}
												end={locationLength}
												duration={3}
												className="countUp"
											/>
										</h4>

									</div>
									{/* <a href="https://petsfeet.com/store" class="land-pack-grid-btn">View all listings</a> */}
								</div>
							</li>
							<li>
								<div class="land-pack-grid">
									<div class="land-pack-grid-img">
										<img src="/images/service.png" alt="image" />
									</div><br />
									<div class="land-pack-grid-text">
										<h4>Service Providers<span><br /></span>
											<CountUp
												start={0}
												end={8592}
												duration={3}
												className="countUp"
											/>
										</h4>
									</div>
									{/* <a href="https://petsfeet.com/eshop/dog/dog-grooming" class="land-pack-grid-btn">View all listings</a> */}
								</div>
							</li>


						</ul>
					</div>

					{/* <div className="row">
								<div className="col-lg-4 col-sm-12 col-md-12"></div>
								<div className="col-lg-8 col-sm-12 col-md-12 sec-count">
									<div className="row mt-5">
										<div class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main">
											<img src="/images/state.png"></img>
											<br />
											<CountUp
												start={0}
												end={14}
												duration={3}
												className="countUp"
											/>
											<p>{t("States")}</p>
										</div>
										<div class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main">
											<img src="/images/city.png"></img>
											<br />
											<CountUp
												start={0}
												end={citiesLength}
												duration={3}
												className="countUp"
											/>
											<p>{t("Cities")}</p>
										</div>
										<div class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main">
											<img src="/images/locations.png"></img>
											<br />
											<CountUp
												start={0}
												end={locationLength}
												duration={3}
												className="countUp"
											/>
											<p>{t("Locations")}</p>
										</div>
										<div
											class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main"
											style={{ borderRight: "unset" }}
										>
											<img src="/images/services.png"></img>
											<br />
											<CountUp
												start={0}
												end={8592}
												duration={3}
												className="countUp"
											/>
											<p>{t("Service Providers")}</p>
										</div>
									</div>
								</div>
							</div> */}
				</div>
			</section>
			{/* </div>
				<div className="col-lg-1 col-sm-6 col-md-4">
					<section>

					</section>
				</div>

			</div> */}
		</>
	);
};

export default Banner;
