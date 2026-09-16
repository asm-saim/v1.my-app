import Link from "next/link";

interface UserProps {
  id: number;
  name: string;
  email: string;
}
const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return (
    <div>
      <div>Total Users: {data.length}</div>
      <div className="grid grid-cols-3 gap-5">
        {data.map((user: UserProps) => (
          <div key={user.id} className=" card card-border bg-base-100 ">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`}>
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
