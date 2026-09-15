import Link from "next/link";

interface Data {
  id: number;
  name: string;
  category: string;
  level: string;
}
interface Props {
  value: Data;
}

const Value = ({ value }: Props) => {
  const { name, id } = value;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <Link href={`/blogs/${id}`}>
            <button className="btn">See Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Value;
