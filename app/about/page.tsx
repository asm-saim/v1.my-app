import Image from "next/image";

const Page = () => {
  return (
    <div>
      <Image src="/next.svg" alt="next img" width={500} height={500}></Image>
      <Image src="/GettyImages.jpg" alt="image of getty" width={500} height={300}></Image>
    </div>
  );
};

export default Page;
