import { useEffect, useState } from "react";

function Pays() {
  const [winBe, setWinBe] = useState(3);
  const [winFr, setWinFr] = useState(2);
  const [winUS, setWinUS] = useState(6);
  const [winKr, setWinKr] = useState(4);
  const [winLa, setWinLa] = useState(12);
  const [medals, setMedals] = useState(0);
  const medal = "🥇";

  const pays = [
    {
      nom: "Belgique 🏴‍☠️",
      medals: winBe,
    },
    {
      nom: "France 🚩",
      medals: winFr,
    },

    {
      nom: "Corée 🏳️",
      medals: winKr,
    },

    {
      nom: "USA 🏁",
      medals: winUS,
    },

    {
      nom: "Laos 🏳️‍🌈",
      medals: winLa,
    },
  ];
  const medalCountries = [
    pays[0].medals,
    pays[1].medals,
    pays[2].medals,
    pays[3].medals,
    pays[4].medals,
  ];

  function getHighest(medalCountries, pays) {
    const leMeilleur = Math.max(...medalCountries);
    const index = medalCountries.indexOf(leMeilleur);
    return pays[index].nom;
  }
  return (
    <div>
      <div className="d-flex justify-around">
        <div className="d-flex flex-column justify-center align-center">
          <h2>{pays[0].nom}</h2>
          <p>{winBe}</p>
          <button onClick={() => setWinBe(winBe + 1)}>Une médaille !</button>
        </div>
        <div className="d-flex flex-column justify-center align-center">
          <h2>{pays[1].nom}</h2>
          <p>{winFr}</p>
          <button onClick={() => setWinFr(winFr + 1)}>Une médaille !</button>
        </div>
        <div className="d-flex flex-column justify-center align-center">
          <h2>{pays[2].nom}</h2>
          <p>{winKr}</p>
          <button onClick={() => setWinKr(winKr + 1)}>Une médaille !</button>
        </div>
        <div className="d-flex flex-column justify-center align-center">
          <h2>{pays[3].nom}</h2>
          <p>{winUS}</p>
          <button onClick={() => setWinUS(winUS + 1)}>Une médaille !</button>
        </div>
        <div className="d-flex flex-column justify-center align-center">
          <h2>{pays[4].nom}</h2>
          <p>{winLa}</p>
          <button onClick={() => setWinLa(winLa + 1)}>Une médaille !</button>
        </div>
      </div>
      <div className="d-flex justify-around">
        <h3>
          Les premiers sont : {getHighest(medalCountries, pays)}
          {medal}
        </h3>
      </div>
    </div>
  );
}

export default Pays;
