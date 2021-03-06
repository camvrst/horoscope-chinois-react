/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

function Card({
  nom, image, description, clickModal, descriptionFull, contentModal, titleModal,
}) {
  const showModalContent = () => {
    contentModal(descriptionFull);
    titleModal(nom);
  };
  return (
    <div className="card">
      <h2>{nom}</h2>
      <img src={`${image}`} alt={`${nom}`} className="card-img" />
      <p>{description}</p>
      <button
        className="savoir-plus bg-red-700 mr-1 rounded text-sm py-2 px-3 text-white hover:bg-yellow-600 transition duration-150"
        type="button"
        id="btnPlus"
        onClick={() => { clickModal(); showModalContent(); }}
      >
        En savoir plus
      </button>

    </div>
  );
}
export default Card;
