import React, { useEffect } from "react";

const HowItWorks = ({
	openCustomer,
	openBusiness,
	openBusinessPopup,
	openCustomerPopup,
}) => {
	useEffect(() => {
		console.log(openCustomer);
		console.log(openBusiness);
	}, []);

	return (
		<>
			{/* <div className="row mx-1">
				<div className="col-lg-1 col-sm-6 col-md-4">
					<section></section>
				</div>
				<div className="col-lg-10 col-sm-12 col-md-12"> */}
			<section className='joinUs-section'>
				<div class="how-wrks">
					<div class="home-tit">
						<h2>
							<span>How It Works</span>
						</h2>
						<p>
							Beyond Love provides free online business listing <br />
							services and a new way to brand yourself on the internet.
						</p>
					</div>
					<div class="how-wrks-inn">
						<ul>
							<li>
								<div>
									<span>1</span>
									<img src='/images/lead.png' alt='image' />
									<h4>Create an account</h4>
									<p>
										Create your account with Beyond Love to reach out to millions of people by connecting with new customers.
									</p>
								</div>
							</li>
							<li>
								<div onClick={openBusinessPopup}>
									<span>2</span>
									<img src='/images/addBusiness.png' alt='image' />
									<h4>Add your business</h4>
									<p>
										Beyond Love provides free online business listing services and a new way to brand yourself on the internet.
									</p>
								</div>
							</li>
							<li>
								<div>
									<span>3</span>
									<img src='/images/createAccount.png' alt='image' />
									<h4>Get more leads</h4>
									<p>
										Get your business verified with Beyond Love so that we can provide you more traffic and leads for your business.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			{/* </div> */}
			{/* <section className={`how-it-works-area pt-100 pb-70 ${bgColor}`}>
            <div className='container'>
              <div className='section-title'>
                <h2>How It Works</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                  ipsum suspendisse ultrices gravida. Risus commodo viverra.
                </p>
              </div>

              <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-6'>
                  <div className='single-how-it-works-box'>
                    <div className='icon'>
                      <i className='flaticon-placeholder'></i>
                    </div>
                    <h3>Find Interesting Place</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-6'>
                  <div className='single-how-it-works-box'>
                    <div className='icon'>
                      <i className='flaticon-support-1'></i>
                    </div>
                    <h3>Contact a Few Owners</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>

                <div
                  className='
              col-lg-4 col-md-6 col-sm-6
              offset-lg-0 offset-md-3 offset-sm-3
            '
                >
                  <div className='single-how-it-works-box'>
                    <div className='icon'>
                      <i className='flaticon-tick'></i>
                    </div>
                    <h3>Make a Reservation</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

			{/* // 	<div className="col-lg-1 col-sm-6 col-md-4">
			// 		<section></section>
			// 	</div>
			// </div> */}
		</>
	);
};

export default HowItWorks;
