import { createContext, useState, useEffect } from 'react';

const ModalContext = createContext({
  modalShown: null,
  showModal: () => {},
  hideModal: () => {},
});

export const ModalContextProvider = (props) => {
  const [modalShown, setModalShown] = useState(false);

  const showModal = () => {
    setModalShown(true);
  };

  const hideModal = () => {
    setModalShown(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalShown,
        showModal,
        hideModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
