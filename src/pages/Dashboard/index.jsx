import { MdOutlineAttachMoney } from "react-icons/md";
import { useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import "./style.css";
import NoCard from "../../components/NoCards";
import Card from "../../components/Cards";

const DashBoard = ({ handleLandPage, data, setData }) => {
  const [dataEnter, setDataEnter] = useState([]);

  const sumMoney = data.reduce((acc, atual) => {
    if (atual.type === "Entrada" || atual.type === "") {
      return acc + parseFloat(atual.value);
    } else {
      return acc - parseFloat(atual.value);
    }
  }, 0);

  function filterEnter(handleEnter) {
    if (handleEnter === "Todos") {
      setDataEnter([]);
    } else if (handleEnter === "Entrada") {
      setDataEnter(data.filter((elem) => elem.type === handleEnter));
    } else {
      setDataEnter(data.filter((elem) => elem.type === handleEnter));
    }
  }
  function filterRemove(index) {
    const filterDataRemoveData = dataEnter.filter((elem, i) => {
      return i !== index;
    });
    setDataEnter(filterDataRemoveData);
    const filterDataRemove = data.filter((elem, i) => {
      return index !== i;
    });
    setData(filterDataRemove);
  }

  return (
    <div className="container">
      <Header handleLandPage={handleLandPage} />
      <main className="container_main-dashboard">
        <section className="container-form">
          <Form setData={setData} />
          {data.length ? (
            <div className="container-pop-up">
              <div className="pop-up-wrap">
                <h2 className="title-2">Saldo total:</h2>
                <p className="title-2 value">
                  <MdOutlineAttachMoney /> {sumMoney},00
                </p>
              </div>
              <p className="list-type">Valor se refere ao Saldo</p>
            </div>
          ) : (
            <div></div>
          )}
        </section>
        <section className="container-card">
          <nav className="nav">
            <h2 className="title-nav">Resumo financeiro</h2>
            <div className="nav-wrap">
              <button
                onClick={() => filterEnter("Todos")}
                className="button-gray button-nav"
              >
                Todos
              </button>
              <button
                onClick={() => filterEnter("Entrada")}
                className="button-gray button-nav"
              >
                Entradas
              </button>
              <button
                onClick={() => filterEnter("Despesa")}
                className="button-gray button-nav"
              >
                Despesas
              </button>
            </div>
          </nav>
          {dataEnter.length > 0 ? (
            <div className="container-list">
              <ul className="list-wrap">
                {dataEnter.map((elem, index) => {
                  return (
                    <Card
                      type={elem.type}
                      value={elem.value}
                      description={elem.description}
                      index={index}
                      filterRemove={filterRemove}
                    />
                  );
                })}
              </ul>
            </div>
          ) : data.length ? (
            <div className="container-list">
              <ul className="list-wrap">
                {data.map((elem, index) => {
                  return (
                    <Card
                      type={elem.type}
                      value={elem.value}
                      description={elem.description}
                      index={index}
                      filterRemove={filterRemove}
                    />
                  );
                })}
              </ul>
            </div>
          ) : (
            <NoCard />
          )}
        </section>
      </main>
    </div>
  );
};
export default DashBoard;
