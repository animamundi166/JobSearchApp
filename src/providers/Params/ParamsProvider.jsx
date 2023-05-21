import { useState } from 'react';
import { ParamsContext } from './context';
import { params } from '../../constants';

const ParamsProvider = ({ children }) => {
  const [catalogValue, setCatalogValue] = useState(null);
  const [inputFromValue, setInputFromValue] = useState();
  const [inputToValue, setInputToValue] = useState();
  const [activePage, setPage] = useState(1);

  const resetParams = () => {
    setCatalogValue(null);
    setInputFromValue('');
    setInputToValue('');
    params.page = 0;
    params.no_agreement = 0;
  };

  return (
    <ParamsContext.Provider
      value={{
        catalogValue,
        setCatalogValue,
        inputFromValue,
        setInputFromValue,
        inputToValue,
        setInputToValue,
        activePage,
        setPage,
        resetParams,
      }}
    >
      {children}
    </ParamsContext.Provider>
  );
};

export default ParamsProvider;
