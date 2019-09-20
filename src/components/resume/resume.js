import React from "react";
import ReactGA from 'react-ga';
import ExperienceItem from "./experienceItem";
import experienceHistory from "./experienceHistory.json";
import print from './toPDF';
import "./resume.scss";
import avatar from "./avatar.png";
const Resume = () => {
  ReactGA.pageview('/resume');
  // const birthDay = moment("1998-12-09");
  // const years = moment().diff(birthDay, "years");
  return (
    <div className="resume">
      <div className="header">
        <img
          className="avatar"
          src={avatar}
          alt="avatar"
        />
        <div className="name">
          <h2>Timur Samoylov</h2>
          <p>developer you deserve</p>
          <button onClick={() => print()} id="download_resume">Download PDF</button>
        </div>
      </div>
      <section className="general-info">
        <h3>General info:</h3>
        <ul>
          {/* <li>{`Date of Birth: 09/12/1998 (${years} years old)`}</li> */}
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
          <li>Frontend: React, Next.js, Angular, Webpack, Redux, Sass</li>
          <li>Tools: Git, Firebase, Heroku, zeit (now)</li>
          <li>Database: MongoDB</li>
          <li>Blockchain: EOSJS, Truffle, Web3, Solidity</li>
        </ul>
      </section>
      <section className="experience">
        <h3>Experience:</h3>
        {experienceHistory.map(params => (
          <ExperienceItem {...params} key={params.name} />
        ))}
      </section>
    </div>
  );
};
export default Resume;
