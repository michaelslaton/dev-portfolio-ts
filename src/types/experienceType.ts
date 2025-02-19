type ExperienceType = {
  id: number;
  name: string;
  subTitle: string;
  startDate: Date;
  endDate?: Date;
  employmentType?: string;
  description: string;
  bulletPoints?: string[];
  tech: number[];
  img: string;
  screenShots: string[];
  demo?: string;
  code: string,
  codeb?: string;
};

export default ExperienceType;