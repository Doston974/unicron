// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiAdobexd, SiAdobephotoshop } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from "./../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "ko'nikmalar",
    info: [
      {
        title: "Veb dasturlash",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <FaNodeJs key="node" />,
          <TbBrandReactNative key="reactNative" />,
          <SiTailwindcss key="tailwind" />,
        ],
      },
      {
        title: "UI/UX Dizayn",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobeXd" />,
          <SiAdobephotoshop key="adobePs" />,
        ],
      },
    ],
  },
  {
    title: "mukofotlar",
    info: [
      {
        title:
          "2022-yilda Toshkent viloyatida yil dasturchisi ko'rik tanlovida.",
        stage: "2-darajali diplom",
      },
      {
        title:
          "Ichki ishlar vazirligi tezkor qidiruv departamenti kiberxavfsizlik markazi.",
        stage: "2023-yil 3-darajali diplom",
      },
    ],
  },
  {
    title: "tajriba",
    info: [
      {
        title: "Samural dev",
        stage: "2021-yildan , 2022-yilgacha ",
      },
      {
        title:
          "Toshkent viloyati hokimligi huzuridagi Axborot komunikatsiya texnalogiyalarini rivojlantirish markazi",
        stage: "2022-yildan hozirgacha ",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[350px] right-[200px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center pt-4">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Biz soʻnggi <span className="text-accent">texnalogiyalar </span>
            asosida Vebsayt hamda ilovalar yaratamiz!
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 md:block hidden"
          >
            Raqamli kelajakda biz bilan birga boʻling , biz sizning
            muammoyingizni raqamli texnalogiyalar asosida yechib beramiz hamda
            raqobatchilaringizdan oʻzib ketishda oʻz hissamizni qoʻshishdan
            hursandmiz.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Yillik tajriba
                </div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Mijozlar
                </div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={24} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Loyihalar
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }
                   cursor-pointer capitalize xl:text-lg relative after:w-8
                   after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
