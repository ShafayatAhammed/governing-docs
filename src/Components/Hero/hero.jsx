import MainBg from "../../assets/main-bg.png";
import MainSignature from "../../assets/main-signature.png";
import MainImg from "../../assets/main-img.png";
import Navbar from "../Navbar/navbar.jsx";

const Hero = () => {
  return (
    <main className="relative mdhero:pb-20 mdhero:overflow-hidden max-w-[1920px] mx-auto">
      <img
        src={MainBg}
        alt="main-bg"
        className="absolute top-0 left-0 z-[-1] hidden xshero:block xxlhero:hidden"
        draggable={false}
      />
      <img
        src={MainSignature}
        alt="main-signature"
        className="absolute top-32 z-[-1] hidden xshero:block xxlhero:hidden"
        draggable={false}
      />
      <div className="pt-10 px-4 xxshero:px-10 sm:px-16">
        <Navbar />
        <div className="z-50 grid grid-cols-1 mdhero:grid-cols-2 gap-5 items-center mt-10 xshero:mt-16 place-items-center">
          <div className="flex flex-col gap-5 xxxllhero:gap-10 order-2 mdhero:order-1 text-center mdhero:text-start">
            <h1 className="font-bold leading-[40px] sm:leading-[48px] lghero:leading-[66px] xlhero:leading-[76px] text-3xl sm:text-[42px] lghero:text-[50px] xlhero:text-[60px] xxllhero:text-[70px] xxxllhero:text-[80px] font-space-grotesk text-pmr-dark capitalize">
              Simplify your real estate document analysis
            </h1>
            <p className="font-semibold text-base lghero:text-xl xxllhero:text-2xl xxxllhero:text-3xl font-nunito-sans text-pmr-dark">
              Streamline, Automate, and Secure Your Business Documents with Ai
              GoverningDocs
            </p>
            <div>
              <button
                type="button"
                className="pmr-button xxllhero:py-4 xxllhero:px-6 xxxllhero:py-5 xxxllhero:px-9 xxllhero:text-xl xxxllhero:text-2xl"
              >
                Get Started Today
              </button>
            </div>
          </div>
          <div className="order-1 mdhero:order-2 z-50">
            <img
              src={MainImg}
              alt="main-img"
              className="sm:w-[450px] sm:h-[450px] mdhero:w-full mdhero:h-auto"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
