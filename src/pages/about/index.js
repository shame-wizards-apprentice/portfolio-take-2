import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar/index"


function About() {
    return (
        <div className="about">
            <Navbar />
            <div className="container">
            <div className="row" id="about">

                <div className="col-md-8 bg-light mt-3">
                    <div className="row" id="content">
                        <div className="col-5">
                            <h1>About Me</h1>
                            <img src="/images/about-me.JPG" className="img-fluid" alt="Girl in Hat" />
                        </div>

                        <div className="col-7">
                            <p>My name is Rachel. I moved to the Seattle area in 2018 after graduating with a BFA in Technical Theatre from the University of New Mexico in Albuquerque, and have been working in the theatre industry as an actor and stage manager for around four years. Since moving to Seattle, I have worked with several different youth theatres in the area, and am lucky enough to stage manage the virtual season for Broadway Bound Children's Theatre this fall. I hope to develop web-based technology to help streamline the work theatre technicians and administrators do, and bring our industry more fully into the modern age.</p>
                            <br />
                            <p>When I'm not working or learning to code, I love to do almost anything outside. Running, hiking, and bouldering are some of my favorite activites. I also enjoy writing, baking, and board games, and most importantly, I am a slightly sub-par Plant Mom and an accomplished iPhone cat photographer.</p>
                        </div>

                    </div>

                </div>

                <div className="col-4"></div>
            </div>
        </div>
        </div>
    )
}

export default About;