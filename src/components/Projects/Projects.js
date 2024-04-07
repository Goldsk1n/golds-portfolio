import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import pixel from "../../Assets/Projects/pixel.png";
import estate from "../../Assets/Projects/estate.png";
import commerce from "../../Assets/Projects/commerce.png";
import todo from "../../Assets/Projects/todo.png";
import ai from "../../Assets/Projects/ai.png";

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
              imgPath={commerce}
              title="Golds Commerce"
              description="Full Stack E-Commerce with Dashboard & CMS built with Next.js, React, Tailwind, and Prisma (using PostgreSQL DB). Have features which allows admin to manage categories and products, and customer to search and order different items."
              ghLink="https://github.com/Goldsk1n/golds-commerce-store"
              demoLink="https://golds-commerce-store.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              title="Golds AI"
              description="AI Platform built with Next.js and Tailwind Css that allows users not just chat with AI, but to generate Images, Videos, Code and Music. Also provides user support and paid pro tier with unlimited generations."
              ghLink="https://github.com/Goldsk1n/golds-ai"
              demoLink="https://golds-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estate}
              title="Golds Estate"
              description="Real Estate online marketplace built with MERN Stack where people can sell and rent their houses. "
              ghLink="https://github.com/Goldsk1n/golds-estate"
              demoLink="https://golds-estate.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title="Golds Weather"
              description="Weather app built with React, TypeScript and styled with Sass. User can watch the weather in any city of the world by just typing its name. Also supports user geolocation. Information fetching from the OpenWeatherMap API."
              ghLink="https://github.com/Goldsk1n/golds-weather"
              demoLink="https://golds-weather.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="Golds Todo"
              description="Simple Todo List App built with React + Redux, data is stored in LocalStorage. Features: Create, Read, Update and Delete list items; Sort by Default, Due Date or Priority; Filter by completed/incompleted; Light/Dark mode"
              ghLink="https://github.com/Goldsk1n/golds-todo"
              demoLink="https://golds-todo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pixel}
              title="Golds Pixel"
              description="Pixel Art Drawing App built with pure HTML, JS, CSS using Canvas API. Instead of scaling here I used custom drawing algorithms, so that app works blazingly fast even on old devices."
              ghLink="https://github.com/Goldsk1n/goldsk1n.github.io"
              demoLink="https://goldsk1n.github.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
