import React from "react";

const FaturamentoCard = ({ titulo, valor }) => {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{valor}</p>
    </div>
  );
};

export default FaturamentoCard;
