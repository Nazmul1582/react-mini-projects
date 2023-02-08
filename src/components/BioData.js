import Skills from "./Skills";
import Interests from "./Interests";
import PersonalInfo from "./PersonalInfo";

const BioData = ({ person }) => {
  return (
    <div className="bg-slate-700 p-5 lg:p-10 w-4/5 md:w-2/3 lg:max-w-screen-md mx-auto rounded-md">
      <PersonalInfo person={person} />
      <Skills skills={person.skills} />
      <Interests interests={person.interests} />
    </div>
  );
};
export default BioData;
