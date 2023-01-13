import React, { useState } from "react";

import MyCard from "./MyCard";

const Main = () => {
  const [cards, setCards] = useState([
    {
      cardTitle: "card 1",
      description: "description1",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    },
    {
      cardTitle: "card 2",
      description: "description2",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    },
    {
      cardTitle: "card 3",
      description: "description3",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    },
  ]);

  return (
    <main>
      <h1>Main</h1>
      {cards.map((card) => (
        <MyCard
          title={card.cardTitle}
          description={card.description}
          image={card.image}
        />
      ))}
    </main>
  );
};

export default Main;
