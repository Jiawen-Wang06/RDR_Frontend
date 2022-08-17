import React from "react";
import {Link} from "react-router-dom";
import cabin from "../assets/img/portfolio/cabin.png";
import cake from "../assets/img/portfolio/cake.png";
import game from "../assets/img/portfolio/game.png";
import '../style.css'
import useScript from "../../hooks/useScript";

export const ViewResources = () => {
    useScript('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
    useScript('https://cdn.startbootstrap.com/sb-forms-latest.js');
    useScript('../scripts.js');

    const title = 'DEI Resources';
    const details = 'We have designed our resources to ...';
    const item1 = 'Know Your Rights';
    const item2 = 'How to have a conversation';
    const item3 = 'How to have a conversation';
    const item4 = 'Place holder';

    return (
        <div id="page-top">
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <h1>{title}</h1>
                    <p>{details}</p>
                </div>
            </header>
            <section className="page-section portfolio" id="portfolio">
                <div className="container">

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-4 mb-5">
                            <a href="/DEIEmpowermentTool/viewDEIResources.html" target="_blank">
                                <div className="portfolio-item mx-auto">
                                    <Link to='/viewResources/knowYourRights' style={{textDecoration: 'none'}}>
                                        <div
                                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 mainCategory ">
                                            <p className='text-secondary'>{item1}</p>
                                        </div>
                                        <img className="img-fluid" src={cabin} alt="..."/>
                                    </Link>

                                </div>
                            </a>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal2">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 mainCategory">
                                    <p className='text-secondary'>{item2}</p>
                                </div>
                                <img className="img-fluid" src={cake} alt="..."/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal2">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 mainCategory">
                                    <p className='text-secondary'>{item3}</p>
                                </div>
                                <img className="img-fluid" src={game} alt="..."/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal2">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 mainCategory">
                                    <p className='text-secondary'>{item4}</p>
                                </div>
                                <img className="img-fluid" src={game} alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}