import React from "react";
import cabin from "../assets/img/portfolio/cabin.png";
import cake from "../assets/img/portfolio/cake.png";
import '../style.css'
import useScript from "../../hooks/useScript";
import Dropdown from 'react-bootstrap/Dropdown';

export const KnowYourRights = () => {
    useScript('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
    useScript('https://cdn.startbootstrap.com/sb-forms-latest.js');
    useScript('../scripts.js');
    const title = 'Know your rights';
    const details = 'It is important to know your rights in the workplace. To understand how you deserve to be treated, and how to advocate for yourself...';
    const item1 = 'How to Identify Oppression at Work';
    const item2 = 'How to Identify Racism at Work'

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
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 mainCategory ">
                                    <p className='text-secondary text-center'>{item1}</p>
                                </div>
                                <img className="img-fluid" src={cabin} alt="..."/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 mainCategory">
                                    <p className='text-secondary text-center'>{item2}</p>
                                </div>
                                <img className="img-fluid" src={cake} alt="..."/>
                            </div>
                        </div>
                    </div>

                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Legislation</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <Dropdown className='myDropdown'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                            width: '100%',
                            backgroundColor: '#1abc9c',
                            borderColor: '#1abc9c'
                        }}>
                            <span style={{paddingRight: '62%', fontSize: 'x-large'}}>Canadian Charter of Rights and Freedoms</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{width: '100%'}}>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='myDropdown'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                            width: '100%',
                            backgroundColor: '#1abc9c',
                            borderColor: '#1abc9c'
                        }}>
                            <span style={{
                                paddingRight: '66%',
                                fontSize: 'x-large'
                            }}>Ontario Human Rights Code (OHRC)</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{width: '100%'}}>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='myDropdown'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                            width: '100%',
                            backgroundColor: '#1abc9c',
                            borderColor: '#1abc9c'
                        }}>
                            <span style={{paddingRight: '62%', fontSize: 'x-large'}}>Accessbility for Ontario Disability (AFOD)</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{width: '100%'}}>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </section>
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1"
                 aria-labelledby="portfolioModal1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button className="btn-close" type="button" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">

                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log
                                            Cabin</h2>

                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                            </div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={cabin} alt="..."/>

                                        <p className="mb-4">How to identify oppresion at work. You should be .......</p>
                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1"
                 aria-labelledby="portfolioModal1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button className="btn-close" type="button" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">

                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log
                                            Cabin</h2>

                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                            </div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={cabin} alt="..."/>

                                        <p className="mb-4">How to identify racsim at work. You will ......</p>
                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}