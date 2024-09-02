import { useContext } from "react";
import { PortfolioState } from "../../App";
import {default as skillsList} from '../../data/skills';
import Skill from "../skills/components/Skill";
import './homePage.css';
import { NavigateFunction, useNavigate } from "react-router-dom";
import Divider from "../components/divider/Divider";

const HomePage: React.FC = () => {
  const [appState] = useContext(PortfolioState);
  const navigate: NavigateFunction = useNavigate();

  if(!appState.power) return (
    <>
    </>
  );

  return (
    <>
      <div className='center'>
        <h1 className='page-title reveal'>
          Home
        </h1>
      </div>
      <Divider/>

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
        <div
          onClick={()=> navigate('/skills')}
          className='home-page__shills-list--more'
        >
          See More...
        </div>

      </div>
    </>
  );
};

export default HomePage;