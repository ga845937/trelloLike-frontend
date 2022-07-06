import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import CardComponent from "./card-component";

const TaskComponent = ({ taskName, id, setTaskTotal, taskTotal }) => {
  let [cardName, setCardName] = useState("");
  let [cardTotal, setCardTotal] = useState([]);

  const handleDeleteCard = () => {
    if (window.confirm(`Are you sure to delete Task「${taskName}」?`) == true) {
      setTaskTotal((taskTotal) => {
        return taskTotal.filter((item) => item.props.id !== id);
      });
    }
  };

  const handleCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleAddCard = () => {
    if (cardName == "") {
      window.alert("Please enter card name.");
    } else {
      const newCardComponent = (
        <CardComponent
          cardName={cardName}
          id={uuidv4()}
          cardTotal={cardTotal}
          setCardTotal={setCardTotal}
        />
      );
      // ...oldTasks:不知道有多少tasks array，用...展開全部
      setCardTotal((oldCards) => [...oldCards, newCardComponent]);
      setCardName("");
    }
  };

  return (
    <div key={id} className="task">
      <div className="title">
        <h4>{taskName} </h4>
        <p>
          <FontAwesomeIcon
            onClick={handleDeleteCard}
            icon={fas.faDeleteLeft}
            size="xs"
          />
        </p>
      </div>

      <div className="cardDetail">{cardTotal}</div>
      <input
        onChange={handleCardName}
        name="cardName"
        type="text"
        placeholder="Enter a card name"
        value={cardName}
      />
      <button onClick={handleAddCard} className="addCard">
        + Add Card
      </button>
    </div>
  );
};

export default TaskComponent;
