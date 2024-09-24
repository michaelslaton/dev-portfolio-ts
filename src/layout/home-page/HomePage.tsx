import { useContext } from 'react';
import { PortfolioState } from '../../App';
import Divider from '../components/divider/Divider';
import SkillsSummary from './components/SkillsSummary';
import RecentProject from './components/RecentProject';
import './homePage.css';

const HomePage: React.FC = () => {
  const [appState] = useContext(PortfolioState);

  if (!appState.power) return ( <></> );

  return (
    <div className='home-page'>
      <h1 className='page-title reveal'>Home</h1>
      <Divider />

      <section className='widgets-wrapper'>
        <SkillsSummary/>
        <RecentProject/>
        <SkillsSummary/>
      </section>
    </div>
  );
};

export default HomePage;