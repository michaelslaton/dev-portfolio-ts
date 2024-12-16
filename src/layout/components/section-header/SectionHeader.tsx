import Divider from '../divider/Divider';
import './sectionHeader.css';

type SectionHeaderProps = {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {

  return (
    <>
      <div className='page-title__wrapper'>
        <h1 className='page-title reveal'>
          {title}
        </h1>
      </div>
      <Divider />
    </>
  );
};

export default SectionHeader;