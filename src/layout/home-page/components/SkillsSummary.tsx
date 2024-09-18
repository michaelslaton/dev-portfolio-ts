import { NavigateFunction, useNavigate } from "react-router-dom";
import { default as skillsList } from "../../../data/skillsData";
import Skill from "../../skills/components/Skill";
import "../homePage.css";

const SkillsSummary: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="skills-summary__wrapper">
      <h2 className='widget-title'>Skills Summary</h2>

      <div className="skills-summary__list">
        {skillsList.map((skill) => {
          if (skill.homePage) return <Skill key={skill.id} data={skill} />;
        })}
      </div>
      
      <div className="see-more--wrapper">
        <div
          onClick={() => navigate("/skills")}
          className="see-more"
        >
          See more...
        </div>
      </div>
    </div>
  );
};

export default SkillsSummary;
