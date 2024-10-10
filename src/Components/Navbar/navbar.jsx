import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);

  const toggleNavigation = (e) => {
    const nav = navRef.current;

    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      nav.classList.add("flex");
    } else {
      nav.classList.remove("flex");
      nav.classList.add("hidden");
    }

    const bar = e.target;

    if (bar.classList.contains("fa-bars")) {
      bar.classList.remove("fa-bars");
      bar.classList.add("fa-x");
    } else {
      bar.classList.remove("fa-x");
      bar.classList.add("fa-bars");
    }

    return;
  };

  return (
    <nav className="flex justify-between bg-white px-5 py-2 rounded-full items-center relative border">
      <a href="/">
        <h1 className="font-bold text-[30px] xshero:text-[40px] font-space-grotesk">
          GoverningDocs
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
      <div className="flex items-center gap-5">
        <button
          type="button"
          className="pmr-button xxllhero:py-4 xxllhero:px-6 xxxllhero:py-5 xxxllhero:px-7 hidden md:block xxxllhero:text-xl"
        >
          Get Started Today
        </button>
        <i
          className="fa-solid fa-bars text-4xl xshero:text-5xl cursor-pointer xl:hidden"
          onClick={toggleNavigation}
        />
      </div>
      <ul
        className="font-normal text-base xshero:text-xl p-3 font-nunito-sans select-none text-pmr-gray hidden flex-col gap-2 absolute -bottom-[230px] xshero:-bottom-[254px] md:-bottom-[198px] right-5 bg-white z-[100] rounded-lg border"
        ref={navRef}
      >
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
        <button
          type="button"
          className="pmr-button text-sm xshero:text-base md:hidden"
        >
          Get Started Today
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
