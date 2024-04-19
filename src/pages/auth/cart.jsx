import React, { useState } from "react";
export default function cart() {
    const CartDetail = [
        {
            img: "slider1.jpg",
            name: "bvcdvnbvdvdnssssssssssssssssssssssssssssss",
            price: "$100",
            qty: "2",
            total: "$100"
        },
        {
            img: "slider3.jpg",
            name: "bvcdvnbvdvdnssssssssssssssssssssssssssssss",
            price: "$100",
            qty: "2",
            total: "$100"
        },
        {
            img: "slider2.jpg",
            name: "bvcdvnbvdvdnssssssssssssssssssssssssssssss",
            price: "$100",
            qty: "2",
            total: "$100"
        },
        {
            img: "slider3.jpg",
            name: "bvcdvnbvdvdnssssssssssssssssssssssssssssss",
            price: "$100",
            qty: "2",
            total: "$100"
        },
        {
            img: "slider3.jpg",
            name: "bvcdvnbvdvdnssssssssssssssssssssssssssssss",
            price: "$100",
            qty: "2",
            total: "$100"
        },
        {
            img: "slider2.jpg",
            name: "bvcdvnbvdvdnssssssssssssssssssssssssssssss",
            price: "$100",
            qty: "2",
            total: "$100"
        },
    ]
    return (
        <div>

            {/*  cart section start */}
            <section className="cart_page">
                <div className="container">
                    <div className="row">
                        <div className="cart_head mb-3 mb-md-5">
                            <h2 className="text-capitalize mb-0">your cart</h2>
                        </div>
                        <div className="col-md-12">
                            <div className="cart_table table-responsive">
                                <table class="table text-center align-middle">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{ textAlign: "start", width: "33.33%" }}>items</th>
                                            <th scope="col">price</th>
                                            <th scope="col">quantity</th>
                                            <th scope="col">total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {CartDetail.map((data, index) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="item_box d-flex align-items-center gap-3">
                                                            <div className="item_img">
                                                                <img src={`/images/${data.img}`} alt="baner_img" style={{ height: "100px", width: "100px" }} />
                                                            </div>
                                                            <div className="product_name">
                                                                <h3 className="mb-0 text-capitalize">{data.name}</h3>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{data.price}</td>
                                                    <td>{data.qty}</td>
                                                    <td>{data.total}</td>
                                                </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                                <div className="footer_bottom mb-5">
                                    <div className=" total_amount_box mb-4 d-flex align-items-center justify-content-between" style={{ width: "36%", margin: "auto", marginRight: "67px" }}>
                                        <div className="sub_head w-50 "><h3 className="mb-0">Subtotal</h3></div>
                                        <div className="total_amnt w-50 text-end "><p className="mb-0">$100.00</p></div>
                                    </div>
                                    <div className=" total_amount_box mb-4 d-flex align-items-center justify-content-between" style={{ width: "36%", margin: "auto", marginRight: "67px" }}>
                                        <div className="sub_head w-50 "><h3 className="mb-0">Total</h3></div>
                                        <div className="total_amnt w-50 text-end "><p className="mb-0">$100.00</p></div>
                                    </div>
                                </div>
                                <div className="checkout_btn text-end" style={{ width:"36%", margin: "auto" }}>
                                    <button type="button" className="btn_check shadow_none w-100"> Proceed to checkout </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* cart section end */}
        </div>
    )
}