import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import CardComponent from "./card-component";
import { taskDelete, getToken } from "../service/add-service";

const TaskComponent = ({ taskName, id, setTaskTotal }) => {
  let [cardName, setCardName] = useState("");
  let [cardTotal, setCardTotal] = useState([]);

  const handleDeleteCard = async () => {
    if (
      window.confirm(`Are you sure to delete Task「${taskName}」?`) === true
    ) {
      const token = await getToken();
      await taskDelete(id, token);
      setTaskTotal((taskTotal) => {
        return taskTotal.filter((item) => item.props.id !== id);
      });
    }
  };

  const handleCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleAddCard = () => {
    if (cardName === "") {
      window.alert("Please enter card name.");
    } else {
      const newCardComponent = (
        <CardComponent
          cardName={cardName}
          id={id}
          key={id}
          cardTotal={cardTotal}
          setCardTotal={setCardTotal}
        />
      );
      // ...oldCards:不知道有多少cards array，用...展開全部
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

      <div className="cards">{cardTotal}</div>
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
