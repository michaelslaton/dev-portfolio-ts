type ProjectType = {
  id: number;
  show: boolean;
  name: string;
  img: string;
  type: string;
  description: string;
  tech: string[];
  demo?: string;
  code: string,
  codeb?: string;
};

export default ProjectType;