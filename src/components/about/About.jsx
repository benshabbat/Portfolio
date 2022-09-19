import React from "react";
import ME from "../../assets/myFamily.jpeg";
import { FaAward } from "react-icons/fa";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Private Projects</small>
            </article>
          </div>
          <p>
            My Name is David-Chen Benshabbat i have family awesome right now we
            are 3 in family my pretty Wife and our dougther the smart and pretty
            same her mom Im want to work as FullStack Developer Im Autotidact i
            will do all for to finish the goal i have pattion to this job i sure
            you will not loose if i will be in your team and Looking for my
            first job
          </p>
          <a href="#contact" className="btn btn-primary">
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
