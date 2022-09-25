import nuKenzie from "../../assets/nuKenzie.svg";
import "./style.css";

const Header = ({ handleLandPage }) => {
  return (
    <header className="container__header">
      <div className="div__header-wrap">
        <figure>
          <img
            className="img__nuKenzie-dash"
            src={nuKenzie}
            alt="kenzie-logo"
          />
        </figure>
        <button
          onClick={() => handleLandPage()}
          className="button__header-gray"
        >
          Início
        </button>
      </div>
    </header>
  );
};

export default Header;
