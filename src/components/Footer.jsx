import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="footer_box ">
            <footer className="footer px-md-5">
                <div className="container-fluid">
                    <div className="row mb-4 justify-content-between">
                        <div className="col-md-5 col-lg-3 col-xl-3">
                            <div className="link_box display-flrx align-items-center justify-content-center">
                                <div className="logo_box mb-2"><Link className="navbar-brand" to="/"><img src="/images/logo1.png" alt="logo" style={{height:"75px", width:"230px"}}/></Link></div>
                                <p className="mb-0" >Labcue top-of-the-line facility is spread across 24800 square meters, making it one of the largest pioneering companies that have been producing Laboratory Glassware, Hydrometers, and Thermometers for the past 40+ years at our manufacturing plant in India.</p>
                                <div className="social_links mt- mt-md-4">
                                    <ul className="list-unstyled p-0 d-flex align-items-center gap-3">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="28px" width="28px" fill="rgba(255,255,255,1)"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="28px" width="28px" fill="rgba(255,255,255,1)"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="28px" width="28px" fill="rgba(255,255,255,1)"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-3 col-xl-3">
                            <div className="link_box ps-lg-5">
                                <h3>Quick Links </h3>
                                <ul className="list-unstyled p-0 mt-3">
                                    <li className="mb-md-3 mb-1"><a href="" className="text-decoration-none">Home </a></li>
                                    <li className="mb-md-3 mb-1"><a href="" className="text-decoration-none">About Us</a></li>
                                    <li className="mb-md-3 mb-1"><a href="" className="text-decoration-none">Contact Us</a></li>
                                    <li className="mb-md-3 mb-1"><a href="" className="text-decoration-none">Products</a></li>
                                    <li className="mb-md-3 mb-1"><a href="" className="text-decoration-none">Get Dealership</a></li>
                                </ul>


                            </div>
                        </div>
                        <div className="col-md-5 col-lg-3 col-xl-3">
                            <div className="link_box ">
                                <h3>Get In Touch</h3>
                                <ul className="list-unstyled p-0 mt-3">
                                    <li className="mb-3"><a href="" className="text-decoration-none d-flex "><svg className="me-2" width="24px" height="24px" fill="rgba(255,255,255,1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg><h3>57,Gandhi nagar Behind B.D Flour mill Ambala Cantt</h3>   </a></li>
                                    <li className="mb-4"><a href="" className="text-decoration-none d-flex "><svg className="me-2" width="24px" height="24px" fill="rgba(255,255,255,1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg><h3>Labcue.scientific@gmail.com</h3></a></li>
                                    <li className="mb-3"><a href="" className="text-decoration-none d-flex "><svg className="me-2" width="24px" height="24px" fill="rgba(255,255,255,1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" /></svg><h3>+19 9876543210 (24*7)</h3> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-3 col-xl-3">
                            <div className="inquay_box ">
                                <form className="row">
                                    <div className="col-md-12">
                                        <div className="inqury_head">
                                            <h3 className="mb-2">Quick Enquiry</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input_box mb-3">
                                            <input type="text" className="form-control shadow-none " placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input_box mb-3">
                                            <input type="text" className="form-control shadow-none " placeholder="Your Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input_box mb-3">
                                            <input type="email" className="form-control shadow-none " placeholder="Your Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input_box mb-3">
                                            <input type="text" className="form-control shadow-none " placeholder="Your Country" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input_box mb-3">
                                            <textarea className="form-control shadow-none" placeholder="Your Message" id="floatingTextarea" style={{ height: "70px" }}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className=" input_box mb-3 text-center">
                                            <button className="btn_sub shadow-none border-0" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bottom_box text-center pt-3" style={{ borderTop: "1px solid var(--light-border)" }}>
                                <a href="" className="text-decoration-none">Labcue Pvt. Ltd. © 2024. All Rights Reserved</a>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}