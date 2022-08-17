import React from "react";
import {Link, Outlet} from "react-router-dom";
import useScript from "../../hooks/useScript";
import home from '../assets/img/home.svg'
import '../style.css'

export const Layout = () => {
    useScript('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
    useScript('https://cdn.startbootstrap.com/sb-forms-latest.js');
    useScript('../scripts.js');

    return (
        <div id="page-top">
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <Link to="/"> <img className='navbar-brand' src={home} alt='...'/> </Link>
                    <a className="navbar-brand" href="#page-top">DEI Empowerment Tool</a>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                            type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link to='/' className="nav-link py-3 px-0 px-lg-3 rounded">Home</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Login</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link to='admin/admin' className="nav-link py-3 px-0 px-lg-3 rounded">Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet/>

            <footer className="footer text-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                2215 John Daniel Drive
                                <br/>
                                Clark, MO 65243
                            </p>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!">
                                <i className="fab fa-fw fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i
                                className="fab fa-fw fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i
                                className="fab fa-fw fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i
                                className="fab fa-fw fa-dribbble"></i></a>
                        </div>

                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Freelancer</h4>
                            <p className="lead mb-0">
                                Freelance is a free to use, MIT licensed Bootstrap theme created by
                                <a href="http://startbootstrap.com">Start Bootstrap</a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; Your Website 2022</small></div>
            </div>

        </div>
    )
}