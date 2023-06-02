import React, { useState } from "react";
import Card from "./Card";

function CardList() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cards = [
    {
      bankName: "Bank Name 1",
      accountNumber: "1234",
      companyName: "Company Name 1",
    },
    {
      bankName: "Bank Name 2",
      accountNumber: "5678",
      companyName: "Company Name 2",
    },
    // Add more card objects as needed
  ];

  const activateCard = (index) => {
    setActiveCardIndex(index);
  };

  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={index}
          bankName={card.bankName}
          accountNumber={card.accountNumber}
          companyName={card.companyName}
          activateCard={() => activateCard(index)}
          isActive={index === activeCardIndex}
        />
      ))}
    </div>
  );
}

export default CardList;
