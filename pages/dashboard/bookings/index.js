import Link from 'next/link';
import NavbarThree from '../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Bookings = () => {
  const [appointment, setAppointment] = useState([])
  console.log(appointment)

  useEffect(() => {
    if (typeof window != "undefined") {
      const tok = localStorage.getItem("token")
      const user = JSON.parse(localStorage.getItem("user"));
      let category = user.category;
      if (tok != null || cate != null) {
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
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <DashboardNavbar />
      <div className='main-content d-flex flex-column'>
        <NavbarThree />

        <div className='bookings-listings-box'>
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
                        <a href='#' className='default-btn danger'>
                          <i className='bx bx-x-circle'></i> Resolve
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
    </>
  );
};

export default Bookings;
