import { MdOutlineAttachMoney } from "react-icons/md";
import { useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import "./style.css";
import NoCard from "../../components/NoCards";
import Card from "../../components/Cards";

const DashBoard = ({ handleLandPage, data, setData }) => {
  const [listFilter, setListFilter] = useState(null);
  const tagsButton = document.querySelectorAll(".button");

  const sumMoney = data.reduce((acc, atual) => {
    if (atual.type === "Entrada" || atual.type === "") {
      return acc + parseFloat(atual.value);
    } else {
      return acc - parseFloat(atual.value);
    }
  }, 0);

  const listRemove = (id) => {
    if (listFilter) {
      setListFilter((oldCardList) =>
        oldCardList.filter((card) => card.id !== id)
      );
      setData((oldCardList) => oldCardList.filter((card) => card.id !== id));
    } else {
      setData((oldCardList) => oldCardList.filter((card) => card.id !== id));
    }
  };

  const listFilterAll = (event) => {
    setListFilter(null);

    tagsButton.forEach((button) => button.classList.remove("selected"));
    event.target.classList.add("selected");
  };

  const listFilterEnter = (event) => {
    setListFilter(() => data.filter(({ type }) => type === "Entrada"));

    tagsButton.forEach((button) => button.classList.remove("selected"));
    event.target.classList.add("selected");
  };

  const listFilterExpenses = (event) => {
    setListFilter(() => data.filter(({ type }) => type === "Despesa"));

    tagsButton.forEach((button) => button.classList.remove("selected"));
    event.target.classList.add("selected");
  };

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
                onClick={(event) => listFilterAll(event)}
                className="button-gray button-nav button button-small--selected"
              >
                Todos
              </button>
              <button
                onClick={(event) => listFilterEnter(event)}
                className="button-gray button-nav button"
              >
                Entradas
              </button>
              <button
                onClick={(event) => listFilterExpenses(event)}
                className="button-gray button-nav button"
              >
                Despesas
              </button>
            </div>
          </nav>
          {data.length < 1 ? (
            <>
              <NoCard />
            </>
          ) : listFilter ? (
            listFilter.length > 0 ? (
              <div className="container-list">
                <ul className="list-wrap">
                  {listFilter.map((elem, index) => (
                    <Card
                      key={index}
                      type={elem.type}
                      value={elem.value}
                      description={elem.description}
                      id={elem.id}
                      filterRemove={listRemove}
                    />
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <NoCard />
              </>
            )
          ) : (
            <div className="container-list">
              <ul className="list-wrap">
                {data.map((elem, index) => (
                  <Card
                    key={index}
                    type={elem.type}
                    value={elem.value}
                    description={elem.description}
                    id={elem.id}
                    filterRemove={listRemove}
                  />
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
export default DashBoard;
