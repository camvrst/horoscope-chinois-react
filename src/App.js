/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { useState } from 'react';
import Card from './components/Card/Card';
import FormControl from './components/Form/Form';
import BtnValider from './components/ButtonValider/ButtonValider';
import Modal from './components/Modal/Modal';
import signs from './data/signes';
import truncateStr from './functions/truncate';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const montrerModal = () => {
    setModalVisible(true);
  };
  return (
    <div className="container mx-auto">
      <h1 className="title">Horoscope Chinois</h1>
      <FormControl />
      <BtnValider />
      <div className="flex flex-wrap justify-center">
        {signs.map((s) => (
          <Card
            nom={s.nom}
            image={s.image}
            description={truncateStr(s.description, 150)}
            descriptionFull={s.description}
            key={s.nom}
            clickModal={montrerModal}
            contentModal={setModalContent}
            titleModal={setModalTitle}
          />
        ))}
        <Modal
          toggleVisibility={setModalVisible}
          title={modalTitle}
          content={modalContent}
          close
          bgColor="bg-red-100"
          modalClass="main-modal"
          visibility={modalVisible}
        />
      </div>
    </div>
  );
}

export default App;

/*

state dans app, qui aura le onclick
<Modal
        title="Main"
        close
        {...attrs}
        bgColor="bg-pink-100"
        modalClass="main-modal"
      >
        <p>
          Texte du main <strong>en gras</strong> Suite du texte
        </p>
      </Modal>
      <Modal
        title="Error"
        close
        {...attrs}
        bgColor="bg-red-100"
        modalClass="error-modal"
      >
        <p>
          Texte de l&apos;error <strong>en gras</strong> Suite du texte
        </p>
      </Modal>
      <Modal
        title="Confirm"
        close
        {...attrs}
        bgColor="bg-blue-200"
        modalClass="confirm-modal"
      >
        <p>
          Texte du confirm <strong>en gras</strong> <br /> Suite du texte
        </p>
      </Modal>
      */
