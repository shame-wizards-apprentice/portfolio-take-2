import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Rachel Nelson-Schille</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to={"/about"}><a className="nav-link">About Me <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/projects"}><a className="nav-link">Portfolio</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/contact"}><a className="nav-link">Contact</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar