import { useContext } from 'react';
import { PortfolioState } from '../../App';
import SkillsSummary from './components/SkillsSummary';
import RecentProject from './components/RecentProject';
import RecentExperience from './components/RecentExperience';
import mike from '../../assets/imgs/mike.jpg';
import './homePage.css';

const HomePage: React.FC = () => {
  const [appState] = useContext(PortfolioState);

  if (!appState.power) return ( <></> );

  return (
    <div className='home-page'>

      <div className='home-page__profile-img--wrapper'>
        <img
          src={mike}
          alt={`It's Me!`}
          className='home-page__profile-img'
        />
        
        <h1 className='home-page__title'>Michael Slaton</h1>

        <div className='home-page__profile-img--back-line one'/>
        <div className='home-page__profile-img--back-line two'/>
        <div className='home-page__profile-img--back-line three'/>
        <div className='home-page__profile-img--back-line four'/>
        <div className='home-page__profile-img--back-line five'/>
      </div>


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