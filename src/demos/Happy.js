import { useEffect, useState } from "react";

function Happy() {
  const smileyAnim = [
    "🦄",
    "🐒",
    "🦊",
    "🐺",
    "🐲",
    "🐨",
    "🐗",
    "🐼",
    "🔮",
    "🦔",
    "🤖",
  ];
  const smileyauHasard = () => {
    const index = Math.floor(Math.random() * smileyAnim.length);
    setAnimal(smileyAnim[index]);
  };

  const [animal, setAnimal] = useState(smileyAnim[0]);
  const [smiley, setSmiley] = useState(true);
  return (
    <div>
      <div onClick={() => setSmiley(!smiley)}>
        Bonheur : {smiley ? "😀" : "😟"}
      </div>
      <button onClick={smileyauHasard}>Animals ?</button> {animal}
    </div>
  );
}

export default Happy;
