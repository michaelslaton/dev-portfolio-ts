import { useState } from 'react';
import { faList, faTable } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoryView from './components/CateoryView';
import ListView from './components/ListView';
import './skills.css';
import SectionHeader from '../components/section-header/SectionHeader';

const SkillsDisplay = () => {
  const [ menuSelected, setMenuSelected ] = useState<number>(1);
  
  return (
    <div className='content__screen'>
      <SectionHeader title='Skills'/>

      <div className='skills__menu'>
        <span
          className='skills__menu--item'
          onClick={()=> setMenuSelected(1)}
        >
          <FontAwesomeIcon icon={faTable as IconProp}/>
        </span>

        <span
          className='skills__menu--item'
          onClick={()=> setMenuSelected(2)}
        >
          <FontAwesomeIcon icon={faList as IconProp}/>
        </span>

        <div className={`skills__menu--highlight ${menuSelected === 1 && 'left'} ${menuSelected === 2 && 'right'}`}/>
      </div>
                
      <div className='skills__display'>
        { menuSelected === 1 &&
          <CategoryView/>
        }
        { menuSelected === 2 &&
          <ListView/>
        }
      </div>

    </div>
  );
};

export default SkillsDisplay;