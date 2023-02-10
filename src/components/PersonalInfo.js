const PersonalInfo = ({ name, profession, address, contact, image }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-5 mb-5">
      <div>
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <h3 className="text-lg font-semibold text-slate-300">{profession}</h3>
        <h3 className="mb-4  font-semibold text-slate-300">{address}</h3>
        {contact.map((ele) => (
          <ul key={ele.value} className="flex">
            <li>{ele.name}</li> :
            <li
              className={
                ele.name === "phone"
                  ? "ml-2"
                  : "text-blue-500 underline ml-2 cursor-pointer"
              }
            >
              {ele.value}
            </li>
          </ul>
        ))}
      </div>
      <img
        src={image}
        alt="profilePic"
        className="w-48 rounded-lg object-cover shadow-xl shadow-slate-500/50"
      />
    </div>
  );
};
export default PersonalInfo;
