import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { PortfolioState } from '../../../App';
import './phoneMenuButton.css';

const PhoneMenuButton = () => {
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [appState, setAppState] = context;

  const onClickHandler = (): void => {
    setAppState({
      ...appState,
      showPhone: !appState.showPhone
    });
  };

  return (
    <button
      className={`phone-menu-button ${!appState.power && 'no-power'}`}
      onClick={()=> onClickHandler()}
    >
      <FontAwesomeIcon icon={faMobileAlt as IconProp}/>
    </button>
  );
};

export default PhoneMenuButton;