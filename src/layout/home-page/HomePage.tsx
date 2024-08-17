import { useContext } from "react";
import { PortfolioState } from "../../App";
import {default as skillsList} from '../../data/skills';
import Skill from "../skills/components/Skill";
import './homePage.css';

const HomePage: React.FC = () => {
  const [appState] = useContext(PortfolioState);

  if(!appState.power) return (
    <>
    </>
  );

  return (
    <>
      Home
      <div className='home-page__skills'>
        <h3>
          Skills Summary
        </h3>
        <div className='home-page__skills-list'>
          {skillsList.map((skill)=> {
            if(skill.homePage) return (
                <Skill key={skill.id} data={skill}/>
            );
          })}
        </div>
        <div className='home-page__shills-list--more'>
          See More...
        </div>
      </div>
    </>
  );
};

export default HomePage;