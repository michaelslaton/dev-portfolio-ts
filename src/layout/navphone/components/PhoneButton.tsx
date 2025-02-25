import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import phoneButtonType from '../../../types/phoneButton.type';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '../navphone.css';
import { useContext } from 'react';
import { PortfolioState } from '../../../App';

type phoneButtonProps = {
  data: phoneButtonType;
  position: string;
  setAppState?: Function;
}

const PhoneButton = ({ data, position }: phoneButtonProps) => {
  const navigate: NavigateFunction = useNavigate();
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [ appState, setAppState ] = context;

  return (
    <>
      { data.linkType === 'local' ?
        <div
          className='phone-button__container'
          onClick={()=>{
            if(data.name === 'Settings') setAppState!({ ...appState, screen: 'settings' });
            else { navigate(data.url);
              setAppState({
                ...appState,
                showPhone: false,
              })
            }
          }}
        >
          <div
            className='phone-button__icon'
            style={{ backgroundColor: `${data.iconColor}`, color: `${data.fontColor}` }}
          >
            <FontAwesomeIcon data-testid='phone signal' icon={data.symbol as IconProp}/>
          </div>
          { position === 'main' &&
            <p className='phone-button__name'>
              {data.name}
            </p>
          }
        </div>
        :
        <a
          href={data.url}
          target='_blank'
          className='phone-button__container'
        >
          <div
            className='phone-button__icon'
            style={{ backgroundColor: `${data.iconColor}`, color: `${data.fontColor}` }}
          >
            <FontAwesomeIcon data-testid='phone signal' icon={data.symbol as IconProp}/>
          </div>
          { position === 'main' &&
            <p className='phone-button__name'>
              {data.name}
            </p>
          }
        </a>
      }
    </>
  );
};

export default PhoneButton;