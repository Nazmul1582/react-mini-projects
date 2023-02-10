import img1 from "./assets/rose.jpg";
import img2 from "./assets/mountain.jpg";
import img3 from "./assets/flower4.jpg";

const persons = [
  {
    name: "Md. Nazmul Hasan",
    profession: "Front-End Developer",
    image: img1,
    address: "Cumilla, Bangladesh",
    dateOfBirth: "09-02-1998",
    skills: ["HTML", "CSS", "JavaScript", "React Js", "TailwindCSS"],
    interests: ["Coding", "Reading", "Traveling"],
    contact: [
      {
        name: "phone",
        value: "01812-345678",
      },
      { name: "email", value: "nazmul@gmail.com" },
      {
        name: "github",
        value: "https://github.com/nazmul",
      },
      { name: "website", value: "https://nazmul.com" },
    ],
  },
  {
    name: "Nahidul Islam",
    profession: "Software Engineer",
    image: img2,
    address: "Mymonshing, Bangladesh",
    dateOfBirth: "01-01-1999",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React Js",
      "Redux",
      "TypeScript",
      "TailwindCSS",
    ],
    interests: ["Writing", "Reading", "Traveling"],
    contact: [
      {
        name: "phone",
        value: "01812-345678",
      },
      { name: "email", value: "nahid@gmail.com" },
      {
        name: "github",
        value: "https://github.com/nahid",
      },
      { name: "website", value: "https://nahid.com" },
    ],
  },
  {
    name: "Md. Saikat Molla",
    profession: "Mern Stact Developer",
    image: img3,
    address: "Dhaka, Bangladesh",
    dateOfBirth: "01-01-1999",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "MongooDB",
      "Express",
    ],
    interests: ["Playing", "Traveling", "Reading"],
    contact: [
      {
        name: "phone",
        value: "01812-345678",
      },
      { name: "email", value: "saikat@gmail.com" },
      {
        name: "github",
        value: "https://github.com/saikat",
      },
      { name: "website", value: "https://saikat.com" },
    ],
  },
];
export default persons;
