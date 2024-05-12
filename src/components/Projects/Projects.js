import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import News from "../../Assets/Projects/News.png";
import Contactapp from "../../Assets/Projects/Firebase.png";
import CollegeERP from "../../Assets/Projects/Feereceipt.png";
import Shoes from "../../Assets/Projects/Shoes.png";
import crypto from "../../Assets/Projects/CryptoTracker.png";
import suicide from "../../Assets/Projects/blog.png";

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
              imgPath={crypto}
              isBlog={false}
              title="CryptoLens"
              description="A product developed for cryptocurrency analysis web application called CryptoLens using React.js. Utilized the CoinGecko API to fetch live data for cryptocurrency analysis.Implemented a technical feature to compare two different coins within the application. Integrated Chart.js library for visualizing cryptocurrency price trends and other data."
              ghLink="https://github.com/RoyalKing6868/CryptoCurrency-DashBoard"
              demoLink="https://crypto-dashboard-avi.netlify.app/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CollegeERP}
              isBlog={false}
              title="College ERP"
              description="Identified an inefficient manual lifecycle of fee receipt process at RAIT.
              Design automation solution, utilizing React.js for front-end
              development.
              Integrated Nodemailer to automate the emailing of fee receipts and certificates to students and staff respectively."
              ghLink="https://github.com/RoyalKing6868/Fee_Receipt_Generation_and_Validation"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shoes}
              isBlog={false}
              title="Nike.shop"
              description="Developed a dynamic shoes website utilizing React.js and Tailwind CSS. The website boasts an intuitive frontend interface brimming with comprehensive information and features designed to enhance the user experience. From showcasing an extensive collection of shoes to providing detailed product descriptions and specifications, every aspect of the frontend page is meticulously crafted to captivate and inform visitors."
              ghLink="https://github.com/RoyalKing6868/Shoes"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Contactapp}
              isBlog={false}
              title="Contact Application"
              description="
              A contact application developed using React, Tailwind CSS, and Firebase, featuring robust functionality for storing, editing, and adding new user data, ensuring efficient management and accessibility of contact information."
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/RoyalKing6868/Newscast360"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>*/}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={News}
              isBlog={false}
              title="News360°"
              description="Offers a user-friendly interface with real-time news updates.
              Allows personalized search by specific categories and preferences.
              Enhances the overall user experience for hassle-free news browsing.
              Developed with React framework for seamless performance."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            /> 
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
