import { FaTrash } from "react-icons/fa";
import "./style.css";

const Card = ({ type, value, description, id, filterRemove }) => {
  return (
    <li className={type === "Entrada" ? "list-green" : "list-gray"}>
      <div className="div-list-wrap">
        <p className="title-3 title-list">{description}</p>
        <span className="list-type">R$ {value}</span>
        <button className="button-list" onClick={() => filterRemove(id)}>
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
