import React, { useEffect } from 'react';
import Link from 'next/link';

const EventsArea = ({ openCustomer, openBusiness, openBusinessPopup, openCustomerPopup }) => {
  useEffect(() => {

    console.log(openCustomer)
    console.log(openBusiness)
  }, []);

  return (
    <>
      <div className="row mx-1">
        <div className="col-lg-1 col-sm-6 col-md-4">
          <section>

          </section>
        </div>
        <div className="col-lg-10 col-sm-12 col-md-12">
          <section className='joinUs-section'>
            <div class="str">
              <div class="container">
                <div class="row">
                  <div class="home-tit">
                    <h2><span>Join us Now</span></h2>
                    <p>We connect with targeted customers for greater business conversion</p>
                  </div>
                  <div class="hom2-hom-ban-main">
                    <div class="hom2-hom-ban hom2-hom-ban1">
                      <h2>Are you a business owner?</h2>
                      <p>Update your business details including services, about, contact details payment options and more.</p>
                      {/* <a>Add my business</a> */}
                      <button onClick={openBusinessPopup}>Add my business</button>
                    </div>
                    <div class="hom2-hom-ban hom2-hom-ban2">
                      <h2>Are you looking for service?</h2>
                      <p>Get everything in your pocket, What service do you need? Beyond Love will help you.</p>
                      {/* <a>Create an account</a> */}
                      <button onClick={openCustomerPopup}>Create an account</button>
                    </div>
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

export default EventsArea;
