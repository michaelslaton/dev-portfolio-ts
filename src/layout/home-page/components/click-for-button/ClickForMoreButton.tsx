import { NavigateFunction, useNavigate } from 'react-router-dom';
import './clickForMore.css';

type clickForMoreProps = {
  url: string;
}

const ClickForMoreButton = ({ url }: clickForMoreProps) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <button
    className='clickFor__button'
    onClick={()=> navigate(url)}
    >
      Click for more!
    </button>
  );
};

export default ClickForMoreButton;