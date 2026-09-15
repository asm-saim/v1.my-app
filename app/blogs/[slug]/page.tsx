interface ParamsProps {
  params: Promise<{
    slug: string;
  }>;
}

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
const page = async ({ params }: ParamsProps) => {
  const { slug } = await params;

  const info = data.find((value) => value.id === parseInt(slug));

  return (
    <div>
      <h1>ID No: {slug}</h1>
      {info && (
        <div>
          <h1>{info.name}</h1>
          <h1>{info.level}</h1>
          <h1>{info.category}</h1>
        </div>
      )}
    </div>
  );
};

export default page;
