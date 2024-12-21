import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Experience from './components/experience/Experience';
import ListItem from './components/ListItem';
import Project from './components/project/Project';
import SectionHeader from '../components/section-header/SectionHeader';
import ExperienceType from '../../types/experienceType';
import ProjectType from '../../types/project.type';
import './listDisplay.css';

type ListDisplayProps = {
  title: 'Projects' | 'Experience';
  listData: ProjectType[] | ExperienceType[];
};

const ListDisplay = ({ listData, title }: ListDisplayProps) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const formattedList = [...listData].reverse();
  const { ref: visibilityRef, inView: isVisible } = useInView();
  const [ listState, setListState ] = useState<{
    selectedItem: ProjectType | ExperienceType | null;
    showItems: boolean;
  }>({
    selectedItem: null,
    showItems: true,
  });
    
  useEffect(()=>{
    if(id) {
      const foundItem = formattedList.find((item)=> item.id === Number(id));
      if(foundItem) setListState({...listState, selectedItem: foundItem});
    }
    else if (formattedList.length) setListState({...listState, selectedItem: formattedList[0]});
  },[location.pathname]);

  const handleClick = (item: ProjectType | ExperienceType): void => {
    if(!listState.showItems) setListState({showItems: true, selectedItem: item});
    else setListState({showItems: false, selectedItem: item});
  };

  function isExperienceType(item: ProjectType | ExperienceType): item is ExperienceType {
    return (item as ExperienceType).startDate !== undefined;
  };

  return (
    <div key={location.pathname} className='content__screen'>
      <SectionHeader title={title}/>

      <div className='list-display__container'>
        <div className='menu__list' ref={visibilityRef}>
          { formattedList.map((item,i)=>(
            <ListItem
              key={item.id}
              title={item.name}
              isSelected={listState.selectedItem?.id === item.id}
              showItems={listState.showItems}
              isVisible={isVisible}
              onClick={() => handleClick(item)}
              index={i}
            />
          ))}
        </div>

        { listState.selectedItem &&
          <>
            { isExperienceType(listState.selectedItem) ?
              <Experience experience={listState.selectedItem as ExperienceType}/>
              :
              <Project project={listState.selectedItem as ProjectType}/>
            }
          </>
        }
      </div>
    </div>
  );
};

export default ListDisplay;