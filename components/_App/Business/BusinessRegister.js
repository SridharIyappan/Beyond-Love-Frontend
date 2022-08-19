import axios from "axios";
import react, { useState } from "react";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import { useDispatch } from "react-redux";
import { addBusiness } from "../../../Redux/businessSlice";
import "react-toastify/ReactToastify.min.css";
import router from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const BusinessRegister = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [showLoginPassword, setShowLogingPassword] = useState(false);
  const [otpPopUp, setPopUp] = useState(false);
  const [otp, setOtp] = useState("");

  let dispatch = useDispatch();

  const loginPasswordVisibility = () => {
    setShowLogingPassword(!showLoginPassword)
  }

  // const closeOtpPopup = () => {
  //   setPopUp(!otpPopUp)
  // }

  const onSubmitOtp = async (e) => {
    e.preventDefault();
    if (
      businessName === "" ||
      email === "" ||
      mobile === "" ||
      password === "" ||
      category === ""
    ) {
      setError(true);
    } else {
      try {
        const d = {
          type: "Business"
        }
        const { data } = await axios.post(`${process.env.DOMAIN_NAME}/api/business/register-otp/${category}/${mobile}`, d);
        console.log(data)
        if (data.success) {
          setPopUp(!otpPopUp);
        }
      } catch (error) {
        console.log(error)
      }
    }

  }

  const BusinessRegisterOnSubmit = async (e) => {
    e.preventDefault();
    const d = {
      businessName,
      email,
      mobile,
      password,
      category,
    };
    if (otp === "") {
      setError(true);
    } else {
      try {
        const { data } = await axios.post(
          `${process.env.DOMAIN_NAME}/api/verify-otp/${otp}`, d);
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
          const user = JSON.stringify(data.businessDetails);
          localStorage.setItem("user", user);
          localStorage.setItem("token", data.token);
          dispatch(addBusiness(data.businessDetails));
          setPopUp(false)
          setOtp("")
          const cate = (data.businessDetails.category.toLowerCase());
          router.push({ pathname: `/dashboard/category/${cate}` });
        } else {
          setOtp("")
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

  return (
    <>  <div className={otpPopUp ? 'body_overlay open' : 'body_overlay'}></div>
      <div className="tab-pane" id="register">
        <ToastContainer />
        <div className="miran-register">
          <form onSubmit={onSubmitOtp}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Business Name"
                className="form-control"
                onChange={(e) => setBusinessName(e.target.value)}
              />
              {error && businessName == "" ? (
                <span className="text-danger">Please Enter Name</span>
              ) : (
                <></>
              )}
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && email == "" ? (
                <span className="text-danger">Please Enter Email</span>
              ) : (
                <></>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Mobile"
                className="form-control"
                onChange={(e) => setMobile(e.target.value)}
              />
              {error && mobile == "" ? (
                <span className="text-danger">Please Enter Mobile Number</span>
              ) : (
                <></>
              )}
            </div>

            <div className="form-group reset">
              <input
                type={showLoginPassword ? "text" : "password"}
                placeholder="Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showLoginPassword ? (<AiOutlineEye
                className="password-icon"
                onClick={loginPasswordVisibility}
              />) : (
                <AiOutlineEyeInvisible
                  fill="grey"
                  className="password-icon"
                  onClick={loginPasswordVisibility}
                />)}
              {error && password == "" ? (
                <span className="text-danger">Please Enter Password</span>
              ) : (
                <> </>
              )}
            </div>

            <div className="form-group">
              <select
                className="dashbaord-category-select"
                placeholder="Select the state"
                style={{ background: "none" }}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Category</option>
                <option value="PetClinic">Pet Clinic</option>
                <option value="PetGrooming">Pet Grooming</option>
                <option value="PetBoarding">Pet Boarding</option>
                <option value="PetTraining">Pet Training</option>
                {/* <option value="PetFood">Pet Food</option> */}
              </select>
              {error && category.length == "" ? (
                <span className="text-danger">Please Select Category</span>
              ) : (
                <></>
              )}
            </div>

            <button type="submit">Register</button>
          </form>
          {/* <span className="already-account">
            Already have an account? <a href="#">Login Now</a>
          </span> */}
        </div>
      </div>


      {/* ------------ OTP section ------- */}
      <div
        className={
          otpPopUp
            ? "modal loginRegisterModal show scroll-popup"
            : "modal loginRegisterModal"
        }
        id="loginRegisterModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <button type="button" className="close" onClick={closeOtpPopup}>
              <i className="bx bx-x"></i>
            </button> */}
            <h2 className="vendor-register-head" style={{ fontSize: "20px" }}>
              Enter OTP{" "}
            </h2>

            <form onSubmit={BusinessRegisterOnSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="OTP"
                  className="form-control"
                  onChange={(e) => setOtp(e.target.value)}
                />
                {error && otp == "" ? (
                  <span className="text-danger">Please Enter OTP</span>
                ) : (
                  <></>
                )}
              </div>
              <button className="popup-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessRegister;
