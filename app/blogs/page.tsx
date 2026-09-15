import Value from "../components/Value";

const page = () => {
  const data = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      level: "Beginner",
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      level: "Intermediate",
    },
    {
      id: 3,
      name: "MongoDB",
      category: "Database",
      level: "Intermediate",
    },
    {
      id: 4,
      name: "TypeScript",
      category: "Language",
      level: "Advanced",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      category: "Styling",
      level: "Beginner",
    },
    {
      id: 6,
      name: "Docker",
      category: "DevOps",
      level: "Advanced",
    },
  ];
  return <div>
    {
        data.map(val=><Value key={val.id} value={val}></Value>)
    }
  </div>;
};

export default page;
