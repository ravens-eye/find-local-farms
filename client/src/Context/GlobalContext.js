
import React, { useState } from 'react';

const defaultGlobalState = {
  authType: 'login'
};

const GlobalContext = React.createContext([{}, () => {}]);

const Provider = props => {
  const [globalState, setGlobalState] = useState(defaultGlobalState);
  return (
    <GlobalContext.Provider value={[globalState, setGlobalState]}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, Provider };
