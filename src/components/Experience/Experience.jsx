import React from "react";
import "./Experience.css";
import { DiMongodb } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpressvpn } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h2>What Skills I Have</h2>

      <div className="constainer experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiOutlineHtml5 className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light"></small>
              </div>{" "}
            </article>
            <article className="experience_details">
              <DiCss3 className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"></small>
              </div>{" "}
            </article>
            <article className="experience_details">
              <SiJavascript className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light"></small>
              </div>{" "}
            </article>
            <article className="experience_details">
              <FaReact className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light"></small>
              </div>{" "}
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <DiMongodb className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light"></small>
              </div>{" "}
            </article>
            <article className="experience_details">
              <FaNodeJs className="experience_details-icon" />
              <div>
                <h4>Node js</h4>
                <small className="text-light"></small>
              </div>{" "}
            </article>
            <article className="experience_details">
              <SiExpressvpn className="experience_details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience_details">
              <SiMysql className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
