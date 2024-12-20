// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition as IconDefinitionSolid } from '@fortawesome/fontawesome-free-solid';
import { IconDefinition as IconDefinitionBrands } from '@fortawesome/free-brands-svg-icons';

type phoneButtonType = {
  id: number;
  name: string;
  iconColor: string;
  fontColor: string;
  linkType: string;
  symbol: IconDefinitionSolid | IconDefinitionBrands;
  url: string;
};

export default phoneButtonType;