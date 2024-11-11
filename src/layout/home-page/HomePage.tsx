import { useContext } from 'react';
import { PortfolioState } from '../../App';
import SkillsSummary from './components/SkillsSummary';
import RecentProject from './components/RecentProject';
import mike from '../../assets/imgs/mike.jpg';
import './homePage.css';

const HomePage: React.FC = () => {
  const [appState] = useContext(PortfolioState);

  if (!appState.power) return ( <></> );

  return (
    <div className='home-page'>
      {/* <div className='page-title__wrapper'>
        <h1 className='page-title reveal'>
          Home
        </h1>
      </div>
      <Divider /> */}

      <div className='home-page__profile-img--wrapper'>
        <img
          src={mike}
          alt={`It's Me!`}
          className='home-page__profile-img'
        />
        <h1>Michael Slaton</h1>
        <div className='home-page__profile-img--back-line one'/>
        <div className='home-page__profile-img--back-line two'/>
        <div className='home-page__profile-img--back-line three'/>
        <div className='home-page__profile-img--back-line four'/>
        <div className='home-page__profile-img--back-line five'/>
      </div>

      <section className='widgets-wrapper'>
        <SkillsSummary/>
        <RecentProject/>
        <SkillsSummary/>
      </section>
    </div>
  );
};

export default HomePage;