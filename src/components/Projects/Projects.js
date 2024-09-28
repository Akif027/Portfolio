import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SlapAndRun from "../../Assets/Projects/SlapAndRun.png";
import Pinball from "../../Assets/Projects/Pinball.png";
import Boxing from "../../Assets/Projects/Boxing.png";
import UResort from "../../Assets/Projects/Resort.png";
import LastMan from "../../Assets/Projects/LastMan.png";
import WheelChair from "../../Assets/Projects/WheelChair.png";
import PUZZLEUP from "../../Assets/Projects/PUZZLEUP.png";
import bloodLine from "../../Assets/Projects/bloodLine.png";
import WarShip from "../../Assets/Projects/WarShip.png";
import CarCLash from "../../Assets/Projects/CarCLash.png";
import CarRace from "../../Assets/Projects/CarRace.png";
import LuckySpiner from "../../Assets/Projects/LuckySpiner.png";
function Projects() { 
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UResort}
              isBlog={false}
              title="🌴 The Ultimate Resort 🌴"
              description="The Ultimate Resort is an idle simulation management game for mobile. Developed in 8-9 days, it challenges players to manage and expand a luxury island resort. Handle resources, upgrade facilities, and keep guests happy to turn your resort into a top vacation spot."
              ghLink="https://github.com/Akif027/The-Ultimate-Resort"
              demoLink="https://www.linkedin.com/posts/akif-shaikh_unity-gamedevelopment-mobile-activity-7224871878060834816-JJKy?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WheelChair}
              isBlog={false}
              title="Wheel Chair Runner"
              description="Take on the thrilling challenge of Wheelchair Rush! Race through stunning landscapes in a high-tech, supercharged wheelchair. With quick reflexes and strategy, conquer daring jumps, fiery pits, and gravity-defying loops for an adrenaline-packed adventure!."
         //   ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.linkedin.com/posts/akif-shaikh_hypercasualgames-unity-teamwork-activity-7083816500335190017-eH2t?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Boxing}
              isBlog={false}
              title="Type To Fight!"
              description="Test your vocabulary in Type To Fight, the ultimate word puzzle game! Form as many words as possible from given letters before time runs out. Each correct word powers your boxer to punch the opponent—miss a word, and your boxer gets hit!"
            //  ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.linkedin.com/posts/akif-shaikh_hypercasualgames-mobilegames-level2games-activity-7091009469542764544-h5Hg?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SlapAndRun}
              isBlog={false}
              title="Slap And Run"
              description="Get ready for hilarious, fast-paced action in Slap and Run! Play as a mischievous character slapping people while dashing through city streets. Slap as many as you can before they catch you, but watch out—each slap raises the challenge for even wilder antics!"
             // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.linkedin.com/posts/akif-shaikh_unity-hypercasual-mobilegames-activity-7083040421798379520-InW3?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LastMan}
              isBlog={false}
              title="Last Man 2d"
              description="Embark on a thrilling adventure in Lastman2D, where you play as a resourceful astronaut fighting for survival on an alien planet. Navigate hostile terrains, battle relentless enemies, and unlock powerful abilities. Inspired by survivor.io and archero.io, Lastman2D combines strategic survival with fast-paced action in an immersive 2D world."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            demoLink="https://www.linkedin.com/posts/akif-shaikh_hypercasual-mobilegames-optimizedperformance-activity-7088907356566167552-Utz5?utm_source=share&utm_medium=member_desktop" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pinball}
              isBlog={false}
              title="Pinball Strike"
              description="Pin Ball Strike blends the excitement of pinball with the luck of plinko. Launch the ball, hit bumpers, and navigate pegs as you aim for high scores in this unique fusion of skill and chance!"
              ghLink="https://github.com/Akif027/PinBall_Plinko"
            demoLink="https://drive.google.com/file/d/1kz0nMucX8xTAPKLkAx1XGMxAegLzxMGp/view?usp=drive_link"    
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PUZZLEUP}
              isBlog={false}
              title="Puzzle Up"
              description="Puzzle Up is a unique twist on the classic match-3 puzzle genre. Combine and match pieces in new, exciting ways to solve challenging puzzles and unlock powerful bonuses!"
              ghLink="https://github.com/Akif027/PinPuzzleUp"
             demoLink="https://drive.google.com/file/d/1l455680Gf-HGEUqWsVnAbmRrqeVIOcVu/view?usp=drive_link"     
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloodLine}
              isBlog={false}
              title="Blood Line Warrior"
              description="In a world where past generations served as heroes, Kate, an ordinary girl, is chosen to be summoned. Her grandfather once sealed the demon lord, but the seal is now broken. Kate must now rise to save the world from the awakened demon lord."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WarShip}
              isBlog={false}
              title="Space Shooter"
              description="It's a thrilling space war multiplayer deathmatch game"
              ghLink="https://github.com/Akif027/Galactic-War"    
              demoLink="https://www.linkedin.com/posts/akif-shaikh_galactic-war-multiplayer-pun-heres-a-sneak-activity-7110976369244741633-Udpr?utm_source=share&utm_medium=member_desktop"     
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarCLash}
              isBlog={false}
              title="CarClashArena"
              description="Dive into vehicular chaos with Car Clash Arena, a thrilling 3D PC multiplayer game. Take control of armed war cars and engage in explosive battles across dynamic arenas. Equip your vehicle with powerful weapons and strategic power-ups to outmaneuver and defeat rivals. Only the best drivers will emerge victorious! Are you ready to dominate the battle on wheels?"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarRace}
              isBlog={false}
              title="Car Race Ultimate"
              description="Get ready for an adrenaline-pumping experience in 3D Car Race - Offline Racing Challenge! Race against AI opponents in an action-packed showdown with a wide selection of powerful cars, from nimble sports vehicles to rugged off-roaders. Find the perfect match for your driving style and hit the accelerator!"
              ghLink="https://github.com/Akif027/FastLane-Frenzy"
             demoLink="https://blogs.soumya-jit.tech/"   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LuckySpiner}
              isBlog={false}
              title="Wheelie and Plinko"
              description="Experience double the thrill with Lucky Spinner and the Plinko Betting Game! Spin the colorful wheel in Lucky Spinner for a chance to win exciting prizes, while in Plinko, drop your token down the board, bouncing through pegs to land in prize slots. Place bets on your spins and drops for added excitement in these engaging WebGL games!"
              ghLink="https://github.com/Akif027/plinko"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
