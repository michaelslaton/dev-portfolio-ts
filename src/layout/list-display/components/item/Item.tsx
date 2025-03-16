import ProjectType from '../../../../types/project.type';
import ExperienceType from '../../../../types/experienceType';
import ProjectInfo from '../project/ProjectInfo';
import ExperienceInfo from '../experience/ExperienceInfo';
import './item.css';

type ItemProps = {
  data: ProjectType | ExperienceType;
}

const Item = ({data}: ItemProps) => {

  const formatScreenshots = (data: ProjectType | ExperienceType) => {
    if ('link' in data) return;
    if (data.screenShots.length === 0) return <></>;

    return (
      <div className='item__screenshots-wrapper'>
        {data.screenShots.map((image, i) => (
          <div key={i}>
            <img
              className='item__screenshot'
              src={image}
              alt='Screenshot'
            />
          </div>
        ))}
      </div>
    );
  };

  const formatInfo = (data: ProjectType | ExperienceType) => {
    let results = <></>;
    
    if('startDate' in data) results = <ExperienceInfo experience={data}/>;
    else results = <ProjectInfo project={data}/>;

    return results;
  };

  return (
    <div className='item__wrapper'>
      <div className='item'>
        <img
          src={data.img}
          className='item__img'
          alt={`${data.name} hero image`}
        />

        <div className='item__info'>
          <div className='item__titles'>
            <h2>{data.name}</h2>
            <h3>{data.subTitle}</h3>
          </div>

          {formatInfo(data)}

        </div>
      </div>
      
      {formatScreenshots(data)}
    </div>
  );
};

export default Item;