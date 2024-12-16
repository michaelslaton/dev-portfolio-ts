import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ProjectType from '../../../types/project.type';

type ProjectListItemProps = { 
  project: ProjectType; 
  isSelected: boolean; 
  isVisible: boolean; 
  showItems: boolean;
  onClick: () => void;
};

const ProjectListItem = React.memo(({ project, isSelected, isVisible, showItems, onClick }: ProjectListItemProps) => {
  const getChevronIcon = () => {
    if (!isSelected) return <FontAwesomeIcon icon={faAngleLeft as IconProp} />;
    if (isVisible) return <FontAwesomeIcon icon={faAngleDown as IconProp} />;
    return null;
  };

  return (
    <div
      onClick={onClick}
      className={`projects__list-item 
        ${isSelected ? 'selected' : ''} 
        ${isVisible ? 'projects__list-item__slide-up' : 'projects__list-item__slide-down'}
        ${ showItems || isSelected ? 'show' : 'no-show'}
      `}
    >
      <span className='list-chevron'>{getChevronIcon()}</span>
      {` ${project.name}`}
    </div>
  );
});

export default ProjectListItem;