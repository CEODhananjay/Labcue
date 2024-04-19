import React from "react";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
// import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default function Product() {
  const images = [
    {
      original: "/images/slider1.jpg",
      thumbnail: "/images/slider1.jpg",
    }
  ]
  const RelatedCategory = [
    {
        img: 'slider1.jpg',
        dis: '-14%',
        productname: 'Voluptate Velit Esse',
        price: '$234',
        deleteprice: '$800,'
    },
    {
        img: 'slider1.jpg',
        dis: '-14%',
        productname: 'Voluptate Velit Esse',
        price: '$234',
        deleteprice: '$800,'
    },
    {
        img: 'slider2.jpg',
        dis: '-24%',
        productname: 'Voluptate Velit Esse',
        price: '$234',
        deleteprice: '$800,'
    },
    {
        img: 'slider3.jpg',
        dis: '-34%',
        productname: 'Voluptate Velit Esse',
        price: '$234',
        deleteprice: '$800,'
    },
    {
        img: 'slider1.jpg',
        dis: '-54%',
        productname: 'Voluptate Velit Esse',
        price: '$234',
        deleteprice: '$800,'
    }
]
  return (
    <>
      <section className="product_page">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-8 col-xl-8">
              <div className="row mb-3  mb-lg-5">
                <div className="col-md-12 col-lg-6 col-xl-5">
                  <div className="product_img">
                    <ImageGallery items={images} />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-7">
                  <div className="product_details">
                    <h2 className="mb-0">3 Station Heating Mantle</h2>
                    <h3 className="mb-0">3 Station Heating Mantle</h3>
                    <h4 className="mb-0">Features</h4>
                    <div className="des_content">
                      <p className="mb-0"> <span>MANTLE CAPACITY: </span> 100 to 5000m</p>
                      <p className="mb-0"> <span>MICROPROCESSOR BASED: </span>  provides faster reaction time</p>
                      <p className="mb-0"> <span>TEMPERATURE:  </span> upto 400°C</p>
                      <p className="mb-0"> <span>BUILT-IN SPILL PROTECTION: </span>  Safer operation and liquid recovery</p>
                      <p className="mb-0"> <span>UNIQUE DESIGN: </span> provides better stability</p>
                      <p className="mb-0"> <span>3 HEATING MANTLES: </span> save time and energy</p>
                      <p className="mb-0"> <span>BOX CONTENTS: </span> <br />Power Cord, S.S. Rod Vertical (2pcs.), S.S. Rod Horizontal (1 pc.), Adapter, Rod Holder (2 pcs.), 3-Prong, Product Manual</p>

                    </div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="description_box">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active border-0 shadow-none" id="des-tab" data-bs-toggle="tab" data-bs-target="#des-tab-pane" type="button" role="tab" aria-controls="des-tab-pane" aria-selected="true">Description</button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="des-tab-pane" role="tabpanel" aria-labelledby="des-tab" tabindex="0">
                        <div className="product_details py-4">
                          <h2 className="mb-0">3 Station Heating Mantle</h2>
                          <h3 className="mb-0">3 Station Heating Mantle</h3>
                          <h4 className="mb-0">Features</h4>
                          <div className="des_content">
                            <p className="mb-0"> <span>MANTLE CAPACITY: </span> 100 to 5000m</p>
                            <p className="mb-0"> <span>MICROPROCESSOR BASED: </span>  provides faster reaction time</p>
                            <p className="mb-0"> <span>TEMPERATURE:  </span> upto 400°C</p>
                            <p className="mb-0"> <span>BUILT-IN SPILL PROTECTION: </span>  Safer operation and liquid recovery</p>
                            <p className="mb-0"> <span>UNIQUE DESIGN: </span> provides better stability</p>
                            <p className="mb-0"> <span>3 HEATING MANTLES: </span> save time and energy</p>
                            <p className="mb-0"> <span>BOX CONTENTS: </span> <br />Power Cord, S.S. Rod Vertical (2pcs.), S.S. Rod Horizontal (1 pc.), Adapter, Rod Holder (2 pcs.), 3-Prong, Product Manual</p>

                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-5 col-lg-4 col-xl-4">
              <div className="product_inqury text-center py-4">
                <h3 className="mb-0"> ENQUIRE NOW</h3>
              </div>
              <div className="inquay_box p-2 p-md-4">
                <form className="row">
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
        </div>

      </section>
      <section className=" related_post py-3 py-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="top_cat_header mb-3 mb-md-5">
                                <h2 className="mb-0">Related Category</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="slider_box">
                                <Swiper slidesPerView={5}
                                    spaceBetween={30}
                                    breakpoints={{
                                      // when window width is >= 320px
                                      320: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                      },
                                      // when window width is >= 480px
                                      768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                      },
                                      // when window width is >= 640px
                                      1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                      },
                                      1200: {
                                          slidesPerView: 5,
                                          spaceBetween: 40,
                                        },
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    // modules={[Pagination]}
                                    className="mySwiper">
                                    {RelatedCategory.map((data, index) => {
                                        return (
                                            <SwiperSlide>
                                                <div className="top_cat">
                                                    <div className="top_new_sale d-flex align-items-center justify-content-between mb-3">
                                                        <div className="sale_head">New sale</div>
                                                        <div className="per_sale">{data.dis}</div>
                                                    </div>
                                                    {/* new sale percen */}
                                                    <div className="lab_img text-center mb-3">
                                                        <img src={`/images/${data.img}`} alt="baner_img" />
                                                    </div>
                                                    <div className="add_to_cart mb-3 d-flex align-items-center justify-content-center gap-2 pt-3">
                                                        <div className="add_cart"><button type="button" className="btn_cart shadow-none rounded-5 border-0"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></button></div>
                                                        <div className="add_cart"><button type="button" className="btn_cart shadow-none border-0"><svg style={{ fill: "var(--black)" }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg></button></div>
                                                        <div className="add_cart"><button type="button" className="btn_cart shadow-none rounded-5 border-0"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg></button></div>
                                                        <div className="add_cart"><button type="button" className="btn_cart shadow-none rounded-5 border-0"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z" /></svg></button></div>
                                                    </div>
                                                    {/* add to cart */}
                                                    {/* img */}

                                                    <div className="product_name mb-3 text-center">
                                                        <h3 className="text-capitalize mb-0">{data.productname}</h3>
                                                        <p className="text-capitalize mb-0">
                                                            Fashion has been creating well-designed collections since...
                                                        </p>
                                                    </div>
                                                    {/* product name */}
                                                    <div className="product_price gap-3 pt-2 d-flex text-center justify-content-center" style={{ borderTop: "1px solid var(--light-border)" }}>
                                                        <span>{data.price}</span>
                                                        {/* <span className="delete_price">{data.deleteprice}</span> */}
                                                    </div>
                                                    {/* price */}

                                                </div>
                                            </SwiperSlide>

                                        )
                                    })
                                    }
                                    {/* 
                                
                                 */}

                                </Swiper>


                            </div>
                        </div>
                    </div>
                </div>

       </section>

    </>
  )
}