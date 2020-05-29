
import React, { useState } from 'react';

const modalDefault = false;

const ModalContext = React.createContext([{}, () => {}]);

const ModalProvider = props => {
  const [modal, setModal] = useState(modalDefault);
  return (
    <ModalContext.Provider value={[modal, setModal]}>
      {props.children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
