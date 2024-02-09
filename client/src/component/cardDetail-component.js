import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const CardDetailComponent = (cardDetail, setCardDetail, cardName) => {
  const { id } = useParams();
  console.log(cardName);
  return (
    <div className="cardDetail" style={{ minHeight: "90vh" }}>
      <div className="cardTitle">
        <h2>
          <FontAwesomeIcon icon={fas.faCaretRight} size="xl" />
          &nbsp;&nbsp;Card Title
        </h2>
        <input value={cardName} type="text" />
      </div>
      <div className="cardDescription">
        <h2>
          <FontAwesomeIcon icon={fas.faBarsStaggered} size="s" />
          &nbsp;Description
        </h2>
        <textarea cols="40" rows="5"></textarea>
      </div>
      <div className="cardSettingsTop">
        <div className="cardDeadline">
          <h2>
            <FontAwesomeIcon icon={fas.faCalendarDays} size="s" />
            &nbsp;Deadline
          </h2>
          <input type="datetime-local"></input>
        </div>
        <div className="cardTags">
          <h2>
            <FontAwesomeIcon icon={fas.faTags} size="s" />
            &nbsp;Tag
          </h2>
          <div className="colorTags">
            <div className="redTag"></div>
            <div className="greenTag"></div>
            <div className="blueTag"></div>
            <div className="orangeTag"></div>
            <div className="yellowTag"></div>
            <div className="purpleTag"></div>
          </div>
        </div>
      </div>
      <div className="cardSettingsDown">
        <div className="cardMembers">
          <h2>
            <FontAwesomeIcon icon={fas.faUserGroup} size="s" />
            &nbsp;Member
          </h2>
          <div className="member">
            <ul>
              <li>
                member1&nbsp;
                <FontAwesomeIcon icon={fas.faDeleteLeft} size="s" />
              </li>
              <li>
                member2&nbsp;
                <FontAwesomeIcon icon={fas.faDeleteLeft} size="s" />
              </li>
            </ul>
          </div>
          <input type="text" />
          <button>+ Member</button>
        </div>
        <div className="cardCheckLists">
          <h2>
            <FontAwesomeIcon icon={fas.faListCheck} size="s" />
            &nbsp;CheckList
          </h2>
          <div className="checkListPost">
            <div className="checkList">
              <ul>
                <li>
                  <FontAwesomeIcon icon={far.faSquare} size="s" />
                  &nbsp;CheclList1&nbsp;&nbsp;
                  <FontAwesomeIcon icon={fas.faDeleteLeft} size="s" />
                </li>
                <li>
                  <FontAwesomeIcon icon={far.faSquare} size="s" />
                  &nbsp;CheclList2&nbsp;&nbsp;
                  <FontAwesomeIcon icon={fas.faDeleteLeft} size="s" />
                </li>
              </ul>
            </div>
            <input type="text" />
            <button>+ CheckList</button>
          </div>
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailComponent;
