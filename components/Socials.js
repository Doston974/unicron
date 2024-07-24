import Link from "next/link";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icons: <FaFacebookF />,
    link: "https://www.facebook.com/Unicron.uz",
  },
  {
    id: 2,
    icons: <FaInstagram />,
    link: "https://www.instagram.com/unicron.uz/",
  },
  {
    id: 3,
    icons: <FaTelegramPlane />,
    link: "https://t.me/UnicronUz",
  },
  {
    id: 4,
    icons: <FaTwitter />,
    link: "https://twitter.com/UnicronUz",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {data.map((item) => (
        <Link
          href={item.link}
          className="hover:text-accent transition-all duration-300"
          target="_blank"
          key={item.id}
        >
          {item.icons}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
