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
            Hi, my name is Chen David Benshabbat, 28 years old, married plus
            one, Has a software engineer certificate, I am a person who likes to
            solve complicated problems and show my ways in creative ways, I
            developed a passion for coding myself, A day I didn't learn
            something new was a waste, I have a tendency to make mistakes
            sometimes and most of the knowledge I remember after I made a
            mistake.
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
