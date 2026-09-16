interface ParamsData {
  params: Promise<{ slug: string }>;
}

const PostDynamicData = async ({ params }: ParamsData) => {
  const { slug } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const data = await res.json();
  return (
    <div>
      <h1>{data.title}</h1>
      <h1>{data.body}</h1>
    </div>
  );
};

export default PostDynamicData;
