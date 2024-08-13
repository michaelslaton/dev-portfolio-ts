import {default as skillsList} from '../../data/skills';
import Skill from './Skill';
import './skills.css';

const SkillsDisplay: React.FC = () => {
  
  return (
    <div>
      {skillsList.map((skill)=>(<Skill data={skill}/>))}      
    </div>
  );
};

export default SkillsDisplay;