import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import phoneButtonType from '../../../types/phoneButton.type';
import '../navphone.css';

type phoneButtonProps = {
    data: phoneButtonType;
  }

const PhoneButton: React.FC<phoneButtonProps> = ({ data }) => {

  return (
    <div className='phone-button__container'>
      <div
        className='phone-button__icon'
        style={{ backgroundColor: `${data.iconColor}`, color: `${data.fontColor}` }}
      >
        <FontAwesomeIcon data-testid='phone signal' icon={data.symbol}/>
      </div>
      <p className='phone-button__name'>
        {data.name}
      </p>
    </div>
  );
};

export default PhoneButton;