import {default as skillsList} from '../../data/skills';
import Skill from './components/Skill';
import './skills.css';

const SkillsDisplay: React.FC = () => {
  
  return (
    <div className='content__wrapper'>
      <div className='skills-list__wrapper'>
        {skillsList.map((skill)=>(<Skill data={skill}/>))}      
      </div>
    </div>
  );
};

export default SkillsDisplay;