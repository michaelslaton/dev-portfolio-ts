import { faBatteryThreeQuarters, faWifi, faSignal, faPowerOff, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { PortfolioState } from '../../App';
import './navphone.css';
import PhoneButton from './components/PhoneButton';
import phoneButtonType from '../../types/phoneButton.type';

const Navphone: React.FC = () => {
  const [appState, setAppState] = useContext(PortfolioState);
  const [ phoneState, setPhoneState ] = useState<string>('main');

  const phoneButtons: phoneButtonType[] = [
    {
      id: 1,
      name: 'Projects',
      iconColor: '#FFFFFF',
      fontColor: 'black',
      symbol: faDiagramProject,
    },
    {
      id: 2,
      name: "Calendar",
      iconColor: '#00ff15',
      fontColor: 'black',
      symbol: faDiagramProject,
    },
    {
      id: 3,
      name: "Stuff",
      iconColor: '#ff0000',
      fontColor: 'white',
      symbol: faDiagramProject,
    },
    {
      id: 4,
      name: "Stuff",
      iconColor: '#7700ff',
      fontColor: 'white',
      symbol: faDiagramProject,
    },
    {
      id: 5,
      name: "Stuff",
      iconColor: '#d0ff00',
      fontColor: 'black',
      symbol: faDiagramProject,
    }
  ];

  if (appState.power !== 'on') return (
    <div className='phone-container phone-off'>
      <div className='phone-top'>
        <div/>
        <div className='phone-top__middle-bar'/>
        <div/>
      </div>
      <div className='phone-buttons__container phone-off'>
        <button
          className='phone-buttons__power-button'
          onClick={()=> setAppState({...appState , power: 'on'})}>
            <FontAwesomeIcon data-testid='phone power' icon={faPowerOff}/>
        </button>
      </div>
    </div>
  )
  else if (phoneState === 'main') return (
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
      <div className='phone-buttons__container'>
        <div className="phone-buttons__grid">
          {phoneButtons.map((button)=>(
            <div key={button.id} className='phone-buttons__cel'>
              <PhoneButton data={button}/>
            </div>
          ))}
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
      <div className='phone-buttons__container'>

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