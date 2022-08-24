import axios from "axios";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addAllBusiness } from "../../Redux/allBusinessSlice";
import { cities } from "../../utils/cities";
import { locations } from "../../utils/location";
import { useTranslation } from "next-i18next";

const Banner = () => {
	const [serviceProvider, setServiceProvider] = useState("");
	const [citiesLength, setCitiesLength] = useState("");
	const [locationLength, setLocationLength] = useState("");

	const { t } = useTranslation("home");
	useEffect(() => {
		if (typeof window != "undefined") {
			getServiceProvide();
			setCitiesLength(cities.length);
			setLocationLength(locations.length);
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

	const getServiceProvide = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.DOMAIN_NAME}/api/business/get-serviceproviderscount`
			);
			setServiceProvider(data.serviceProvidersCount);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<section className="banner-wrapper-area-main-banner background-img">
				<div className="container">
					<div className="sec-count-head pt-4">
						<h1>{t("Best Place For All Your Pet Needs")}!</h1>
					</div>
					<div className="row">
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
										end={21}
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
										end={serviceProvider}
										duration={3}
										className="countUp"
									/>
									<p>{t("Service Providers")}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
