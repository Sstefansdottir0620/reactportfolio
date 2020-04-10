import React from "react";
import Footer from "../../components/Footer/index";

function Home() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-12 my-4">
          <a className="nav-link" href="./about">
            About me
            <hr />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 my-4">
          <img
            className="profile-img"
            src="Images/stefania.png"
            alt="Stefania"
          />
        </div>
        <div className="col-sm-6 my-4">
          <p>
            My name is Stefania Stefansdottir and I want to welcome you to my
            humble portfolio. I was born and raised in Iceland, Reykjavik and
            the reason I ended up in Dallas is a long story. I can tell you once
            we know each other better. I have held many jobs in my short
            life-span. I've waited on tables, been a small time cook, worked the
            gas station, been a clerk at a small town supermarket, worked at MC
            Donalds, been a sports-camp supervisor for children, been a youth
            tennis trainer, worked the front desk at Saga Hotel, Reykjavik and
            been a flight-attendant at IcelandAir. I've also worked as a graphic
            designer both freelance and full-time in-office. I've done website
            develpoment for non-profit organizations and worked in the
            Commercial Real Estate field as an office manager and property
            manager. I probably left something out,..oh yes,..i worked one
            summer in a bakery in Oslo, Norway. It was Norways rainiest summer
            in 50 years! I also paint when I have the time to spare. I am a
            mother of two incredible boys who love soccer, music and art and
            that also keeps me on my toes as you can imagine. Having said all
            this I've probably given too mush information. My goal is to become
            successful in the WebDevelopment world as a Full Stack Web
            Developer. To reach my goal I've completed the Coding Bootcamp at
            SMU and will contoinue to learn through numerous resources
            introduced during the last 4 months.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
