import "./style.css";

const ButtonPink = ({ nameButton, handleLandPage }) => {
  return (
    <button className="button__pink-landPage" onClick={() => handleLandPage()}>
      {nameButton}{" "}
    </button>
  );
};

export default ButtonPink;
