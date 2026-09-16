interface ParamsProps {
  params: Promise<{
    userid: string;
  }>;
}

const UserIdPage = async ({ params }: ParamsProps) => {
  const { userid } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
  const data = await res.json();
  //Here we get, Single object → access properties directly

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
      <h2>{data.phone}</h2>
      <h2>{data.website}</h2>
    </div>
  );
};

export default UserIdPage;
