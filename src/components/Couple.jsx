import React from "react";
import "../styles/Couple.css";

function Couple() {
    return (
        <section id="couple">
            <div className="couple-wrapper">
                <h1 className="title-quote">
                    Happy Couple Going To Be Married
                </h1>

                <div className="row">
                    <div className="col-lg-5" data-aos="fade-up">
                        <div
                            id="carouselIndicators"
                            className="carousel slide"
                            data-interval="2000"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="0"
                                    className="active"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="1"
                                ></li>
                                {/* <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="2"
                                ></li> 
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="3"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="4"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="5"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="6"
                                ></li> */}
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/groom1.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/groom2.jpeg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                {/* <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/groom.png"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div> */}
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselIndicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselIndicators"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </a>
                            <img
                                className="flower groom-flower"
                                src="../assets/images/golden-rose.png"
                                alt="flower"
                            />
                        </div>
                        <div className="info groom-info">
                            <h3>
                                M. Naga Sumanth,
                                {/* <sub>B.Tech.,</sub> */}
                            </h3>
                            {/* <p className="mt-2 mt-lg-3">
                                Profession: <strong>Works at FLUOR,</strong>{" "}
                                KSA.
                            </p> */}
                            <p className="mt-2 mt-lg-3">
                                S/O Srimati{" "}
                                <strong>M. Sulochana Rani and</strong>
                            </p>
                            <p className="mt-1 mt-lg-2">
                                Sri <strong>M. Damodar Krishna.</strong>
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-2"
                        data-aos="zoom-out "
                        data-aos-delay="300"
                    >
                        <img
                            className=" heart-mid"
                            src="../assets/images/heart.png"
                            alt="heart_img"
                        />
                    </div>
                    <div className="col-lg-5" data-aos="fade-up">
                        <div
                            id="bride-carousel-indicators"
                            className="carousel slide"
                            data-interval="2000"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="0"
                                    className="active"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="1"
                                ></li>
                                {/* <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="2"
                                ></li> */}
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/bride1.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/bride2.jpeg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                {/* <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/bride.png"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div> */}
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#bride-carousel-indicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#bride-carousel-indicators"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </a>
                            <img
                                className="flower bride-flower"
                                src="../assets/images/golden-rose.png"
                                alt="flower"
                            />
                        </div>
                        <div className="info bride-info">
                            <h3>
                                N. Sarada,
                                {/* <sub>MBA.,</sub> */}
                            </h3>

                            <p className="mt-2 mt-lg-3">
                                D/O Srimati{" "}
                                <strong>N. Shakuntala and</strong>
                            </p>
                            <p className="mt-1 mt-lg-2">
                                Sri <strong>N. Bojaraju.</strong>
                            </p>
                            <p className="mt-1 mt-lg-2">
                                Anantapuram.
                            </p>
                            {/* <p className="mt-1 mt-lg-2">
                                D/O <strong>Shaikh Nazeer Ahmed.</strong>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
