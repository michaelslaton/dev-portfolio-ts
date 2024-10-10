import Divider from '../components/divider/Divider';
import mike from '../../assets/imgs/mike.jpg';
import './about.css';

const About: React.FC = () => {

  return (
    <div className='content__screen'>
      <div className='page-title__wrapper'>
        <h1 className='page-title reveal'>
            About
        </h1>
      </div>
      <Divider/>

      <div>
        <div className='about__header-grid'>
          
          <img
            src={mike}
            className='about__profile-picture'
            alt='Mike Photo'
          />

          <div>
            
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;