import Typist from "react-typist";
import Link from "next/link";
import axios from "axios";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addAllBusiness } from "../../Redux/allBusinessSlice";
import { cities } from "../../utils/cities";
import { locations } from "../../utils/location";
import { useTranslation } from "next-i18next";

const Banner = () => {
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
  const [serviceProvider, setServiceProvider] = useState("");
  const [citiesLength, setCitiesLength] = useState("");
  const [locationLength, setLocationLength] = useState("");

  const { t } = useTranslation("home");

  let router = useRouter();
  let dispatch = useDispatch();
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

      getAllBusinessProfiles();

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
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBusinessProfiles = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.DOMAIN_NAME}/api/business/get-profiles-from-all-categories`
      );
      console.log(data);
      setAllBusinessDetail(data.profilesArray);
      getStateandCities(data.profilesArray);
      dispatch(addAllBusiness(data.profilesArray));
      setRun(!run);
    } catch (error) {
      console.log(error);
    }
  };

  const getStateandCities = (details) => {
    let stateArray = [];
    let cityArray = [];
    let locationArray = [];
    details.map((states) => {
      // console.log(states);
      if (states.state[0] !== undefined) {
        stateArray.push(states.state);
      }
      if (states.city[0] !== undefined) {
        cityArray.push(states.city);
      }
      if (states.location[0] !== undefined) {
        locationArray.push(states.location);
      }
    });
    // unique state array
    let stringStateArray = stateArray.map(JSON.stringify);
    let uniqueStateString = new Set(stringStateArray);
    let uniqueStateArray = Array.from(uniqueStateString, JSON.parse);
    uniqueStateArray.sort((a, b) => (a[0] < b[0] ? -1 : 1));
    console.log(uniqueStateArray);

    // unique city array
    let stringCityArray = cityArray.map(JSON.stringify);
    let uniqueCityString = new Set(stringCityArray);
    let uniqueCityArray = Array.from(uniqueCityString, JSON.parse);
    uniqueCityArray.sort((a, b) => (a[0] < b[0] ? -1 : 1));

    // unique location array
    let stringLocationArray = locationArray.map(JSON.stringify);
    let uniqueLocationString = new Set(stringLocationArray);
    let uniqueLocationArray = Array.from(uniqueLocationString, JSON.parse);
    uniqueLocationArray.sort((a, b) => (a[0] < b[0] ? -1 : 1));

    setAllStates(uniqueStateArray);
    setAllCities(uniqueCityArray);
    setAllLocations(uniqueLocationArray);
  };

  // State Change

  const handleStateChange = (e) => {
    console.log("changed");
    const stateChange = e.target.value;
    console.log({ stateChange });
    setStateName(stateChange.split(","));
  };

  // City Change

  const handleChangeCity = (e) => {
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

  // location Change
  const handleChangeLocation = (e) => {
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

  // Category Change
  const handleChangeCategory = (e) => {
    console.log(e.target.value);
    setCategoryName(e.target.value);
  };

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

  return (
    <>
      <section className="banner-wrapper-area-main-banner background-img">
        <div className="container">
          <div className="sec-count-head pt-4">
            {/* <h4>Look at our numbers!</h4> */}
            <h1>Best Place for all your Pet needs!</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-12"></div>
            <div className="col-lg-8 col-sm-12 col-md-12 sec-count">
              <div className="row mt-5">
                <div class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main">
                  <img src="/images/state.png"></img><br />
                  <CountUp
                    start={0}
                    end={14}
                    duration={3}
                    className="countUp"
                  />
                  <p>State</p>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main">
                  <img src="/images/city.png"></img><br />
                  <CountUp
                    start={0}
                    end={21}
                    duration={3}
                    className="countUp"
                  />
                  <p>Cities</p>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main">
                  <img src="/images/locations.png"></img><br />
                  <CountUp
                    start={0}
                    end={3065}
                    duration={3}
                    className="countUp"
                  />
                  <p>Locations</p>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main">
                  <img src="/images/services.png"></img><br />
                  <CountUp
                    start={0}
                    end={10375}
                    duration={3}
                    className="countUp"
                  />
                  <p>Service Provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ToastContainer />
      <section className="banner-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="banner-content banner-form">
                <h1 className="banner-two-heading">
                  <span className="typewrite">Find Nearby</span>
                  <Typist>
                    <span>Pet Clinics</span>
                    <Typist.Backspace count={15} delay={200} />
                    <span> Pet Grooming </span>
                    <Typist.Backspace count={15} delay={200} />
                    <span> Pet Training </span>
                    <Typist.Backspace count={15} delay={200} />
                   
                    <span> Pet Boarding </span>
                  </Typist>
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
                          
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-6 p-0">
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

                          {allStates.map((state) => {
                            return (
                              <option
                                value={[state[0], state[1]]}
                                key={state[0]}
                              >
                                {state[0]}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-6 p-0">
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
                            {cityName.length > 0 ? cityName[0] : "Select City"}
                          </option>
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
                          <option>
                            {locationName.length > 0
                              ? locationName[0]
                              : "Select Location"}
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

                    <div class="col-lg-2 col-md-6 p-0">
                      <div className="submit-btn ">
                        <button type="submit">Search</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="banner-image">
                <img src="/images/banner-img1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Banner;
