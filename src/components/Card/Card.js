/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Modal from '../Modal/Modal';

function Card({
  nom, image, description, visibility, btnShowModal, clickModal, descriptionFull,
}) {
  return (
    <div className="card">
      <h2>{nom}</h2>
      <img src={`${image}`} alt={`${nom}`} className="card-img" />
      <p>{description}</p>
      <button
        className="savoir-plus bg-red-700 mr-1 rounded text-sm py-2 px-3 text-white hover:bg-yellow-600 transition duration-150"
        type="button"
        id="btnPlus"
        onClick={clickModal}
      >
        En savoir plus
      </button>
      <Modal
        classSign={nom}
        toggleVisibility={btnShowModal}
        title={nom}
        content={descriptionFull}
        close
        bgColor="bg-red-100"
        modalClass="main-modal"
        visibility={visibility}
      />
    </div>
  );
}
export default Card;
