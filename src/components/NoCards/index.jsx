import noCard from "../../assets/NoCard.svg";

const NoCard = () => {
  return (
    <div className="div-img-wrap">
      <h3 className="title-card">Você não possui nenhum lançamento</h3>
      <figure>
        <img className="img-card" src={noCard} alt="" />
      </figure>
      <figure>
        <img className="img-card" src={noCard} alt="" />
      </figure>
      <figure>
        <img className="img-card" src={noCard} alt="" />
      </figure>
    </div>
  );
};

export default NoCard;
