import { FaQuoteLeft } from "react-icons/fa";
import  Image  from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// testimonial data
const testimonialData = [
  {
    image: "/farukh.png",
    name: "Farrux Tursunov",
    position: "Tadbirkor",
    message:
      "Unicron.uz sizning xizmatingizdan foidalanish juda yoqimli, g'oyalarimni zamon talablari asosida raqamlashtirib berganingizdan hursandman .",
  },
  {
    image: "/abdu.png",
    name: "Abdumalik Sidikov",
    position: "Korhona Direktori",
    message:
      "Unicron.uz jamoasi bilan tanishtirgan do'stimga rahmat aytaman, sizlar bilan ishlayotganimdan mamnunman ajoyib dizayn , ajoyib loyiha.",
  },
  {
    image: "/otaw.jpg",
    name: "Otabek Kurbonov",
    position: "Tadbirkor",
    message:
      "Sizlar bilan ishlashdan hursandman yigitlar, hamkorligimiz uzoq vaqt davom etishidan manfaatdorman. Omad!!!",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
    pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="xl:h-[400px] h-[370px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div
                className="w-full max-w-[300px] flex flex-col xl:justify-center
              items-center relative mx-auto xl:mx-0"
              >
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" className="rounded-full" />
                  </div>
                  {/* name */}
                  <div className="text-lg">
                    {person.name}
                    </div>
                  {/* position*/}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quato & message */}
              <div
                className="flex-1 flex flex-col justify-center
                before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
                xl:before:h-[200px] relative xl:pl-20"
              >
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message*/}
                <div className="xl:text-lg text-center md:text-left xl:w-full w-[330px]">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
