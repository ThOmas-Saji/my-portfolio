import React from "react";
import "./Portfolio.css";
import HM from "../../Assets/HandM.png";
import MM from "../../Assets/MamaE.png";
import WF from "../../Assets/Weather.png";
import BC from "../../Assets/book_club.png"

const data = [
  {
    id: 1,
    title: "Book Club",
    des:"A book club webpage where user can browse books, intract with other people and talk about their favorite books",
    ts:" React | Redux | Socket io | MongoDB | JavaScript | HTML | CSS",
    image: BC,
    github: "https://github.com/sreerag-rajan/book-club",
    live: "https://book-club-project.vercel.app/",
  },
  {
    id: 2,
    title: "Mama Earth Clone",
    des:"A website for buying various skincare products for babies and females.",
    ts:"HTML | CSS | JavaScript",
    image: MM,
    github: "https://github.com/mehtaanand35/MamaEarthClone",
    live: "https://eloquent-allen-ba4ad9.netlify.app/",
  },
  {
    id: 3,
    title: "H & M Clone",
    des:"An e-commerce website known for its fast fashion for men,women, teenagers, and children.",
    ts:"HTML | CSS | JavaScript",
    image: HM,
    github: "https://github.com/ThOmas-Saji/H-and-M-Clone-Project",
    live: "https://mystifying-hypatia-3f95a1.netlify.app/",
  },
  {
    id: 4,
    title: "Weather Forecast",
    des:"A simple webpage for checking the current and future weather status.",
    ts:"HTML | CSS | JavaScript",
    image: WF,
    github: "https://github.com/ThOmas-Saji/weather_forecast",
    live: "https://quirky-sammet-f06f9c.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, title, des, ts, image, github, live }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="" />
              </div>
              <h5 className="project_title">{title}</h5>
              <p className="project_des">{des}</p>
              <h5 className="project_tech-stack">Tech Stack : {ts}</h5>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={live} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
