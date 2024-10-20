type ExperienceType = {
  id: number;
  name: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  img: string;
  description: string;
  tech: number[];
  screenShots: string[];
  demo?: string;
  code: string,
  codeb?: string;
};

export default ExperienceType;