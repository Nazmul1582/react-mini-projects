const PersonalInfo = ({ person }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-5 mb-5">
      <div>
        <h2 className="text-2xl font-bold text-white">{person.name}</h2>
        <h3 className="text-lg font-semibold text-slate-300">
          {person.profession}
        </h3>
        <h3 className="mb-4  font-semibold text-slate-300">{person.address}</h3>
        <ul>
          <li>Phone: {person.contact.phone}</li>
          <li>
            Email:{" "}
            <a href="" className="text-blue-500 underline">
              {person.contact.email}{" "}
            </a>{" "}
          </li>
          <li>
            Github:{" "}
            <a href="" className="text-blue-500 underline">
              {person.contact.github}{" "}
            </a>{" "}
          </li>
          <li>
            Website:{" "}
            <a href="" className="text-blue-500 underline">
              {person.contact.website}{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
      <img
        src={person.image}
        alt="profilePic"
        className="w-48 rounded-lg object-cover shadow-xl shadow-slate-500/50"
      />
    </div>
  );
};
export default PersonalInfo;
