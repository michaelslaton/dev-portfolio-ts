type ProjectType = {
  id: number;
  name: string;
  img: string;
  type: string;
  description: string;
  tech: number[];
  screenShots: string[];
  demo?: string;
  code: string,
  codeb?: string;
};

export default ProjectType;