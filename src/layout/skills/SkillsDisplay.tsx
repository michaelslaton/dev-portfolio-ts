import Divider from '../components/divider/Divider';
import { useState } from 'react';
import { faList, faTable } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './skills.css';
import ListView from './components/ListView';
import CategoryView from './components/CateoryView';

const SkillsDisplay: React.FC = () => {
  const [ menuSelected, setMenuSelected ] = useState<number>(1);
  
  return (
    <div className='content__screen'>
      <div className='page-title__wrapper'>
        <h1 className='page-title reveal'>
            Skills
        </h1>
      </div>
      <Divider/>

      <div className='skills__menu--wrapper'>
        <div className='skills__menu'>
          <span
            className='skills__menu--item'
            onClick={()=> setMenuSelected(1)}
          >
            <FontAwesomeIcon icon={faList as IconProp}/>
          </span>
          <span
            className='skills__menu--item'
            onClick={()=> setMenuSelected(2)}
          >
            <FontAwesomeIcon icon={faTable as IconProp}/>
          </span>
          <span
            className='skills__menu--item'
            onClick={()=> setMenuSelected(3)}
          >
            <FontAwesomeIcon icon={faList as IconProp}/>
          </span>
          <div className={`skills__menu--highlight ${menuSelected === 1 && 'left'} ${menuSelected === 2 && 'center'} ${menuSelected === 3 && 'right'}`}/>
        </div>
      </div>
                
      <div className="skills__display">
        { menuSelected === 1 &&
          <ListView/>
        }
        { menuSelected === 2 &&
          <CategoryView/>
        }
        { menuSelected === 3 &&
          <ListView/>
        }
      </div>

    </div>
  );
};

export default SkillsDisplay;