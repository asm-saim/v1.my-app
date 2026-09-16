import Image from "next/image";

const Page = () => {
  return (
    <div>
      <Image src="/next.svg" alt="next img" width={500} height={500}></Image>
      <Image src="/GettyImages.jpg" alt="image of getty" width={500} height={300}></Image>

      {/* Remote image load/outside img load  */}
      <Image
        src="https://images.unsplash.com/photo-1789167871825-dbfb0745c067"
        alt="circle img"
        width={500}
        height={500}
      ></Image>

      {/* Form img bb */}
      <Image src="https://i.ibb.co.com/7jsy44g/img-12.jpg" alt="jar img" width={500} height={500}></Image>
    </div>
  );
};

export default Page;
