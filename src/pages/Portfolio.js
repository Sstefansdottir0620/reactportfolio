import React from "react";

function Portfolio() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-12 my-4">
          <a className="nav-link" href="/portfolio">
            Portfolio
            <hr />
          </a>
        </div>
      </div>
      <div className="row justify-content-around">
        <div
          className="col-sm-5 my-3 text-center position-relative"
          id="ill-bg">
          <img
            src="Images/Vision_thumb.jpg"
            alt="Visions"
            className="img-fluid portfolio-hover"
          />
          <div
            className="position-absolute portfolio-text"
            style={{ fontWeight: "bolder", fontSize: "x-large" }}>
            <p>GRAPHIC DESIGN</p>
          </div>
        </div>
        <div
          className="col-sm-5 my-3 text-center position-relative"
          id="graphic-bg">
          <img
            src="Images/Woman_thumb.jpg"
            alt="Woman"
            className="img-fluid portfolio-hover"
          />
          <div
            className="position-absolute portfolio-text"
            style={{ fontWeight: "bolder", fontSize: "x-large" }}>
            <p>WEB</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-around">
        <div
          className="col-sm-5 my-5 text-center position-relative"
          id="web-bg">
          <img
            src="Images/Fly_thumb.jpg"
            alt="Fly-Fish"
            className="img-fluid portfolio-hover"
          />
          <div
            className="position-absolute portfolio-text"
            style={{ fontWeight: "bolder", fontSize: "x-large" }}>
            <p>ILLUSTRATION </p>
          </div>
        </div>
        <div
          className="col-sm-5 my-5 text-center position-relative"
          id="art-bg">
          <img
            src="Images/blue-faces_thumb.jpg"
            alt="blue-faces"
            className="img-fluid portfolio-hover"
          />
          <div
            className="position-absolute portfolio-text"
            style={{ fontWeight: "bolder", fontSize: "x-large" }}>
            <p>ART WORK</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
