import React from "react";
export default function Contact() {
    return (
        <div>
            <section className="contact_page ">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <div className="row">
                            <div className="col-md-12">
                                        <div className="head_per mb-3 mb-md-5">
                                            <h2 className="mb-4 text-capitalize">leave us a message</h2>
                                        </div>
                                    </div>
                            </div>
                            <div className="form_boxes">
                                <form className="row">
                                    <div className="col-md-12 col-lg-6 col-xl-6">
                                        <div className="form_field mb-4">
                                            <label htmlFor="" className="mb-2">Name</label>
                                            <input type="text" className="form-control shadow-none" placeholder="Enter your Name" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    {/* first name */}
                                    <div className="col-md-12 col-lg-6 col-xl-6">
                                        <div className="form_field mb-4">
                                            <label htmlFor="" className="mb-2"> Email</label>
                                            <input type="email" className="form-control shadow-none" placeholder="Enter Email" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    {/* email */}
                                    <div className="col-md-12 col-lg-6 col-xl-6">
                                        <div className="form_field mb-4">
                                            <label htmlFor="" className="mb-2"> Company Name</label>
                                            <input type="email" className="form-control shadow-none" placeholder="Enter your company name" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    {/* Company name */}
                                    <div className="col-md-12 col-lg-6 col-xl-6">
                                        <div className="form_field mb-4">
                                            <label htmlFor="" className="mb-2"> Phone Number</label>
                                            <input type="email" className="form-control shadow-none" placeholder="Enter your Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    {/* Company name */}
                                    <div className="col-md-12 col-lg-12 col-xl-12">
                                        <div className="form_field mb-4">
                                            <label htmlFor="" className="mb-2">Queries</label>
                                            <textarea className="form-control shadow-none" placeholder="Leave a comment here" style={{ height: "150px" }} id="floatingTextarea"></textarea>
                                        </div>
                                    </div>
                                    {/* Company name */}
                                    <div className="col-md-12 col-lg-12 col-xl-12">
                                        <div className="form_field mb-4">
                                            <button type="button" className="sub_mit shadow-none border-0">Submit</button>
                                        </div>
                                    </div>
                                    {/* Company name */}
                                </form>
                            </div>
                        </div>
                        {/* left side box */}
                        <div className="col-md-5 col-lg-6 col-xl-6">
                            <div className="address_box">
                                <h2 className="mb-3 text-capitalize">Reach us</h2>
                                <div className="list_address">
                                    <ul className="p-0 list-unstyled mt-3 mt-md-5 d-flex flex-wrap align-items-center">
                                        <li className="d-flex  gap-4 mb-4 w-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                            <p className="mb-0">seemapathania627@gmail.com</p>
                                        </li>

                                        <li className="d-flex  gap-4 mb-4 w-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                            <p className="mb-0">9825631452</p>
                                        </li>
                                        <li className="d-flex  gap-4 mb-4 w-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                            <p className="mb-0">ABD mohali (India)</p>
                                        </li>
                                        <li className="d-flex  gap-4 mb-4 w-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                                            <p className="mb-0">Mon - Sat: 9:00am - 5:30pm</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="map_box_main">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.994135446697!2d76.67373291464814!3d30.74287588173338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af4df0cb33d8d%3A0x9863f18e7d9a40a2!2sAB%20Digi%20Soft%20Solution%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1644324918785!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>                            </div>
                                
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>
   
        </div>
    )
}