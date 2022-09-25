import Header from "../../components/Header";
import Form from "../../components/Form";
import "./style.css";
import { MdOutlineAttachMoney } from "react-icons/md";

const DashBoard = ({ handleLandPage, data, setData }) => {
  const sumMoney = data.reduce((acc, atual) => {
    if (atual.type === "Entrada" || atual.type === "") {
      return acc + parseInt(atual.value);
    } else {
      return acc - parseInt(atual.value);
    }
  }, 0);

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
      </main>
    </div>
  );
};
export default DashBoard;
