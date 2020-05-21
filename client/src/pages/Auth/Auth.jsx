// React
import React, { useContext } from 'react';

// Components
import AuthenticationForm from '../../components/AuthenticationForm';
import { GlobalContext } from '../../Context/GlobalContext';

// Styles
import './Auth.css';

export default function Auth() {
  const { authType } = useContext(GlobalContext)[0];

  return (
    <>
      <div className='padder'></div>
      <AuthenticationForm type={authType} />
    </>
  );
}
