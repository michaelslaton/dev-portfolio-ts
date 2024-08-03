import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import phoneButtonType from '../../../types/phoneButton.type';
import '../navphone.css';

type phoneButtonProps = {
  data: phoneButtonType;
  position: string;
}

const PhoneButton: React.FC<phoneButtonProps> = ({ data, position }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div
      className='phone-button__container'
      onClick={()=> navigate(data.url)}
    >
      <div
        className='phone-button__icon'
        style={{ backgroundColor: `${data.iconColor}`, color: `${data.fontColor}` }}
      >
        <FontAwesomeIcon data-testid='phone signal' icon={data.symbol}/>
      </div>
      { position === 'main' &&
        <p className='phone-button__name'>
          {data.name}
        </p>
      }
    </div>
  );
};

export default PhoneButton;