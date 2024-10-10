import Icon1 from "../../assets/facebook.png";
import Icon2 from "../../assets/instagram.png";
import Icon3 from "../../assets/linkedin.png";
import Icon4 from "../../assets/twitter-x.png";

const Footer = () => {
  return (
    <footer className="section bg-white max-w-[1920px] mx-auto">
      <div className="flex flex-col xshero:flex-row xshero:justify-between bg-red-5 items-center gap-3 xshero:gap-0">
        <a href="/">
          <h1 className="font-bold text-[30px] md:text-[40px] font-space-grotesk">
            Ai GoverningDocs
          </h1>
        </a>
        <ul className="font-normal text-base xxllhero:text-xl xxxllhero:text-2xl font-nunito-sans text-pmr-gray hidden xl:flex gap-5 items-center">
          <a href="#problem-solution" className="pmr-hover-link">
            <li>Problem & Solution</li>
          </a>
          <a href="#problem-solution" className="pmr-hover-link">
            <li>Industries We Serve</li>
          </a>
          <a href="#problem-solution" className="pmr-hover-link">
            <li>How It Works</li>
          </a>
          <a href="#problem-solution" className="pmr-hover-link">
            <li>Testimonials</li>
          </a>
          <a href="#problem-solution" className="pmr-hover-link">
            <li>FAQs</li>
          </a>
        </ul>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="bg-blue-200 hover:bg-blue-300 transition-colors w-10 h-10 xxllhero:w-16 xxllhero:h-16 rounded-full flex justify-center items-center"
          >
            <img
              src={Icon1}
              alt="icon"
              className="w-auto h-auto xxllhero:w-5 xxllhero:h-5"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="bg-blue-200 hover:bg-blue-300 transition-colors w-10 h-10 xxllhero:w-16 xxllhero:h-16 rounded-full flex justify-center items-center"
          >
            <img
              src={Icon2}
              alt="icon"
              className="w-auto h-auto xxllhero:w-5 xxllhero:h-5"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="bg-blue-200 hover:bg-blue-300 transition-colors w-10 h-10 xxllhero:w-16 xxllhero:h-16 rounded-full flex justify-center items-center"
          >
            <img
              src={Icon3}
              alt="icon"
              className="w-auto h-auto xxllhero:w-5 xxllhero:h-5"
            />
          </a>
          <a
            href="https://www.x.com"
            target="_blank"
            className="bg-blue-200 hover:bg-blue-300 transition-colors w-10 h-10 xxllhero:w-16 xxllhero:h-16 rounded-full flex justify-center items-center"
          >
            <img
              src={Icon4}
              alt="icon"
              className="w-auto h-auto xxllhero:w-5 xxllhero:h-5"
            />
          </a>
        </div>
      </div>
      <div className="p-3 border-t border-blue-400 mt-6 xshero:mt-12">
        <p className="font-normal text-lg xxllhero:text-xl xxxllhero:text-2xl text-[#111111] font-nunito-sans text-center">
          Ai GoverningDocs 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
