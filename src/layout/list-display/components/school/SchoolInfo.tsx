import SchoolType from '../../../../types/school.type';
import './school.css';

type SchoolProps = {
  school: SchoolType;
};

const SchoolInfo = ({ school: { name, course } }: SchoolProps) => {

  return (
    <>
      <h1>{name}</h1>
      <h3>{course}</h3>
    </>
  );
};

export default SchoolInfo;