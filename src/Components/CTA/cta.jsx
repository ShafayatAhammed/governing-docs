const CTA = () => {
  return (
    <div className="section max-w-[1920px] mx-auto">
      <div className="bg-pmr-color rounded-xl px-10 py-6 md:py-12 flex flex-col items-center gap-5">
        <div className="space-y-4 text-center">
          <h1 className="font-space-grotesk font-bold leading-[40px] sm:leading-[48px] lgcta:leading-[64px] text-[30px] sm:text-[36px] lgcta:text-[46px] xxxllhero:text-[56px] text-white">
            Ready to Simplify Your <br className="hidden md:block" /> Document
            Management?
          </h1>
          <p className="font-nunito-sans font-bold text-sm lgcta:text-base xxxllhero:text-xl text-white">
            Sign up today and experience the power of AI-driven legal
            documentation.
          </p>
        </div>
        <div>
          <button className="bg-white w-fit h-fit transition-colors text-pmr-dark py-3 px-5 xxxllhero:py-4 xxxllhero:px-6 rounded-full font-nunito-sans font-bold text-base xxxllhero:text-xl hover:bg-gray-200">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
