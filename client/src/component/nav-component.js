import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const NavComponent = () => {
  return (
    <nav>
      <h1>
        <a href="/">Task Dashboard</a>
      </h1>
      <div className="search">
        <input type="text" />
        <button>
          <FontAwesomeIcon icon={fas.faMagnifyingGlass} /> Search
        </button>
      </div>
    </nav>
  );
};

export default NavComponent;
