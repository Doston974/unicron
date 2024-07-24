// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Brend tanitish",
    description: "Shaxsiy brendingizni tanitishda yaqindan yordam beriamiz",
  },
  {
    icon: <RxPencil2 />,
    title: "Dizayn",
    description: "UI/UX dizaynerlardan zamonaviy dizayn asosidagi loyihalar",
  },
  {
    icon: <RxDesktop />,
    title: "Dasturlash",
    description: "Telegram bot, Veb-sayt, online do'kon hamda mobil ilovalar yaratish",
  },
  {
    icon: <RxReader />,
    title: "Davriy qo'llab quvatlash",
    description: "Kelishuv asosida uzoq muddatli xizmat ko'rsatish",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Bu xizmat bilan sizning saytingiz doim birinchi qatorlarda",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
            tranition-all duration-300"
            >
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div>
                <div className="mb-2 tetx-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight
                  className="group-hover:rotate-45 mt-2
                group-hover:text-accent transition-all duration-300"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
