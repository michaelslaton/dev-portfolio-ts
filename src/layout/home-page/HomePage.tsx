import { useContext } from 'react';
import { PortfolioState } from '../../App';
import SkillsSummary from './components/SkillsSummary';
import RecentProject from './components/RecentProject';
import RecentExperience from './components/RecentExperience';
import TitleCard from './components/TitleCard/TitleCard';
import './homePage.css';

const HomePage: React.FC = () => {
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [ appState ] = context;

  if (!appState.power) return ( <></> );

  return (
    <div className='content__screen'>

      <TitleCard/>

      <article className='home-page__summary'>
        Software developer with one year of experience in full-stack development, 
        skilled in React, Redux, and TypeScript. Focused on delivering user-centered 
        solutions that enhance functionality and user experience. Adaptable, 
        collaborative, and eager to contribute to innovative tech environments.
      </article>

      <section className='widgets-wrapper'>
        <RecentExperience/>
        <SkillsSummary/>
        <RecentProject/>
      </section>
    </div>
  );
};

export default HomePage;