import React from "react";
export default function resetpassword() {
    return (
        <>
            <section className="auth_pages">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10 col-xl-8">
                            <div className="login_box">
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="auth_img">
                                          <img src="/images/reset.png" alt="" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="heading_box text-center mb-3 mb-md-4 mb-xl-5">
                                    <h2 className="mb-0">Reset Password</h2>
                                </div>
                                <form className="row form_box justify-content-center">
                                    <div className="col-md-10">
                                        <div className="form_box mb-3">
                                        <label for="floatingInput">Password</label>
                                            <input type="password" className="form-control shadow-none" id="floatingInput" placeholder="" />    
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="form_box mb-5">
                                        <label for="floatingInput">Confirm Password</label>
                                            <input type="password" className="form-control shadow-none" id="floatingInput" placeholder="" />    
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <div className="btn_box mb-4">
                                            <button type="button" className="btn_main w-100 shadow-none">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                        
                                    </div>
                                </div>
                              
                                {/* form box end  */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}