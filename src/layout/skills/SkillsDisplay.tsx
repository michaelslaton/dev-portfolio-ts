import {default as skillsList} from '../../data/skills';
import Skill from './components/Skill';
import './skills.css';

const SkillsDisplay: React.FC = () => {
  
  return (
    <div className='content__wrapper'>
      <h3 className='skills-list__title'>
        Front-End
      </h3>
      <div className='skills-list__wrapper'>
        { skillsList.map((skill)=> {
          if(skill.category.includes('front-end')) return <Skill key={skill.id} data={skill}/>
        })}
      </div>

      <div className="divider"/>

      <h3 className='skills-list__title'>
        Back-End
      </h3>
      <div className='skills-list__wrapper'>
        { skillsList.map((skill)=> {
          if(skill.category.includes('back-end')) return <Skill key={skill.id} data={skill}/>
        })}
      </div>

      <div className="divider"/>

      <h3 className='skills-list__title'>
        Version Control
      </h3>
      <div className='skills-list__wrapper'>
        { skillsList.map((skill)=> {
          if(skill.category.includes('version-control')) return <Skill key={skill.id} data={skill}/>
        })}
      </div>

      <div className="divider"/>

      <h3 className='skills-list__title'>
        Testing
      </h3>
      <div className='skills-list__wrapper'>
        { skillsList.map((skill)=> {
          if(skill.category.includes('testing')) return <Skill key={skill.id} data={skill}/>
        })}
      </div>

      <div className="divider"/>

      <h3 className='skills-list__title'>
        Other
      </h3>
      <div className='skills-list__wrapper'>
        { skillsList.map((skill)=> {
          if(skill.category.includes('other')) return <Skill key={skill.id} data={skill}/>
        })}
      </div>
    </div>
  );
};

export default SkillsDisplay;