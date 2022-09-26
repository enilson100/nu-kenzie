import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const Form = ({ setData }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      id: uuidv4(),
      description,
      value,
      type,
    };
    if (data.type === "") {
      data.type = "Entrada";
    }
    setData((oldData) => [...oldData, data]);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="div-wrap">
        <label>Descrição</label>
        <input
          className="input-form"
          type="text"
          placeholder="Digite aqui sua discrição"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="form-input-wrap">
          <div className="colunm">
            <label>Valor</label>
            <input
              id="placeholder-text"
              className="mini-input"
              type="text"
              name="number"
              placeholder="R$"
              required
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="colunm">
            <label>Tipo do Valor</label>
            <select
              className="mini-input select"
              name="tipo"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button className="button-form">Inserir valor</button>
      </div>
    </form>
  );
};
export default Form;
