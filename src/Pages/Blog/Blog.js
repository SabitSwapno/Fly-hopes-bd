import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="my-4">
                    <h2>Here are few vlogs of some experienced tourists.</h2>
                    <h5 className="text-muted mt-3">Sometimes Adventure turns into some critical conditions <br /> & you have to know how to handle that.</h5>
                </div>
                <div className="container">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://i.ibb.co/NSmxT2T/bandarban21.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Bandarban Hill Tracks</h5>
                                    <p className="card-text">Bandarban, is a district in South-Eastern Bangladesh, and a part of the Chittagong Division.It is one of the three hill districts of Bangladesh and a part of the Chittagong Hill Tracts.Tracking in hills need a lot of energy and a strong mindset.</p>
                                    <p className="card-text"><small className="text-muted">Blog by Ms.Sumaiya</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://i.ibb.co/qs2HXQQ/0-53344400-1568725462-sunderbansgettyimages.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Sundarban Forest</h5>
                                    <p className="card-text">Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh's division of Khulna.</p>
                                    <p className="card-text"><small className="text-muted">Blog by Md. Sagor</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://i.ibb.co/kmxWPWT/1200px-Tea-garden-in-Sylhet-40349163252.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Syleth Tea Gardens</h5>
                                    <p className="card-text">Sylhet is a metropolitan city in northeastern Bangladesh. It is the administrative seat of Sylhet Division.When thousands of tea workers from Sylhet region left the tea gardens in protest of the meagre pay that they were being paid and the squalid conditions that they were made to live in.</p>
                                    <p className="card-text"><small className="text-muted">Blog by Mr. Joiee</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://i.ibb.co/K2RMjQm/4c567690cd3663ddb127dc60c27e5ae6-Tourism-1.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Cox's Bazar Sea Beach</h5>
                                    <p className="card-text">Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach. It is located 150 km (93 mi) south of the city of Chittagong. </p>
                                    <p className="card-text"><small className="text-muted">Blog by Mr. Karim</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://i.ibb.co/KjSrw01/Ecotourism-and-Green1.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Saint Martins Island</h5>
                                    <p className="card-text">St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip. It is about 8 kilometres (5 miles).</p>
                                    <p className="card-text"><small className="text-muted">Blog By Dipto</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blog;