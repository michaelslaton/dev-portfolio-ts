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

const PhoneButton: React.FC<phoneButtonProps> = ({ data, position }) => {
  const navigate: NavigateFunction = useNavigate();
  const [ appState, setAppState ] = useContext(PortfolioState);

  return (
    <>
      { data.linkType === 'local' ?
        <div
          className='phone-button__container'
          onClick={()=>{
            if(data.name === 'Controls') setAppState!({ ...appState, screen: 'tools' });
            else navigate(data.url);
            setAppState({
              ...appState,
              showPhone: false,
            })
          }}
        >
          <div
            className='icon'
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
            className='icon'
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