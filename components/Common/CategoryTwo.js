import Link from "next/link";
import { FaClinicMedical } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";
import { TbBone } from "react-icons/tb";
import { MdPets, MdOutlineFoodBank } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
const Category = ({ titleOne, titleTwo }) => {
	const [petBoardingCount, setPetBoardingCount] = useState("");
	const [petClinicCount, setPetClinicCount] = useState("");
	const [petFoodCount, setPetFoodCount] = useState("");
	const [petGroomingCount, setPetGroomingCount] = useState("");
	const [petTrainingCount, setTrainingCount] = useState("");
	const router = useRouter();
	const { t } = useTranslation("home");
	useEffect(() => {
		if (typeof window != "undefined") {
			console.log("we are running the client");
			// getServiceProvide();
		} else {
			console.log("we are running server side");
		}
	});
	// const getServiceProvide = async () => {
	// 	try {
	// 		const { data } = await axios.get(
	// 			`${process.env.DOMAIN_NAME}/api/business/get-serviceproviderscount`
	// 		);
	// 		console.log(data);
	// 		setPetBoardingCount(data.petBoardingCount);
	// 		setPetClinicCount(data.petClinicCount);
	// 		setPetFoodCount(data.petFoodCount);
	// 		setPetGroomingCount(data.petGroomingCount);
	// 		setTrainingCount(data.petTrainingCount);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	const getSpecificCategoryServices = (e, categoryName) => {
		e.preventDefault();
		router.push({
			pathname: "/listings",
			query: { categoryName },
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
					<section className="category-area pt-100 pb-70 bakgrd">
						<div className="container">
							{titleOne ? (
								<div className="section-title">
									<h2>{t("Popular Categories")}</h2>
								</div>
							) : titleTwo ? (
								<div className="section-title text-left">
									<h2>Explore by Category</h2>
									<a href="#" className="link-btn">
										Show All <i className="flaticon-right-chevron"></i>
									</a>
								</div>
							) : (
								""
							)}
							<div className="row" style={{ justifyContent: "space-between" }}>
								<div
									className="col-lg-3 col-sm-6 col-md-6"
									onClick={(e) => getSpecificCategoryServices(e, "PetClinic")}
								>
									<div className="single-category-box">
										<div className="icon">
											<FaClinicMedical size="2.5rem" />
										</div>
										<h3>{t("Pet Clinic")}</h3>
										<span>{3053}</span>
									</div>
								</div>
								<div
									className="col-lg-3 col-sm-6 col-md-6"
									onClick={(e) => getSpecificCategoryServices(e, "PetGrooming")}
								>
									<div className="single-category-box">
										<div className="icon">
											<GiHairStrands size="2.5rem" />
										</div>
										<h3>{t("Pet Grooming")}</h3>
										<span>{2062}</span>
									</div>
								</div>
								<div
									className="col-lg-3 col-sm-6 col-md-6"
									onClick={(e) => getSpecificCategoryServices(e, "PetTraining")}
								>
									<div className="single-category-box">
										<div className="icon">
											<TbBone size="2.5rem" />
										</div>
										<h3>{t("Pet Training")}</h3>
										<span>{2305}</span>
									</div>
								</div>
								<div
									className="col-lg-3 col-sm-6 col-md-6"
									onClick={(e) => getSpecificCategoryServices(e, "PetBoarding")}
								>
									<div className="single-category-box">
										<div className="icon">
											<MdPets size="2.5rem" />
										</div>
										<h3>{t("Pet Boarding")}</h3>
										<span>{1172}</span>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="col-lg-1 col-sm-6 col-md-4">
					<section>

					</section>
				</div>
			</div>
		</>
	);
};
export default Category;
