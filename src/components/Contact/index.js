import React from "react";

function Contact() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-12 my-4">
          <a className="nav-link" id="h1" href="#" />
          Contact
        </div>
      </div>
      <form>
        <div className="row">
          <div className="col-sm-12">
            <label for="formGroupExampleInput" />
            Name
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col-sm-12 my-4">
            <label for="formGroupExampleInput" />
            Email
            <input
              type="text"
              className="form-control"
              placeholder="sstefansdottir@me.com"
            />
          </div>
          <div className="form-group col-sm-12">
            <label for="formGroupExampleInput" />
            Message
            <input
              type="text"
              id="message"
              className="form-control text-center"
              id="formGroupExampleInput"
            />
          </div>
        </div>
      </form>
    </main>
  );
}

export default Contact;
