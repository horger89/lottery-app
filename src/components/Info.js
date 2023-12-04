import React from "react";
import "./Info.css";
import { useStateContext } from "../context/StateContext";

const Info = () => {
  const { setShowInfo } = useStateContext();
  const CloseInfo = () => {
    setShowInfo(false);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Eltérések a megadott specifikációhoz képest</h1>
        <p>
          Probáltam ragaszkodni a megadott specifikációkhoz amennyire csak
          tudtam, csak itt-ott végeztem kisebb változtatásokat, amiket úgy
          láttam javítani fognak a játék élményén.
        </p>
        <h1>Változások:</h1>
        <p>
          Új játék indításakor a játékos és az üzemeltető számlája is visszaáll
          az induló összegre, ezzel elkerülve, hogy a játékos 0 egyenleggel
          kezdje a játékot abban az esetben, ha az előző játék végén
          felhasználta az összes egyenleget, és nem volt nyereménye.
        </p>
        <p>
          A kimutatások folyamatosan elérhetőek a játék során, ezért nem
          készítettem egy külön kimutatási mezőt a játék végén.
        </p>
        <p>
          A játék végén csak a találatok száma szerint lehet rendezni a
          szelvényeket, ugyanis a szelvényen feltüntetésre kerül a kifizetendő
          összeg is. Emellett, ha lehetne rendezni a kifizetett összegek alapján
          is, akkor mindig ugyanaz a csoport szelvény jelenne meg, mint a
          találatok alapján.
        </p>
        <button className="btn-info" onClick={CloseInfo}>
          Bezár
        </button>
      </div>
    </div>
  );
};

export default Info;
