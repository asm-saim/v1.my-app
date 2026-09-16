import Link from "next/link";

interface PostProps {
  id: number;
  title: string;
}

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div>
      {data.map((post: PostProps) => (
        <div key={post.id} className="card card-border bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <div className="card-actions justify-end">
              <Link href={`/posts/${post.id}`}>
                <button className="btn btn-primary">See Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
