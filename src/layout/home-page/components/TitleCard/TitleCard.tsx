import mike from '../../../../assets/imgs/mike.jpg';
import './titleCard.css';

const TitleCard: React.FC = () => {

  return (
    <div className='title-card__wrapper'>
      <div className='title-card__title-wrapper'>
        <h1 className='title-card__title'>Michael Slaton</h1>
      </div>
      <div className='title-card__img-wrapper'>
        <img
          src={mike}
          alt={`It's Me!`}
          className='title-card__img'
        />
        

        <div className='title-card__back-line one'/>
        <div className='title-card__back-line two'/>
        <div className='title-card__back-line three'/>
        <div className='title-card__back-line four'/>
        <div className='title-card__back-line five'/>
      </div>
      <div className='title-card__backdrop'/>
    </div>
  );
};

export default TitleCard;