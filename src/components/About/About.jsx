import React from "react";
import "./About.css";
import ME from "../../Assets/MeO.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <p>
            Passionate full-stack web developer adept at integrating front-end
            and back-end based applications. Experienced in developing web pages
            using HTML, CSS and JavaScript. Ambitious and self-motivated, with
            considerable technical skills who possesses self- discipline and
            ability to work with minimum supervision. A quick learner who can
            absorb new ideas and communicate clearly and effectively to create
            websites with enhanced user experience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
