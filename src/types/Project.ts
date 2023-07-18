type Project = {
  id: number;
  show: boolean;
  name: string;
  img: string;
  type: string;
  description: string;
  tech: string[];
  demo?: string;
  codeF?: string;
  codeB?: string;
};

export default Project;