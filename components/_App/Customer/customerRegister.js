import react, { useEffect, useState } from "react";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import axios from "axios";
import "react-toastify/ReactToastify.min.css";
import router from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const CustomerRegister = () => {


    useEffect(() => {
        console.log("working")
    }, [otp])


    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [showLoginPassword, setShowLogingPassword] = useState(false);
    const [otpPopUp, setOtpPopUp] = useState(false);
    const [otp, setOtp] = useState("");

    const loginPasswordVisibility = () => {
        setShowLogingPassword(!showLoginPassword)
    }

    // const closePopup = () => {
    //     setOtpPopUp(!otpPopUp)
    // }

    const onSubmitOtp = async (e) => {
        e.preventDefault();
        if (name === "" && email === "" && mobile === "" && password === "") {
            setError(true);
        } else {
            try {
                const d = {
                    type: "Customer"
                }
                const { data } = await axios.post(` ${process.env.DOMAIN_NAME}/api/customer/register-otp/${mobile}`, d);
                console.log(data)
                if (data.success) {
                    setOtpPopUp(!otpPopUp);
                }
            } catch (error) {
                console.log(error)
            }
        }

    }

    const submit = async (e) => {
        e.preventDefault();
        const d = {
            customerName: name,
            email,
            mobile,
            password,
        }
        console.log(d);
        if (otp === " ") {
            setError(true);
        }
        else {
            try {
                const { data } = await axios.post(`${process.env.DOMAIN_NAME}/api/verify-otp/${otp}`, d);
                console.log(data)
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
                    setOtpPopUp(false)
                    setOtp("")
                    const user = JSON.stringify(data.customerDetails)
                    localStorage.setItem("user", user)
                    localStorage.setItem("token", data.token);
                    router.push({ pathname: `/dashboard/CustomerForm/` })
                } else {
                    setOtp("")
                    console.log(otp)
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
                console.log(error)
            }
        }
    }

    return (<>
        <div className={otpPopUp ? 'body_overlay open' : 'body_overlay'}></div>
        <div className='tab-pane' id='register'>
            <ToastContainer />
            <div className='miran-register'>
                <form onSubmit={onSubmitOtp}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Name'
                            className='form-control'
                            onChange={(e) => setName(e.target.value)}
                        />
                        {error && name == "" ? (
                            <span className="text-danger">Please Enter Name</span>
                        ) : (
                            <> </>
                        )}
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email'
                            className='form-control'
                            onChange={(e) => setEmail(e.target.value)}
                        />   {error && email == "" ? (
                            <span className="text-danger">Please Enter Email Id</span>
                        ) : (
                            <> </>
                        )}
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Mobile No'
                            className='form-control'
                            maxlength={10}
                            onChange={(e) => setMobile(e.target.value)}

                        /> {error && mobile == "" ? (
                            <span className="text-danger">Please Enter Mobile</span>
                        ) : (
                            <> </>
                        )}
                    </div>
                    <div className='form-group reset'>
                        <input
                            type={showLoginPassword ? "text" : "password"}
                            placeholder='Password'
                            className='form-control'
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
                    <button type='submit'>Register Now</button>
                </form>
                {/* <span className='already-account'>
                    Already have an account? <a href='#'>Login Now</a>
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
                    {/* <button type="button" className="close" onClick={closePopup}>
                        <i className="bx bx-x"></i>
                    </button> */}
                    <h2 className="vendor-register-head" style={{ fontSize: "20px" }}>
                        Enter OTP{" "}
                    </h2>

                    <form onSubmit={submit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="OTP"
                                className="form-control"
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            {error && otp == " " ? (
                                <span className="text-danger">Please Enter OTP</span>
                            ) : (
                                <> </>
                            )}
                        </div>
                        <button className="popup-btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}

export default CustomerRegister;