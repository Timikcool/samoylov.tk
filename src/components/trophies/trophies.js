import React, { useState } from "react";
import "react-image-lightbox/style.css";
import Card from "./card";
import "./trophies.scss";
//images
import fintechTeam19 from "./img/imaguru_fintech_19/team.jpg";
import fintechMe19 from "./img/imaguru_fintech_19/me.jpg";
import blockchainMe18 from "./img/imaguru_blockchain_18/me.jpg";
import blockchainTeam18 from "./img/imaguru_blockchain_18/team.jpg";
import blockchainTeam18_2 from "./img/imaguru_blockchain_18/team2.jpg";
import ictAwardMe17 from "./img/ict_startup_award_17/me.jpeg";

const Trophies = () => {
  const cards = [
    {
      title: "Imaguru FinTech Hackathon: Elevator Lab Edition",
      status: "Winner",
      description:
        "Our project is a SaaS solution for every business with call centre. Especially large ones. It analyzes all call records and provides deep analytics about each one based on speech-to-text technology and our algorithms to our customers.",
      date: "24.03.2019",
      link: "https://imaguru.by/event/fintech-hackathon/",
      images: [fintechTeam19, fintechMe19]
    },
    {
      title: "Imaguru International Blockchainthon",
      status: "2nd place",
      description:
        "We were building decentrilized gambling game for DAO.Casino protocol and at the end we've got proof-of-work game based on smart contract deployed to Ethereum testnet",
      date: "07.10.2018",
      link: "https://imaguru.by/event/imaguru-blockchain-hackathon-4/",
      images: [blockchainMe18, blockchainTeam18_2, blockchainTeam18]
    },
    {
      title: "Belarus ICT Start-up Award",
      status: "Finalist",
      description:
        "The first startup I tried to launch was about sport communities. I tried to build a social platform for team games players to find members, teams, playgrounds and sport organizations.",
      date: "20.04.2017",
      link: "https://tech.onliner.by/2017/04/20/poxudet",
      images: [ictAwardMe17]
    }
  ];
  return (
    <div className="trophies">
      {cards.map(({ title, description, status, date, link, images }) => (
        <Card
          title={title}
          status={status}
          description={description}
          link={link}
          images={images}
          date={date}
          key={title}
        />
      ))}
    </div>
  );
};
export default Trophies;
