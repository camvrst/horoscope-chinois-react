import { useState } from 'react';
import signs from '../../data/signes';

function BtnValider() {
  const [signeAstro, setSigne] = useState('...');
  const montrerSigne = () => {
    setSigne(nom);
  };
  let nom;
  function alertSigns() {
    const ipt = document.getElementById('inputYear');
    for (const sign of signs) {
      if (ipt.value % 12 === sign.ordre && ipt.value !== '') {
        nom = sign.nom;
        console.log(signeAstro);
        console.log(nom);
      }
    }
  }
  return (
    <div>
      <button
        onClick={() => {
          alertSigns();
          montrerSigne();
        }}
        type="submit"
        className="btn-valider"
      >
        Valider
      </button>
      <p className="text-xl font-bold sign-reveal">Votre signe est {signeAstro}</p>
    </div>
  );
}

export default BtnValider;
