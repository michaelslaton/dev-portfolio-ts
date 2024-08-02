import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import phoneButtonType from '../../../types/phoneButton.type';
import '../navphone.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';

type phoneButtonProps = {
    data: phoneButtonType;
    position: string;
  }

const PhoneButton: React.FC<phoneButtonProps> = ({ data, position }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className='phone-button__container'>
      <div
        className='phone-button__icon'
        onClick={()=> navigate(data.url)}
        style={{ backgroundColor: `${data.iconColor}`, color: `${data.fontColor}` }}
      >
        <FontAwesomeIcon data-testid='phone signal' icon={data.symbol}/>
      </div>
      { position !== 'bottom' &&
        <p className='phone-button__name'>
          {data.name}
        </p>
      }
    </div>
  );
};

export default PhoneButton;