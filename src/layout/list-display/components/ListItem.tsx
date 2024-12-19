import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ListItemProps = { 
  title: string; 
  isSelected: boolean; 
  isVisible: boolean; 
  showItems: boolean;
  onClick: () => void;
};

const ListItem = React.memo(({ title, isSelected, isVisible, showItems, onClick }: ListItemProps) => {
  const getChevronIcon = () => {
    if (!isSelected) return <FontAwesomeIcon icon={faAngleLeft as IconProp} />;
    if (isVisible) return <FontAwesomeIcon icon={faAngleDown as IconProp} />;
    return null;
  };

  return (
    <div
      onClick={onClick}
      className={`list-item 
        ${isSelected ? 'selected' : ''} 
        ${isVisible ? 'list-item__slide-up' : 'list-item__slide-down'}
        ${ showItems || isSelected ? 'show' : 'no-show'}
      `}
    >
      <span className='list-chevron'>{getChevronIcon()}</span>
      {` ${title}`}
    </div>
  );
});

export default ListItem;