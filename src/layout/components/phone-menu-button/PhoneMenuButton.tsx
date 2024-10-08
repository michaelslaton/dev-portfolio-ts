import {faMobileAlt} from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useContext } from 'react';
import { PortfolioState } from '../../../App';
import './phoneMenuButton.css';

const PhoneMenuButton: React.FC = () => {
  const [ appState, setAppState ] = useContext(PortfolioState);

  const onClickHandler = (): void => {
    setAppState({
      ...appState,
      showPhone: !appState.showPhone
    })
  }

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