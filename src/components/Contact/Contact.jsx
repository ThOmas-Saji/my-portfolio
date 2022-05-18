import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Let's Connect</h2>
      <div className="contact_container">
        {" "}
        <MdOutlineEmail />
        <h5> thomasms213@gmail.com</h5>
        <br />
        <BsTelephone />
        <h5> +918921679115</h5>
        <br />
        <div className="link_git">
          {" "}
          <a
            href="https://linkedin.com/in/thomas-saji-63b1421b1"
            target="_blank"
          >
            <BsLinkedin />
            <h5>Linked In</h5>
          </a>
          <a href="https://github.com/ThOmas-Saji/" target="_blank">
            <FaGithub />
            <h5>GitHub</h5>
          </a>
        </div>
      </div>
      <p className="bottom-name"> @ 2022 Thomas Saji - Kerala/Idukki</p>
    </section>
  );
};

export default Contact;
