import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Swarup Hande </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently employed as a Programmer Analyst Trainee at Cognizant.
            <br />
            I have completed Bachelors of Engineering (B.E.) in Electronics and Telecommunication at RAIT.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Technical Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Unknown Places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Swarup</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
