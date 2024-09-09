import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition as IconDefinitionSolid } from '@fortawesome/fontawesome-free-solid';

type phoneButtonType = {
  id: number;
  name: string;
  iconColor: string;
  fontColor: string;
  linkType: string;
  symbol: IconDefinition | IconDefinitionSolid;
  url: string;
};

export default phoneButtonType;