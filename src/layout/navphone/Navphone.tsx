import { faBatteryThreeQuarters, faWifi, faSignal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './navphone.css';

const Navphone: React.FC = () => {
  const [ phoneState, setPhoneState ] = useState<string>('main');

  if (phoneState === 'main') return (
    <div className='phone-container phone-main'>
      <div className='phone-top'>
        <div className='phone-top__icons'>
          <div
            className='phone-top__time'
          >
            7:00pm    
          </div>
        </div>
        <div className='phone-top__middle-bar'/>
        <div
          className='phone-top__icons'
          onClick={()=> setPhoneState('tools')}
        >
          <FontAwesomeIcon data-testid='phone signal' icon={faSignal}/>
          <FontAwesomeIcon data-testid='phone wifi' icon={faWifi}/>
          <FontAwesomeIcon data-testid='phone battery' className="phone-top__battery" icon={faBatteryThreeQuarters}/>
        </div>
      </div>
    </div>
  );
  else if (phoneState === 'tools') return (
    <div className='phone-container phone-tools'>
      <div className='phone-top'>
        <div className='phone-top__icons'/>
        <div className='phone-top__middle-bar'/>
        <div className='phone-top__icons'/>
      </div>
      <div
        className='phone-tools__bottom'
        onClick={()=> setPhoneState('main')}
      >
        <div className='phone-tools__bottom-bar'/>
      </div>
    </div>
  )
};

export default Navphone;