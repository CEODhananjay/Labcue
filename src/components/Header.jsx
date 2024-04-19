import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div>
            <header className="header_section">
                <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg p-0">
                  <div className="main_box_nav">
                    <div className="upper_top_div text-center p-2">
                        <p className="m-0">World's Fastest Online Shopping Destination</p>
                    </div>
                    {/* free shipping custom content */}
                        <div className="top_navbar d-flex align-items-center justify-content-between py-3 px-3 px-lg-5">
                        <div className="logo_box"><Link className="navbar-brand" to="/"><img src="/images/logo1.png" alt="logo" style={{height:"75px", width:"230px"}}/></Link></div>
                            <button className="navbar-toggler border-0 p-0  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                          
                        {/* logo */}
                           <div className="search_box">
                               <div className="input-group ">
                                    <input type="text" className="form-control shadow-none border-0" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    <span className="input-group-text border-0 p-1" id="basic-addon1">
                                      <select class="form-select border-0 shadow-none" aria-label="Default select example">
                                            <option selected>Demo Text</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <button type="button" className="butn_search shadow-none border-0"><svg className="me-2" height="15px" width="15px" style={{fill:'var(--white)'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>Search</button>
                                    </span>
                                </div>
                            </div>
                        {/* search box */}
                        <div className="button_group d-flex align-items-center gap-3">
                            <button type="button" className="signin_btn border-0 shadow-none"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>Sign In</button>
                            <button type="button" className="cart_btn border-0 shadow-none"><svg className="me-2" style={{fill:"var(--white)"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> Cart
                            <span className="cart_no">  1</span>
                            </button>   
                        </div>
                        </div>
                        {/* top navbar */}
                        <div className="menudata_list">
                            <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/collection">Catalog</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/Product">Product</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </li> */}
                            </ul>
                            </div>
                        </div>
                        {/* bottom menu */}
                  </div>
                </nav>
                </div>
            </header>
            {/* header section end */}

        </div>
    )
}