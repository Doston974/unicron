import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image 
    src={"/rob-png.png"}
    width={577}
    height={498}
    alt="avatar img"
    className="translate-z-0 w-full h-full"
    />
  </div>;
};

export default Avatar;
