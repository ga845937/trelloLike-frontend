import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import CardDetailComponent from "./cardDetail-component";
import React, { useState } from "react";

const CardComponent = ({ cardName, id, cardTotal, setCardTotal }) => {
  let [cardDetail, setCardDetail] = useState("");

  const handleDeleteCard = () => {
    if (
      window.confirm(`Are you sure to delete Card「${cardName}」?`) === true
    ) {
      setCardTotal((cardTotal) => {
        return cardTotal.filter((item) => item.props.id !== id);
      });
    }
  };
  const handleEditCard = () => {
    <CardDetailComponent
      cardDetail={cardDetail}
      setCardDetail={setCardDetail}
    />;
  };

  return (
    <div key={id} onClick={handleEditCard} className="cardName">
      <h5>{cardName}</h5>
      <p>
        <FontAwesomeIcon
          onClick={handleDeleteCard}
          icon={fas.faDeleteLeft}
          size="xs"
        />
      </p>
    </div>
  );
};

export default CardComponent;
