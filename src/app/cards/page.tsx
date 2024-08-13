import React from "react";
import "./style.css";

const Cards = () => {
    return (
        <section className="creative-cards style-one">
            <div className="container">
                <div className="row">
                    <div className="card-column">
                        <div className="card-details">
                            <div className="card-icons">
                                <img
                                    className="light-icon"
                                    src="https://imgpanda.com/upload/ib/1yIWjyG41o.png"
                                    alt="icon"
                                />
                            </div>
                            <h3>
                                <a href="https://www.fiverr.com/aliali44">
                                    Core Planning
                                </a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectne auctor
                                aliquet. Aenean sollicitudi bibendum auctor.
                            </p>
                            <a
                                className="read-more-btn"
                                href="https://www.fiverr.com/aliali44"
                                aria-label='Read more about "Core Planning"'
                            >
                                <i className="fa-solid fa-angles-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-column">
                        <div className="card-details">
                            <div className="card-icons">
                                <img
                                    className="light-icon"
                                    src="https://imgpanda.com/upload/ib/Q4tSh2ctkH.png"
                                    alt="icon"
                                />
                            </div>
                            <h3>
                                <a href="https://www.fiverr.com/aliali44">
                                    Traditional Designs
                                </a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectne auctor
                                aliquet. Aenean sollicitudi bibendum auctor.
                            </p>
                            <a
                                className="read-more-btn"
                                href="https://www.fiverr.com/aliali44"
                                aria-label='Read more about "Traditional Designs"'
                            >
                                <i className="fa-solid fa-angles-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-column">
                        <div className="card-details">
                            <div className="card-icons">
                                <img
                                    className="light-icon"
                                    src="https://imgpanda.com/upload/ib/YQdOwN6IDJ.png"
                                    alt="icon"
                                />
                            </div>
                            <h3>
                                <a href="https://www.fiverr.com/aliali44">
                                    Quality Materials
                                </a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectne auctor
                                aliquet. Aenean sollicitudi bibendum auctor.
                            </p>
                            <a
                                className="read-more-btn"
                                href="https://www.fiverr.com/aliali44"
                                aria-label='Read more about "Quality Materials"'
                            >
                                <i className="fa-solid fa-angles-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cards;
