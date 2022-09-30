import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import axios from "axios";
// import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { BsFacebook, BsFillHeartFill, BsYoutube } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import {
    FacebookShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
} from "react-share";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdEmail } from "react-icons/md";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//components
import NavbarTwo from "../components/_App/NavbarTwo";
import PopularPlacesFilter from "../components/Common/PopularPlacesFilter";
import Footer from "../components/_App/Footer";
import { useRouter } from "next/router";

const BookAppoinment = () => {
    const [breed, setBreed] = useState("");
    const [selectBreed, setSelectBreed] = useState("");
    const [selectDog, setSelectDog] = useState(false);
    const [selectCat, setSelectCat] = useState(false);
    const [showOptionalBreed, setShowOptionalBreed] = useState(false);
    const [error, setError] = useState(false);
    const [petName, setPetName] = useState("");
    const [age, setAge] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectTime, setSelectTime] = useState("");
    const [dateTimeShow, setDateTimeShow] = useState(false);
    const [breedFormHide, setBreedFormHide] = useState(true);
    const [dateAndTimeForm, setDateAndTimeForm] = useState(false);
    const [customerFormHide, setCustometFormHide] = useState(false);
    const [finalFormHide, setFinalFormHide] = useState(false);
    const [businessId, setBusinessid] = useState("");
    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [location, setLocation] = useState("");
    const [backGroundColor, setBackGroundColor] = useState(false);
    const [businessData, setBusinessData] = useState("");
    const [timeSlots, setTimeSlots] = useState([]);
    const router = useRouter();
    console.log(router);

    useEffect(() => {
        let id;
        let cate;
        if (router.isReady) {
            console.log(router.query);
            if (router.query != undefined) {
                id = router.query.id;
                cate = router.query.category;
                getUniqueProfile(cate, id);
            }
        }
    }, []);

    const getUniqueProfile = async (cate, id) => {
        console.log({ cate }, { id });
        try {
            const { data } = await axios.get(
                `${process.env.DOMAIN_NAME}/api/business/get-profile/${cate}/${id}`
            );
            console.log(data);
            setBusinessData(data.business);
            setTimeSlots(data.business.timeSlots);
        } catch (error) {
            console.log(error);
        }
    };

    const onSelectBreed = (e) => {
        setSelectBreed(e.target.value);
        if (e.target.value == "Dog") {
            setSelectDog(true);
            setSelectCat(false);
        }
        if (e.target.value == "Cat") {
            setSelectCat(true);
            setSelectDog(false);
        }
    };

    // Breed Selection
    const handleBreed = (e) => {
        setBreed(e.target.value);
        if (e.target.value == "others") {
            setShowOptionalBreed(true);
            setBreed("");
        } else {
            setShowOptionalBreed(false);
            setBreed(e.target.value);
        }
    };

    const breedFormOnsubmit = (e) => {
        e.preventDefault();
        if (
            selectBreed == "" ||
            breed == "" ||
            breed == undefined ||
            petName == "" ||
            age == ""
        ) {
            setError(true);
        } else {
            setDateAndTimeForm(true);
            setBreedFormHide(false);
            setCustometFormHide(false);
            setFinalFormHide(false);
        }
    };

    const selectOnclickTime = (time) => {
        setSelectTime(time);
        setBackGroundColor(true);
    };

    const dateAndTimeOnsubmit = (e) => {
        e.preventDefault();
        if (
            selectedDate == "" ||
            selectedDate == undefined ||
            selectTime == "" ||
            selectTime == undefined
        ) {
            setError(true);
        } else {
            setDateAndTimeForm(false);
            setBreedFormHide(false);
            setCustometFormHide(true);
            setFinalFormHide(false);
        }
    };

    const customerFormOnsubmit = (e) => {
        e.preventDefault();
        if (customerName == "" || email == "" || mobile == "" || address == "") {
            setError(true);
        } else {
            setDateAndTimeForm(false);
            setBreedFormHide(false);
            setCustometFormHide(false);
            setFinalFormHide(true);
        }
    };

    const finalFormOnsubmit = async (e) => {
        e.preventDefault();
        const d = {
            petBreed: breed,
            petName,
            petAge: age,
            date: selectedDate,
            time: selectTime,
            name: customerName,
            mobile,
            email,
            address,
            businessId,
            category,
            state,
            city,
            location,
        };
        console.log(d);
        try {
            const { data } = await axios.post(
                `${process.env.DOMAIN_NAME}/api/book-appointment`,
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
                router.push({ pathname: "/" });
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

    // const goToTop = () => {
    // 	window.scrollTo({
    // 		top: 0,
    // 		behavior: "smooth",
    // 	});
    // };

    return (
        <>
            <NavbarTwo />
            <section>
                <ToastContainer />
                <div className="tab-pane" id="register">
                    <div className="container miran-register mt-3">
                        <div className="row">
                            <div className="col-lg-6 col-md-12" style={{ margin: "0 auto" }}>
                                <h2 style={{ textAlign: "center" }}>Book Appointment</h2>
                                <div
                                    className="my-profile-box"
                                    style={{ marginBottom: "185px" }}
                                >
                                    {/* <h3>Create Pet</h3> */}
                                    {breedFormHide && (
                                        <form onSubmit={breedFormOnsubmit}>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>
                                                            <i className="bx bx-menu-alt-left"></i> Pet You
                                                            Own
                                                        </label>
                                                        <select
                                                            className="dashbaord-category-select form-color"
                                                            placeholder="Select the state"
                                                            onChange={(e) => onSelectBreed(e)}
                                                        >
                                                            <option>Select the Pet</option>
                                                            <option>Dog</option>
                                                            <option>Cat</option>
                                                        </select>
                                                        {error && selectBreed.length == "" ? (
                                                            <span className="text-danger">
                                                                This field is required
                                                            </span>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </div>

                                                {selectDog && (
                                                    <>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 ">
                                                            <div className="form-group">
                                                                <label>
                                                                    <i className="bx bx-menu-alt-left"></i> Breed:
                                                                </label>
                                                                <select
                                                                    className="dashbaord-category-select form-color"
                                                                    onChange={(e) => handleBreed(e)}
                                                                // value={breed}
                                                                >
                                                                    <option>Select the Breed </option>
                                                                    <option>Labrador Retriever</option>
                                                                    <option>Golden Retriever</option>
                                                                    <option>Indian Spitz</option>
                                                                    <option>Chippiparai</option>
                                                                    <option>Kombai</option>
                                                                    <option>Rajapalayam</option>
                                                                    <option>Indian Pariah</option>
                                                                    <option>Indie</option>
                                                                    <option>Mudhol Hound</option>
                                                                    <option>Bully Kutta</option>
                                                                    <option>Dachshund</option>
                                                                    <option>Beagle</option>
                                                                    <option>German Shepherd</option>
                                                                    <option>Great Dane</option>
                                                                    <option>Boxer</option>
                                                                    <option>Rottweiler</option>
                                                                    <option>Pug</option>
                                                                    <option>Cocker Spaniel</option>
                                                                    <option>Dalmation</option>
                                                                    <option>Tibetan Mastiff</option>
                                                                    <option>Doberman</option>
                                                                    <option>Pomeranian</option>
                                                                    <option>Akita</option>
                                                                    <option>French Bulldog</option>
                                                                    <option>Shih Tzu</option>
                                                                    <option>English Bulldog</option>
                                                                    <option>Siberian Husky</option>
                                                                    <option>Chihuahua</option>
                                                                    <option>Chow Chow</option>
                                                                    <option>Corgi</option>
                                                                    <option>Jack Russell Terrier</option>
                                                                    <option>Dogo Arghentino</option>
                                                                    <option>Lahasa Apso</option>
                                                                    {/* <option value="others">Others</option> */}
                                                                </select>
                                                                {error && breed.length == "" ? (
                                                                    <span className="text-danger">
                                                                        Please Select Breed
                                                                    </span>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* <div className="col-xl-12 col-lg-12 col-md-12">
                                                        {showOptionalBreed && (
                                                            <div className="form-group">
                                                                <label>Breed Name</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-color"
                                                                    placeholder="Breed Name"
                                                                    value={breed}
                                                                    onChange={(e) => setBreed(e.target.value)}
                                                                ></input>
                                                                {error && breed == undefined ? (
                                                                    <span className="text-danger">This field is required</span>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div> */}
                                                    </>
                                                )}

                                                {selectCat && (
                                                    <>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 ">
                                                            <div className="form-group">
                                                                <label>
                                                                    <i className="bx bx-menu-alt-left"></i> Breed:
                                                                </label>
                                                                <select
                                                                    className="dashbaord-category-select form-color"
                                                                    onChange={(e) => handleBreed(e)}
                                                                // value={breed}
                                                                >
                                                                    <option>Select the Breed </option>
                                                                    <option>Persian Cat</option>
                                                                    <option>British Short Hair</option>
                                                                    <option>Siamese Cat</option>
                                                                    <option>RagDoll</option>
                                                                    <option>American Bobtail</option>
                                                                    <option>Singapura Cat</option>
                                                                    <option>Bombay Cat</option>
                                                                    <option>Himalayan Cat</option>
                                                                    <option>Maine Coon</option>
                                                                    <option>Spotted Cat</option>
                                                                    {/* <option value="others">Others</option> */}
                                                                </select>
                                                                {error && breed.length == "" ? (
                                                                    <span className="text-danger">
                                                                        Please Select Breed
                                                                    </span>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* <div className="col-xl-12 col-lg-12 col-md-12">
                                                    {showOptionalBreed && (
                                                        <div className="form-group">
                                                            <label>Breed Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-color"
                                                                placeholder="Breed Name"
                                                                value={breed}
                                                                onChange={(e) => setBreed(e.target.value)}
                                                            ></input>
                                                            {error && breed == undefined ? (
                                                                <span className="text-danger">This field is required</span>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </div>
                                                    )}
                                                </div> */}
                                                    </>
                                                )}

                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Pet Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-color"
                                                            placeholder="Pet Name"
                                                            onChange={(e) => setPetName(e.target.value)}
                                                        />
                                                        {error && petName == "" ? (
                                                            <span className="text-danger">
                                                                This field is required
                                                            </span>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Age</label>
                                                        <input
                                                            type="number"
                                                            className="form-control form-color"
                                                            placeholder="Age"
                                                            onChange={(e) => setAge(e.target.value)}
                                                        />
                                                        {error && petName == "" ? (
                                                            <span className="text-danger">
                                                                This field is required
                                                            </span>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <button type="submit">Next</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )}

                                    {dateAndTimeForm && (
                                        <form onSubmit={dateAndTimeOnsubmit}>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Select Date</label>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DatePicker
                                                                // label="Select Date"
                                                                value={selectedDate}
                                                                onChange={(newValue) => {
                                                                    setSelectedDate(
                                                                        `${newValue.$D}-${newValue.$M + 1}-${newValue.$y
                                                                        }`
                                                                    );
                                                                    setDateTimeShow(true);
                                                                }}
                                                                disablePast={true}
                                                                renderInput={(params) => (
                                                                    <TextField {...params} />
                                                                )}
                                                            />
                                                        </LocalizationProvider>

                                                        {error && selectedDate == "" ? (
                                                            <span className="text-danger">
                                                                This field is required
                                                            </span>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </div>

                                                {dateTimeShow && (
                                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                                        <div className="form-group">
                                                            <label>Select time</label>
                                                            <div className="selectTime">
                                                                {timeSlots.map((slot) => (
                                                                    <p
                                                                        className={
                                                                            backGroundColor &&
                                                                                selectTime === slot.timeSlot
                                                                                ? "activeBackGround"
                                                                                : ""
                                                                        }
                                                                        onClick={() =>
                                                                            selectOnclickTime(slot.timeSlot)
                                                                        }
                                                                    >
                                                                        {slot.timeSlot}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <button onClick={dateAndTimeOnsubmit} type="submit">
                                                            Next
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )}

                                    {customerFormHide && (
                                        <form onSubmit={customerFormOnsubmit}>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Customer Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-color"
                                                            placeholder="Customer Name"
                                                            onChange={(e) => setCustomerName(e.target.value)}
                                                        />
                                                        {error && customerName == "" ? (
                                                            <span className="text-danger">
                                                                This field is required
                                                            </span>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="form-control form-color"
                                                            placeholder="Email"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        {error && email == "" ? (
                                                            <span className="text-danger">
                                                                This field is required
                                                            </span>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label> Mobile</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="form-control form-color"
                                                            placeholder="Mobile"
                                                            onChange={(e) => setMobile(e.target.value)}
                                                        />
                                                        {error && mobile == "" ? (
                                                            <span className="text-danger">
                                                                This field is required
                                                            </span>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-color"
                                                            placeholder="Address"
                                                            onChange={(e) => setAddress(e.target.value)}
                                                        />
                                                        {error && address == "" ? (
                                                            <span className="text-danger">
                                                                This field is required
                                                            </span>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <button type="submit">Next</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )}

                                    {finalFormHide && (
                                        <div className="d-flex flex-column">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="my-profile-box">
                                                        <h3>Confirmation</h3>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="form-group">
                                                                <h3 id="address">Pet Details</h3>
                                                            </div>
                                                        </div>
                                                        <form onSubmit={finalFormOnsubmit}>
                                                            <div className="row">
                                                                <div className="col-xl-6 col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Breed</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-color"
                                                                            placeholder="Breed"
                                                                            value={breed}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-6 col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Pet Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-color"
                                                                            placeholder="Pet Name"
                                                                            value={petName}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Age</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-color"
                                                                            placeholder="Age"
                                                                            value={age}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <h3 id="address">
                                                                            Appointment Date & Time
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-6 col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Date</label>
                                                                        {console.log({ selectedDate })}
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-color"
                                                                            placeholder="Date"
                                                                            value={selectedDate}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-6 col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Time</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-color"
                                                                            placeholder="Time"
                                                                            value={selectTime}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <h3 id="address">Customer Details</h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-6 col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Customer Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-color"
                                                                            placeholder="Customer Name"
                                                                            value={customerName}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-6 col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Mobile</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-color"
                                                                            placeholder="Mobile"
                                                                            value={mobile}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Email</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-color"
                                                                            placeholder="Email"
                                                                            value={email}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Address</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-color"
                                                                            placeholder="Address"
                                                                            value={address}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <button type="submit">Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
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
            </section>
            <Footer bgColor="bg-f5f5f5" />
        </>
    );
};

export default BookAppoinment;
