import React,{ useState, useEffect }from "react";
import { Link } from "react-router-dom";
import db from '../firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';

export default function SidebarCollection({ children }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const querySnapshot = await getDocs(collection(db, 'categories'));
            const fetchedCategories = [];
            querySnapshot.forEach(doc => {
                fetchedCategories.push({ id: doc.id, ...doc.data() });
            });
            setCategories(fetchedCategories);
        };

        fetchCategories();
    }, []);


    return (
        <>
            <section className="collection_page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xl-4">
                            <div className="sidebar_tabs">
                                <div className="main_head">
                                    <h3 className="mb-3">Search</h3>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control shadow-none" placeholder="Serach product..." aria-label="Username" aria-describedby="basic-addon1" />
                                        <span className="input-group-text" id="basic-addon1">Search</span>
                                    </div>
                                </div>
                                {/* top head */}
                                <div className="sidebar_link  p-3 p-lg-4">
                                    <div class="accordion main" id="accordionExample">
                                    {categories.map((category, index) => (
                                        <div class="accordion-item  border-0" key={category.id}>
                                            <h2 class="accordion-header" id={`heading${index}`}>
                                            <button className="accordion-button bg-transparent px-0 border-0 shadow-none" type="button"
                                                    data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}
                                                    aria-expanded="true" aria-controls={`collapse${index}`}>
                                                    {category.name} ({category.subcategories.length})
                                                </button>
                                            </h2>
                                            <div id={`collapse${index}`} class="accordion-collapse collapse show" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                                <div class="accordion-body p-0 pt-3">
                                                    <ul className="list-unstyled">
                                                    {category.subcategories.map(subcat => (
                                                        <li key={subcat.id}>
                                                        <Link to="/collection" className="text-decoration-none">{subcat.name} ({subcat.count})</Link>
                                                    </li>
                                                ))}
                                                    </ul>   
                                                </div>
                                            </div>
                                        </div>
                                        ))}

                                    </div>

                                </div>
                                {/* sidebar link */}

                                <div className="product_inqury text-center py-4">
                                    <h3 className="mb-0">PRODUCT ENQUIRY</h3>
                                </div>
                                <div className="inquay_box p-3 p-lg-4">
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
                        <div className="col-md-8 col-lg-8 col-xl-8">
                            <div className="content_product">
                                <main>
                                    {children}
                                </main>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}
