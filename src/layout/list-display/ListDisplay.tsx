import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ExperienceType from '../../types/experienceType';
import Item from './components/item/Item';
import ListItem from './components/ListItem';
import ProjectType from '../../types/project.type';
import SectionHeader from '../components/section-header/SectionHeader';
import SchoolType from '../../types/school.type';
import './listDisplay.css';

type ListDisplayProps = {
  title: 'Projects' | 'Experience' | 'School';
  listData: ProjectType[] | ExperienceType[] | SchoolType[];
};

const ListDisplay = ({ listData, title }: ListDisplayProps) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const formattedList = [...listData].reverse();
  const { ref: visibilityRef, inView: isVisible } = useInView();
  const [ listState, setListState ] = useState<{
    selectedItem: ProjectType | ExperienceType | SchoolType | null;
    showItems: boolean;
  }>({
    selectedItem: null,
    showItems: true,
  });
    
  useEffect(()=>{
    if(id){
      const foundItem = formattedList.find((item)=> item.id === Number(id));
      if(foundItem) setListState({...listState, selectedItem: foundItem});
    } else if (formattedList.length) setListState({...listState, selectedItem: formattedList[0]});
  },[location.pathname]);

  const handleClick = (item: ProjectType | ExperienceType | SchoolType): void => {
    if(!listState.showItems) setListState({showItems: true, selectedItem: item});
    else setListState({showItems: false, selectedItem: item});
  };

  const handleChange = (itemId: string): void => {
    const foundItem = formattedList.find((item)=> item.id === Number(itemId));
    if(foundItem) setListState({...listState, selectedItem: foundItem});
  };

  return (
    <div key={location.pathname} className='content__screen'>
      <SectionHeader title={title}/>

      <div className='list-display__container' ref={visibilityRef}>
        <div className='menu__list'>
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

        <select
          id='item list'
          name='item list'
          className='list__drop-down'
          defaultValue={id ? `${id}` : ''}
          onChange={(e)=> handleChange(e.target.value)}
        >
          <option
            disabled={true}
            value=''
          >
              {title}
          </option>
          { formattedList.map((item,i)=>(
            <option
              key={i}
              value={`${item.id}`}
            >
              {item.name}
            </option>
          ))}
        </select>

        { listState.selectedItem && <Item data={listState.selectedItem}/> }

      </div>
    </div>
  );
};

export default ListDisplay;