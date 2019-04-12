import React from "react";
import moment from "moment";
import ExperienceItem from "./experienceItem";
import experienceHistory from "./experienceHistory.json";
import "./resume.scss";
const Resume = () => {
  const birthDay = moment("1998-12-09");
  const years = moment().diff(birthDay, "years");
  return (
    <div className="resume">
      <div className="header">
        <img
          className="avatar"
          src="https://scontent-frx5-1.cdninstagram.com/vp/e96922d183dc969fe707554a43b350b1/5D2C0A1A/t51.2885-15/e35/s320x320/35001474_450156075484119_7206024527829008384_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com"
          alt="avatar"
        />
        <div className="name">
          <h2>Timur Samoylov</h2>
          <p>developer you deserve</p>
          <button>Download PDF</button>
        </div>
      </div>
      <section className="general-info">
        <h3>General info:</h3>
        <ul>
          <li>{`Date of Birth: 09/12/1998 (${years} years old)`}</li>
          <li>{`Current location: Minsk, Belarus`}</li>
          <li>Phone: +375 (33) 363-23-35</li>
          <li>
            E-mail:{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:t.samoylov@yandex.ru"
            >
              t.samoylov@yandex.ru
            </a>
          </li>
          <li>
            {"Telegram:"}{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/tsamoylov"
            >
              @tsamoylov{" "}
            </a>
          </li>
          <li>
            Skype:{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="skype:live:5767f73db386bfd8?userinfo"
            >
              live:5767f73db386bfd8
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Timikcool"
            >
              https://github.com/Timikcool
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/in/timur-samoylov-b4519315b/"
            >
              https://linkedin.com/in/timur-samoylov-b4519315b/
            </a>
          </li>
        </ul>
      </section>
      <section className="education">
        <h3>Education:</h3>
        <p>
          School of Business of Belarussian State University, Information
          Resources Management
        </p>
      </section>
      <section className="tech">
        <h3>Well known tech:</h3>
        <ul>
          <li>Frontend: React, Inferno, Angular, Webpack, Redux, Sass</li>
          <li>Backend: Node, Koa, Express</li>
          <li>Tools: Docker, Git, AWS, Firebase, Heroku</li>
          <li>Database: MongoDB</li>
          <li>Blockchain: EOSJS, Truffle, Web3, Solidity</li>
        </ul>
      </section>
      <section className="experience">
        <h3>Experience:</h3>
        {experienceHistory.map(params => (
          <ExperienceItem {...params} />
        ))}
      </section>
    </div>
  );
};
export default Resume;
