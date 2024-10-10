import Icon1 from "../../assets/icon-1.png";
import Icon2 from "../../assets/icon-2.png";
import Icon3 from "../../assets/icon-3.png";
import Icon4 from "../../assets/icon-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Card = ({ icon, title, desReq, desOpt, bgc }) => {
  return (
    <div
      className={`font-nunito-sans px-4 h-full py-3 border flex flex-col gap-2 xxxllhero:gap-4 rounded-xl ${bgc}`}
    >
      <div
        className={`p-3 rounded-full ${
          bgc === "bg-pmr-color" ? "bg-[#00D2FF]" : "bg-pmr-color"
        } w-fit`}
      >
        <img src={icon} alt="icon" className="w-10 h-10" />
      </div>
      <h4
        className={`font-bold text-base lgprobsolt:text-lg xxllhero:text-2xl xxxllhero:text-3xl ${
          bgc === "bg-pmr-color" ? "text-white" : "text-pmr-dark"
        }`}
      >
        {title}
      </h4>
      <p
        className={`font-normal text-sm lgprobsolt:text-base xxllhero:text-lg xxxllhero:text-xl ${
          bgc === "bg-pmr-color" ? "text-white" : "text-pmr-gray"
        }`}
      >
        {desReq}
      </p>
      {desOpt && (
        <p
          className={`font-normal text-sm lgprobsolt:text-base xxllhero:text-lg xxxllhero:text-xl ${
            bgc === "bg-pmr-color" ? "text-white" : "text-pmr-gray"
          }`}
        >
          {desOpt}
        </p>
      )}
    </div>
  );
};

const ProbSolt = () => {
  const cards = [
    {
      id: 1,
      icon: Icon1,
      title: "Problem",
      desReq:
        "Managing legal documents can be complex, time-consuming, and error-prone.",
      desOpt: "Outdated methods and manual processes put your business at risk",
    },
    {
      id: 2,
      icon: Icon2,
      title: "Solution",
      desReq:
        "Ai GoverningDocs offers a cutting-edge solution to manage, generate, and automate legal documents with ease.",
      desOpt:
        "Our AI-driven platform ensures compliance, reduces errors, and saves time.",
    },
    {
      id: 3,
      icon: Icon3,
      title: "Key Features",
      desReq:
        "Automatically generate legal documents tailored to your specific needs.",
    },
    {
      id: 4,
      icon: Icon4,
      title: "Compliance Management",
      desReq: "Ensure all your documents meet the latest regulatory standards.",
    },
  ];

  const tripleCards = [...cards, ...cards, ...cards];

  return (
    <div className="section max-w-[1920px] mx-auto" id="problems-solutions">
      <h2 className="font-bold text-[30px] xshero:text-[46px] xxllhero:text-[56px] text-center xshero:text-start font-space-grotesk text-pmr-dark">
        Problem &{" "}
        <span className="bg-pmr-color bg-clip-text text-transparent">
          Solution
        </span>
      </h2>
      <div className="mt-5 xshero:mt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            980: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="grid"
        >
          {tripleCards.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  icon={card.icon}
                  title={card.title}
                  desReq={card.desReq}
                  desOpt={card.desOpt}
                  bgc={card.id === 2 ? "bg-pmr-color" : "bg-white"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ProbSolt;
