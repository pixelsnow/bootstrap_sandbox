import React, { useState } from "react";

import MyCard from "./MyCard";

const Main = () => {
  const [cards, setCards] = useState([
    { cardTitle: "card 1", description: "description1" },
    { cardTitle: "card 2", description: "description2" },
    { cardTitle: "card 3", description: "description3" },
  ]);

  return (
    <main>
      <h1>Main</h1>
      {cards.map((card) => (
        <MyCard title={card.cardTitle} description={card.description} />
      ))}
    </main>
  );
};

export default Main;
