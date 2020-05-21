
import React from 'react';

export const modalDefault = {
  open: false
};

const ModalContext = React.createContext(modalDefault);

export default ModalContext;
