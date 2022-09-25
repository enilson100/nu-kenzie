import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/Dashboard";
import "./styles/Global.css";

function App() {
  const [isLandPage, setIslandPage] = useState(true);
  const [data, setData] = useState([]);

  function handleLandPage() {
    setIslandPage(!isLandPage);
  }

  return (
    <>
      {isLandPage ? (
        <LandingPage handleLandPage={handleLandPage} />
      ) : (
        <DashBoard
          handleLandPage={handleLandPage}
          data={data}
          setData={setData}
        />
      )}
    </>
  );
}

export default App;
