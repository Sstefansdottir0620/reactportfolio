import React from "react";
// import facebook from "../../images/facebook.svg";
// import instagram from "../../images/instagram.svg";
// import linkedin from "../../images/linkedIN.svg";

function Nav() {
  return (
    <>
      <div className="row" id="nav-shadow">
        <nav className="nav-item">
          <a
            id="brand-name"
            className="navbar-brand mx-auto d-inline-block align-center"
            href="/">
            <img src="Images/Brand.png" id="brand-img" alt="brand" />
          </a>
        </nav>

        <nav className="col-lg-10 col-sm-10 p-0">
          <ul className="nav justify-content-md-end" id="nav-social-icon">
            <li className="nav-item pr-3">
              <a
                className="social-icon"
                href="https://www.instagram.com/desa_art_design/"
                target="_blank">
                <img src="Images/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li className="nav-item pr-3">
              <a
                className="social-icon"
                href="https://www.facebook.com/stefania.stefansdottir.5/"
                target="_blank">
                <img src="Images/facebook.svg" alt="facebook" />
              </a>
            </li>
            <li className="nav-item pr-3">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/stefania-stefansdottir-b0327814a/"
                target="_blank">
                <img src="Images/linkedIN.svg" alt="linkedin" />
              </a>
            </li>
          </ul>
          <ul className="nav justify-content-md-end justify-content-center">
            <li className="nav-item pr-3">
              <a className="nav-link active" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
