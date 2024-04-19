import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <>
            <section className="auth_pages">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10 col-xl-8">
                            <div className="login_box">
                            <div className="row align-items-center">
                                <div className="col-md-5 col-lg-6 col-xl-5">
                                    <div className="auth_img">
                         <img src="/images/signup.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                               <div className="col-md-7 col-lg-6 col-xl-7">
                                <div className="heading_box text-center mb-3 mb-md-4 mb-xl-5">
                                    <h2 className="mb-0">Create Account</h2>
                                </div>
                                <form className="row form_box justify-content-center">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="form_box mb-3">
                                            <label for="floatingInput">Full Name</label>
                                            <input type="text" className="form-control shadow-none" id="floatingInput" placeholder="Demo" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="form_box mb-3">
                                            <label for="floatingInput">Email Addres</label>
                                            <input type="email" className="form-control shadow-none" id="floatingInput" placeholder="name@example.com" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="form_box mb-3">
                                            <label for="floatingInput">Password</label>
                                            <input type="password" className="form-control shadow-none" id="floatingInput" placeholder="**********" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="form_box mb-3">
                                            <label for="floatingInput">Confirm Password</label>
                                            <input type="password" className="form-control shadow-none" id="floatingInput" placeholder="**********" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="form_box mb-3">
                                        <label for="floatingInput">Phone Number</label>
                                            <input type="text" className="form-control shadow-none" id="floatingInput" placeholder="Demo" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="form_box mb-3  mb-md-5">
                                        <label for="floatingInput">Address</label>
                                            <input type="text" className="form-control shadow-none" id="floatingInput" placeholder="Demo" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="btn_box mb-4">
                                            <button type="button" className="btn_main w-100 shadow-none">Signup</button>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="form_box mb-3 mb-md-5 text-center">
                                            <h3 className="mb-0  text-capitalize" > already have an account?  <Link to="/login"> Login</Link>  </h3>
                                        </div>
                                    </div>
                                </form>
                                {/* form box end  */}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}