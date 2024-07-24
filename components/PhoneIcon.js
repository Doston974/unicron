import { useState } from "react";
import { FaPhoneFlip } from "react-icons/fa6";

const PhoneIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phone = "90 974 00 47";
  return (
    <div
      className={`p-4 animate-pulse transform transition-all duration-700 bg-white/10 backdrop-blur-sm rounded-full 
                  hover:scale-110 hover:pr-[20px] ${
                    isHovered ? "hover:animate-none flex gap-4" : ""
                  }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FaPhoneFlip className={`text-[25px] ${isHovered ? "" : ""}`} />
      {isHovered && <p className="text-white">{phone}</p>}
    </div>
  );
};

export default PhoneIcon;
