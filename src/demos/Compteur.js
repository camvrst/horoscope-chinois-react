import { useEffect, useState } from "react";

function Compteur() {
  console.log("Cette fonction vient d'être rerender");
  // useState retourne une paire de clé et de valeur (un tuple/array),
  // l'élément 0 vaut la valeur,
  // l'élément 1 vaut la méthode permettant de changer la valeur
  // setVal => change la valeur et fait un rerender, 2 actions
  const [val, setVal] = useState(0);
  const [text, setText] = useState("Bonjour");
  // Ici, la fonction compteur sera exécutée => récursion, boucle infinie
  // setVal(3);
  const increment = () => {
    // setVal va réexcuter la fct compteur, et val vaudra 1
    // val = seulement lecture
    // setVal réimprime les nouvelles valeurs de val
    setVal(val + 1);
    setText("Au revoir");
  };
  return (
    <div>
      {text}
      <div>Compteur : {val}</div>
      <button onClick={increment}>Incrémente le compteur</button>
    </div>
  );
}

// AVEC UNE REQUETE AJAX

function CompteurAjax() {
  const [val, setVal] = useState(0);
  // effet de bord à cause de la requête : on l'empêche avec useEffect
  useEffect(() => {
    $.ajax("https://toto.com").then((n) => {
      setVal(n);
    });
  }, []);
  return (
    <div>
      <div>Compteur : {val}</div>
      <button onClick={() => setVal(val + 1)}>Incrémente le compteur</button>
    </div>
  );
}

export default Compteur;
