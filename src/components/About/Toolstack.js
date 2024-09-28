import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiGithub, SiUnity, SiTrello, SiWindows, SiMongodb, SiBlender, SiFigma, SiAdobephotoshop, SiUnrealengine } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows /> {/* OS Tool */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* Code Editor */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* Version Control */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity /> {/* Game Engine */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender /> {/* 3D Modeling Tool */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb /> {/* Database for MERN */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello /> {/* Project Management */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> {/* Design and Prototyping */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop /> {/* Photoshop for 2D/3D Game Assets */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine /> {/* Game Engine */}
      </Col>
    </Row>
  );
}

export default Toolstack;
