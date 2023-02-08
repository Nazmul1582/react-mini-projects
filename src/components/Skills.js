const Skills = ({ skills }) => {
  return (
    <div className="flex flex-wrap items-end">
      <h2 className="text-2xl text-white font-bold mr-3">Skills:</h2>
      {skills.map((ele, index) => (
        <span className="mx-1 font-bold" key={index}>
          {ele},
        </span>
      ))}
    </div>
  );
};

export default Skills;
