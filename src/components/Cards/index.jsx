import { FaTrash } from "react-icons/fa";
import "./style.css";

const Card = ({ type, value, description, index, filterRemove }) => {
  return (
    <li key={index} className={type === "Entrada" ? "list-green" : "list-gray"}>
      <div className="div-list-wrap">
        <p className="title-3 title-list">{description}</p>
        <span className="list-type">R$ {value}</span>
        <button className="button-list" onClick={() => filterRemove(index)}>
          <FaTrash className="icon-button" />
        </button>
      </div>
      {type ? (
        <p className="list-type">{type}</p>
      ) : (
        <p className="list-type">Entrada</p>
      )}
    </li>
  );
};
export default Card;
