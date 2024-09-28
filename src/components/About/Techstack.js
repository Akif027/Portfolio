import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiUnitySmall, DiPhotoshop, DiPython, DiMongodb } from "react-icons/di";
import { SiCsharp, SiUnrealengine, SiBlender, SiExpress, SiReact, SiNodedotjs, SiGit } from "react-icons/si";
import { FaDatabase, FaCode } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiUnitySmall />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase /> {/* For Data Structures and Algorithms */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode /> {/* For Coding and Scripting Skills */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit /> {/* For Version Control */}
      </Col>
      {/* MERN Stack */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> {/* MongoDB */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress /> {/* Express.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact /> {/* React.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs /> {/* Node.js */}
      </Col>
    </Row>
  );
}

export default Techstack;
