import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import phoneButtonType from '../../../types/phoneButton.type';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '../navphone.css';

type phoneButtonProps = {
  data: phoneButtonType;
  position: string;
}

const PhoneButton: React.FC<phoneButtonProps> = ({ data, position }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      { data.linkType === 'local' ?
        <div
          className='phone-button__container'
          onClick={()=> navigate(data.url)}
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
          target="_blank"
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