import React, { useState } from "react";
import PieChart from "../component/PieChart";
import Card from "../component/Card";
import Form from "../component/Form";

const Home = () => {
  const cardsData = [
    {
      title: "Investment",
      description: "Investment Description",
      amount: "$3000",
      paymentType: "Credit Card",
      location: "New York",
    },
    {
      title: "Saving",
      description: "Saving Description",
      amount: "$1500",
      paymentType: "Bank Transfer",
      location: "San Francisco",
    },
    {
      title: "Expense",
      description: "Expense Description",
      amount: "$500",
      paymentType: "Cash",
      location: "Los Angeles",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Financial Overview</h1>
      <div className=" flex justify-center mb-8">
        <PieChart />
        <Form />
      </div>
      <div className="flex flex-wrap justify-center mb-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            amount={card.amount}
            paymentType={card.paymentType}
            location={card.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
