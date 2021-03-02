import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar/index"

function Contact() {
    return (
        <div className="contact">
            <Navbar />
            <div className="container">
            <div className="row">
              <div className="col-md-8 bg-light mt-3">
                  <h2>Find me on:</h2>
                  <a href="https://www.linkedin.com/in/rachel-nelson-schille-6911171bb/" target="blank">LinkedIn</a>
                  <br/>
                  <a href="https://github.com/RachelNS" target="blank">Github</a>
                  <h2 id="form-head">Or, drop a message below:</h2>
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1" id="name">Name</label>
                        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                      </div>
                    <div className="form-group">
                      <label for="exampleFormControlInput1" id="email">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1" id="example">Example textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <a id="form-button" href="https://cat-bounce.com/" target="blank">Submit </a>
                  </form> 
              </div>

              <div className="col-4"></div>
          </div>

        </div>
        </div>
    )
}

export default Contact;