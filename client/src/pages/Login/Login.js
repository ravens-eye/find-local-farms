import React, { useContext } from 'react';

import ModalContext from '../../Context/ModalContext';

export default function Login() {
  const value = useContext(ModalContext);
  console.log(value);

  return <div>LOGIN</div>;
}
