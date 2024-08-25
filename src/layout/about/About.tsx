import Divider from '../components/divider/Divider';
import './about.css';

const About: React.FC = () => {

  return (
    <div className='content__screen'>
      <div className='center'>
        <h1 className='page-title'>
          <div className="reveal">
            About
          </div>
        </h1>
      </div>
      <Divider/>


      
    </div>
  );
};

export default About;