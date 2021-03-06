import { useEffect, useState } from "react";

function PaysDeux() {
  const [medals, setMedals] = useState([3, 2, 6, 4, 12]);
  const [gagnant, setGagnant] = useState("");
  const leGagnant = (arr) => {
    let gagnant = {
      nom: "",
      medailles: 0,
    };
    for (const pays of arr) {
      if (pays.medailles > gagnant.medailles) {
        gagnant = pays;
      }
    }
    const gagnants = arr.filter((pays) => pays.medailles === gagnant);
    return gagnants.map((pays) => pays.nom).join(" ,");
  };
  const medal = "🥇";

  const pays = [
    {
      nom: "Belgique 🏴‍☠️",
      medaille: medals[0],
    },
    {
      nom: "France 🚩",
      medaille: medals[1],
    },

    {
      nom: "Corée 🏳️",
      medaille: medals[2],
    },

    {
      nom: "USA 🏁",
      medaille: medals[3],
    },

    {
      nom: "Laos 🏳️‍🌈",
      medaille: medals[4],
    },
  ];

  const medalCountries = [
    pays[0].medaille,
    pays[1].medaille,
    pays[2].medaille,
    pays[3].medaille,
    pays[4].medaille,
  ];

  /*

  function getHighest(medalCountries, pays) {
    const leMeilleur = Math.max(...medalCountries);
    const index = medalCountries.indexOf(leMeilleur);
    return pays[index].nom;
  }
  */

  function getHighest(medalCountries, pays) {
    const leMeilleur = Math.max(...medalCountries);
    const index = medalCountries.indexOf(leMeilleur);
    return pays[index].nom;
  }

  return (
    <div>
      <h1 className="d-flex justify-center">Essai avec Bonus</h1>
      <div className="d-flex justify-around">
        <div className="d-flex flex-column justify-center align-center">
          <h2>{pays[0].nom}</h2>
          <p>{medals[0]}</p>
          <button onClick={() => setMedals()}>Une médaille !</button>
        </div>
        <div className="d-flex flex-column justify-center align-center">
          <h2>{pays[1].nom}</h2>
          <p>{medals[1]}</p>
          <button onClick={() => setMedals(medals[1] + 1)}>
            Une médaille !
          </button>
        </div>
        <div className="d-flex flex-column justify-center align-center">
          <h2>{pays[2].nom}</h2>
          <p>{medals[2]}</p>
          <button onClick={() => setMedals(medals[2] + 1)}>
            Une médaille !
          </button>
        </div>
        <div className="d-flex flex-column justify-center align-center">
          <h2>{pays[3].nom}</h2>
          <p>{medals[3]}</p>
          <button onClick={() => setMedals(medals[3] + 1)}>
            Une médaille !
          </button>
        </div>
        <div className="d-flex flex-column justify-center align-center">
          <h2>{pays[4].nom}</h2>
          <p>{medals[4]}</p>
          <button onClick={() => setMedals(medals[4] + 1)}>
            Une médaille !
          </button>
        </div>
      </div>
      <div className="d-flex justify-around">
        <h3>Les premiers sont :</h3>
      </div>
    </div>
  );
}

export default PaysDeux;
