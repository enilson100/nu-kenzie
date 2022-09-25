import imgLogo from "../../assets/image-logo.svg";
import imgCard from "../../assets/image.svg";
import ButtonPink from "../../components/ButtonPink";
import "./style.css";

const LandingPage = ({ handleLandPage }) => {
  return (
    <main className="main__landPage">
      <section className="container__landPage-info">
        <div className="div__lanPage-info">
          <figure>
            <img className="img" src={imgLogo} alt="" />
          </figure>
          <h1 className="title__landPage-initial">
            Centralize o controle das suas finanças
            <span className="title-span">de forma rápida e segura</span>
          </h1>
          <ButtonPink
            nameButton={"Iniciar"}
            handleLandPage={handleLandPage}
          ></ButtonPink>
        </div>
        <div>
          <figure>
            <img className="imgCard" src={imgCard} alt="" />
          </figure>
        </div>
      </section>
    </main>
  );
};
export default LandingPage;
