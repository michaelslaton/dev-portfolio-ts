import { useContext } from 'react';
import { PortfolioState } from '../../App';
import Divider from '../components/divider/Divider';
import SkillsSummary from './components/SkillsSummary';
import './homePage.css';
import RecentProject from './components/RecentProject';

const HomePage: React.FC = () => {
  const [appState] = useContext(PortfolioState);

  if (!appState.power) return <></>;

  return (
    <div className='home-page'>
      <h1 className='page-title reveal'>Home</h1>
      <Divider />

      <section className='widgets-wrapper'>
        <SkillsSummary/>
        <RecentProject/>
      </section>
    </div>
  );
};

export default HomePage;