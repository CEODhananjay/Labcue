import React from "react";
export default function About(){
    return(
        <>
        <section className="baner_about py-5 d-flex align-items-end ">
            <div className="container">
                <row className="row justify-content-center">
                  <div className="col-md-12">
                       <div className="banner_box_about text-center">
                         <h2>Your Partner in Scientific Advancement</h2>
                         <a href="#second_section"><h3><svg height="30px" fill="rgba(255,255,255,1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg></h3></a>   
                       </div>
                  </div>
                </row>
            </div>
        </section>



        <section  id="second_section"  className="about_page pt-3 pt-lg-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8">
                    <div className="row justify-content-between">
                    <div className="col-md-12 col-lg-6 col-xl-7">
                        <div className="about_head  py-3 py-lg-5">
                            <h2 className="mb-0 text-capitalize mb-3 mb-md-4">Who are we?</h2>
                            <p className="mb-0 pt-2 pt-md-0 pt-lg-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-5">
                            {/* Image with content */}
                            <div className="image_with_content mt-3 mt-lg-5 text-end">
                                <img data-aos={"fade-left"}  src="/images/Screenshot.png" className="img-fluid" alt="Description of image" style={{height:"300px", width:"100%"}}/>
                            </div>
                  </div>
                   
                  {/* how we are */}
                </div>  
                    </div>
                </div>
                
                <div className="row justify-content-center mt-3 mt-lg-5">
                    <div className="col-md-8">
                    <div className="row justify-content-center">
                <div className="col-md-12 col-lg-12 col-xl-12">
                            {/* Image with content */}
                            <div className="image_with_content mt-3 mt-lg-5 text-center">
                                <div className="text-start img_head">
                                  <h3 className="mb-0 text-capitalize mb-3">Glimpses of life at Labcue</h3>
                                </div>
                                <img src="/images/Screenshot.png" className="img-fluid" alt="Description of image" />
                            </div>
                  </div>
                </div>
                    </div>
                </div>
               
            </div>

        </section>
        {/* About section end */}
        </>
    )
}