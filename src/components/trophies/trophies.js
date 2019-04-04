import React, { useState } from "react";
import Card from "./card";
import "./trophies.scss";

const Trophies = () => {
  const cards = [
    {
      title: "Imaguru FinTech Hackathon: Elevator Lab Edition",
      description: "Winner",
      date: "24.03.2019",
      link: "https://imaguru.by/event/fintech-hackathon/"
    },
    {
      title: "Imaguru International Blockchainthon",
      description: "2nd place",
      date: "07.10.2018",
      link: "https://imaguru.by/event/imaguru-blockchain-hackathon-4/"
    },
    {
      title: "Belarus ICT Start-up Award",
      description: "Finalist",
      date: "20.04.2017",
      link: "https://tech.onliner.by/2017/04/20/poxudet"
    }
  ];
  return (
    <div className="trophies">
      {cards.map(({ title, description, date, link }) => (
        <Card
          title={title}
          description={description}
          link={link}
          date={date}
          key={title}
        />
      ))}
    </div>
  );
};
export default Trophies;
