import Link from 'next/link';
import NavbarThree from '../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';
import axios from 'axios';
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Bookings = () => {
  const [appointment, setAppointment] = useState([])
  const [dateTimeShow, setDateTimeShow] = useState(false);
  const [reschedule, setReschedule] = useState(false)
  const [selectTime, setSelectTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [backGroundColor, setBackGroundColor] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState("")
  const [rescheduleId, setRescheduleId] = useState("")
  console.log(appointment)

  useEffect(() => {
    if (typeof window != "undefined") {
      const tok = localStorage.getItem("token")
      const user = JSON.parse(localStorage.getItem("user"));
      let category = user.category;
      if (tok != null || cate != null) {
        setToken(tok)
        getAppoitment(category, tok);
      }
    }
    else {
      console.log("we area running server side")
    }
  }, []);

  const getAppoitment = async (category, token) => {
    try {
      const { data } = await axios.get(`${process.env.DOMAIN_NAME}/api/business/get-appointment/${category}/${token}`)
      console.log(data)
      setAppointment(data.appointments)
      // setCategory(data.)
    } catch (error) {
      console.log(error)
    }
  }

  const reschedulePopup = (id) => {
    setRescheduleId(id)
    console.log(id, rescheduleId)
    if (id === rescheduleId) {
      setReschedule(true);
    }
  }

  const rescheduleClosePopup = () => {
    setReschedule(!reschedule);
  }

  const selectOnclickTime = (time) => {
    setSelectTime(time);
    setBackGroundColor(true);
  }

  const rescheduleOnsubmit = async (e, category, id) => {
    e.preventDefault();
    const d = {
      date: selectedDate,
      time: selectTime,
    };
    console.log(d)
    if (selectedDate == null || selectTime == "" || selectTime == undefined) {
      setError(true)
    } else {
      try {
        console.log(category, id)
        const { data } = await axios.put(`${process.env.DOMAIN_NAME}/api/business/reschedule-appointment/${category}/${id}/${token}`, d);
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
          setReschedule(!reschedule);
          selectedDate(null)
          selectTime("")
          e.target.reset();
          window.location.reload(true);
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
        console.log(error)
      }
    }
  }

  return (
    <>
      <div className={reschedule ? "body_overlay open" : "body_overlay"}></div>
      <DashboardNavbar />
      <div className='main-content d-flex flex-column'>
        <NavbarThree />

        <div className='bookings-listings-box'>
          <ToastContainer />
          <h3>Your Appointment</h3>

          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Customer Details</th>
                  <th>Pet Details</th>
                  <th>Appointment Date & Time</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {appointment.map((app) => {
                  console.log(app)
                  let day = app.date;
                  let day1 = new Date(day)
                  let day2 = day1.toString()
                  let date = day2.split(" ", 4)
                  return (
                    <tr>
                      <td className='details'>
                        <img src='/images/user1.jpg' alt='image' width={80} height={80} />
                        <ul>
                          <li>
                            <span>Name :</span>{" "}{app.name}
                          </li>
                          <li>
                            <span>Email :</span>{" "}{app.email}
                          </li>
                          <li>
                            <span>Mobile :</span>{" "}{app.mobile}
                          </li>
                          <li>
                            <span>Address :</span>{" "}{app.address}
                          </li>
                        </ul>
                      </td>

                      <td className='details'>
                        <ul>
                          <li>
                            <span>Breed :</span>{" "}{app.petBreed}
                          </li>
                          <li>
                            <span>Pet Name :</span>{" "}{app.petName}
                          </li>
                          <li>
                            <span>Pet Age :</span>{" "}{app.petAge}
                          </li>
                        </ul>
                      </td>

                      <td className='details'>
                        <ul>
                          <li>
                            <span>Date :</span>{" "}{date[0]} {date[1]} {date[2]} {date[3]}
                          </li>
                          <li>
                            <span>Time :</span>{" "}{app.time}
                          </li>
                        </ul>
                      </td>
                      <td className='action'>
                        <a href='#' className='default-btn'>
                          <i className='bx bx-check-circle'></i> Approve
                        </a>
                        <a href='#' className='default-btn danger' onClick={() => reschedulePopup(app._id)}>
                          <i className='bx bx-x-circle'></i> Reschedule
                        </a>
                      </td>
                    </tr>
                  )
                })}


              </tbody>
            </table>
          </div>
        </div>

        <div className='flex-grow-1'></div>

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


      <div
        className={
          reschedule
            ? "modal loginRegisterModal show"
            : "modal loginRegisterModal"
        }
        id="loginRegisterModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="close" onClick={rescheduleClosePopup}>
              <i className="bx bx-x"></i>
            </button>
            {appointment.map((app) => {
              return (
                {
                  app._id == rescheduleId && (<div>
                    <form onSubmit={(e) => rescheduleOnsubmit(e, app.category, app._id)}>
                      <h3 style={{ textAlign: "center" }}>Reschedule Date & Time</h3>
                      <hr />
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Select Date</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label="Date"
                                value={selectedDate}
                                onChange={(newValue) => {
                                  setSelectedDate(newValue);
                                  setDateTimeShow(true);
                                }}
                                disablePast={true}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>

                            {error && selectedDate == null ? (
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
                                <p
                                  className={backGroundColor && selectTime === "09:00 - 10:00" ? "activeBackGround" : ""}
                                  onClick={() =>
                                    selectOnclickTime("09:00 - 10:00")
                                  }
                                >
                                  09:00 - 10:00
                                </p>
                                <p
                                  className={backGroundColor && selectTime === "10:30 - 12:00" ? "activeBackGround" : ""}
                                  onClick={() =>
                                    selectOnclickTime("10:30 - 12:00")
                                  }
                                >
                                  10:30 - 12:00
                                </p>
                                <p
                                  className={backGroundColor && selectTime === "13:00 - 14:00" ? "activeBackGround" : ""}
                                  onClick={() =>
                                    selectOnclickTime("13:00 - 14:00")
                                  }
                                >
                                  13:00 - 14:00
                                </p>
                                <p
                                  className={backGroundColor && selectTime === "15:00 - 16:00" ? "activeBackGround" : ""}
                                  onClick={() =>
                                    selectOnclickTime("15:00 - 16:00")
                                  }
                                >
                                  15:00 - 16:00
                                </p>
                                <p
                                  className={backGroundColor && selectTime === "17:00 - 18:00" ? "activeBackGround" : ""}
                                  onClick={() =>
                                    selectOnclickTime("17:00 - 18:00")
                                  }
                                >
                                  17:00 - 18:00
                                </p>
                              </div>
                              {error && selectTime == "" ? (
                                <span className="text-danger">
                                  This field is required
                                </span>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        )}

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <button type="submit" className='reschedule-btn'>
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>)
                }
              )
            })}
          </div>
        </div>
      </div>

    </>
  );
};

export default Bookings;
