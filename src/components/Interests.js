const Interests = ({ interests }) => {
  return (
    <div className="flex items-end flex-wrap">
      <h2 className="text-2xl text-white font-bold mr-3">Interests:</h2>
      {interests.map((ele, index) => (
        <span className="mx-1 font-bold" key={index}>
          {ele},
        </span>
      ))}
    </div>
  );
};
export default Interests;
