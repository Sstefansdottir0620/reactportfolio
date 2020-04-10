import React from "react";

function Header() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-2 col-sm-2">
          <nav className="navbar">
            <a
              id="brand-name"
              className="navbar-brand mx-auto d-inline-block align-center"
              href="#"
            />
            <img
              src="Images/Brand.png"
              id="img"
              width="125"
              height="175"
              alt="Stefania"
            />
          </nav>
        </div>
        <nav className="col-lg-10 col-sm-10">
          <ul className="nav justify-content-md-end justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="./portfolio.html">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./index.html">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact.html">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
