import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar/index";
import Project from "../../components/Project/index";

function Projects() {
    return (
        <div className="projects">
            <Navbar />
            <div className="container">
            <div className="row">
                    <div className="col-6">
                        <Project
                            source="/images/despensa.png"
                            alt="Despensa landing page"
                            content="Despensa: we love food, and have opinions about yours!" />
                    </div>
                    <div className="col-6">
                        <Project
                            source="/images/advice.png"
                            alt="Sample life advice from Despensa"
                            content="Sample life advice from Despensa" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Project
                            source="/images/analysis 2.png"
                            alt="Sample re:Analysis Text Feedback"
                            content="Sample text feedback from re:Analysis" />
                    </div>
                    <div className="col-6">
                        <Project
                            source="/images/analysis 3.png"
                            alt="Sample re:Analysis Entity Feedback"
                            content="Sample entity recognition popup from re:Analysis" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Project
                        source="/images/quiz 1.png"
                        alt="A truly delightful quiz involving quotes from a certain popular annimated series."
                        content="A truly delightful quiz involving quotes from a certain popular annimated series."/>
                    </div>
                    <div className="col-6">
                        <Project
                        source="/images/weather 1.png"
                        alt="Star Trek: TNG Weather App"
                        content="Weather app uses the Open Weather API to display current weather data and a five-day forecast for the user's chosen city. Users may save their cities for easy access, or choose to simply search without placing the city on their saved list."/>
                    </div>
                </div>

                <div className="row">
                <div className="col-6"></div>
            <div className="col-12" id="links">
              <h3>...Or check them out yourself!</h3>
              <div id="deployed-app">
                <div className="col-6">
                  <h4>Deployed Application</h4>
                  <a href="https://lbalbrecht.github.io/pro-communication-analysis/" target="blank">re:Analysis</a>
                </div>

                <div className="col-6">
                  <a href="https://quiet-sands-24336.herokuapp.com/" target="blank">Despensa</a>
                </div>

                <div className="col-6">
                  <p>Follow the adorable <a href="https://twitter.com/CadoFamily" target="blank">Cado Family</a> on
                    Twitter for your daily dose of life advice from the Despensa team!</p>
                </div>

                <div className="col-6">
                  <a href="https://shame-wizards-apprentice.github.io/quiz-challenge/" target="blank">Avatar: The Last
                    Airbender
                    Quiz</a>
                </div>

                <div className="col-6">
                  <a href="https://shame-wizards-apprentice.github.io/weather-dashboard/" target="blank">Weather App</a>
                </div>
              </div>

              <div id="github-repo">
                <div className="col-6">
                  <h4>Github Repo</h4>
                  <a href="https://github.com/lbalbrecht/pro-communication-analysis" target="blank">re:Analysis</a>
                </div>

                <div className="col-6">
                  <a href="https://github.com/shame-wizards-apprentice/despensa" target="blank">Despensa</a>
                </div>

                <div className="col-6">
                  <a href="https://github.com/shame-wizards-apprentice/quiz-challenge" target="blank">Avatar: The Last
                    Airbender
                    Quiz</a>
                </div>

                <div className="col-6">
                  <a href="https://github.com/shame-wizards-apprentice/weather-dashboard" target="blank">Weather App</a>
                </div>
              </div>


            </div>
                </div>

        </div>
        </div>
    )
}

export default Projects;