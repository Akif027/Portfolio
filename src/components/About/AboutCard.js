import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Shaikh Akif</span> from 
            <span className="purple"> Pune, India</span>.
            <br />
            I'm a passionate Unity Game Developer with over 4 years of experience 
            on making games.
            <br />
            I hold a   <span className="purple">bachelor's degree </span> in Game Development from the 
            Backstage Pass Institute of Gaming and Technology, Hyderabad, and I've had the privilege 
            of working with various indie studios and development teams.
            <br />
            <br />
            My expertise lies in creating immersive gaming experiences using 
            <span className="purple"> Unity</span>, specializing in mobile and PC game development. 
            Additionally, I have basic knowledge in the <span className="purple">MERN stack</span>, 
            expanding my capabilities beyond game development.
            <br />
            I also have basic knowledge of <span className="purple">Blender</span> and  
            <span className="purple"> Photoshop</span>, which allows me to assist with 
            3D modeling and graphic design when necessary.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shaikh Akif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
