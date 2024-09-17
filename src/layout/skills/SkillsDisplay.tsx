import {default as skillsList} from '../../data/skillsData';
import Divider from '../components/divider/Divider';
import Skill from './components/Skill';
import { useInView } from 'react-intersection-observer';
import './skills.css';
import { useState } from 'react';

const SkillsDisplay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  const sortedSkillsList = skillsList.sort((a,b)=>{ return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;});
  if(visible && isVisible !== true) setIsVisible(true);
  
  return (
    <div className='content__screen'>
      <h1 className='page-title reveal'>
          Skills
      </h1>
      <Divider/>

      <div className='skills__display' ref={visibilityRef}>
        <section>
          <h3 className={`skills-list__title ${isVisible ? 'slide-in' : 'slide-out'}`}>
            Language
          </h3>
          <div className={`skills-list__wrapper slide-down ${isVisible ? 'slide-up' : ''}`}>
            { sortedSkillsList.map((skill)=> {
              if(skill.category.includes('language')) return (
                <Skill key={skill.id} data={skill}/>
              );
            })}
          </div>
        </section>
        
        <section>
          <h3 className={`skills-list__title ${isVisible ? 'slide-in' : 'slide-out'}`}>
            Front-End
          </h3>
          <div className={`skills-list__wrapper slide-down ${isVisible ? 'slide-up' : ''}`}>
            { sortedSkillsList.map((skill)=> {
              if(skill.category.includes('front-end')) return (
                <Skill key={skill.id} data={skill}/>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className={`skills-list__title ${isVisible ? 'slide-in' : 'slide-out'}`}>
            Back-End
          </h3>
          <div className={`skills-list__wrapper slide-down ${isVisible ? 'slide-up' : ''}`}>
            { sortedSkillsList.map((skill)=> {
              if(skill.category.includes('back-end')) return (
                <Skill key={skill.id} data={skill}/>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className={`skills-list__title ${isVisible ? 'slide-in' : 'slide-out'}`}>
            Version Control
          </h3>
          <div className={`skills-list__wrapper slide-down ${isVisible ? 'slide-up' : ''}`}>
            { sortedSkillsList.map((skill)=> {
              if(skill.category.includes('version-control')) return (
                <Skill key={skill.id} data={skill}/>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className={`skills-list__title ${isVisible ? 'slide-in' : 'slide-out'}`}>
            Testing
          </h3>
          <div className={`skills-list__wrapper slide-down ${isVisible ? 'slide-up' : ''}`}>
            { sortedSkillsList.map((skill)=> {
              if(skill.category.includes('testing')) return (
                <Skill key={skill.id} data={skill}/>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className={`skills-list__title ${isVisible ? 'slide-in' : 'slide-out'}`}>
            Other
          </h3>
          <div className={`skills-list__wrapper slide-down ${isVisible ? 'slide-up' : ''}`}>
            { sortedSkillsList.map((skill)=> {
              if(skill.category.includes('other')) return (
                <Skill key={skill.id} data={skill}/>
              );
            })}
          </div>
        </section>
      </div>

    </div>
  );
};

export default SkillsDisplay;