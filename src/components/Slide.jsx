import React from "react";
import "../styles/Slide.css";

function Slide() {
    return (
        <section id="slide">
            <div className="slide-wrapper">
                <div
                    className="slide-content"
                    data-aos="fade-up"
                    data-aos-offset="300"
                >
                    <div className="img-container">
                        <img alt="frame" src="./assets/images/frame.png" />
                    </div>
                    <div className="text-content">
                        <h3>We Are Arranging Our Son's Wedding</h3>
                        <h1>Save Our Date</h1>
                        <p>
                            22<sup>nd</sup> February, 2023
                        </p>
                    </div>
                </div>
                <img
                    className="wheel wheel-top-left"
                    src="../assets/images/wheel.png"
                    alt="Wheel"
                />
                <img
                    className="wheel wheel-bottom-right"
                    src="../assets/images/wheel.png"
                    alt="Wheel"
                />
                <div
                    className="slide-content my-5"
                    data-aos="fade-up"
                    data-aos-offset="300"
                >
                    <div
                        id="slide-carousel-indicators"
                        className="carousel slide"
                        data-interval="2000"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#slide-carousel-indicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#slide-carousel-indicators"
                                data-slide-to="1"
                            ></li>
                            <li
                                data-target="#slide-carousel-indicators"
                                data-slide-to="2"
                            ></li>
                            {/*     <li
                                    data-target="#slide-carousel-indicators"
                                    data-slide-to="3"
                                ></li>
                                <li
                                    data-target="#slide-carousel-indicators"
                                    data-slide-to="4"
                                ></li>
                                <li
                                    data-target="#slide-carousel-indicators"
                                    data-slide-to="5"
                                ></li>
                                <li
                                    data-target="#slide-carousel-indicators"
                                    data-slide-to="6"
                                ></li> */}
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/couple1.jpg"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/couple2.jpg"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/couple3.jpg"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#slide-carousel-indicators"
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
                            href="#slide-carousel-indicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slide;
