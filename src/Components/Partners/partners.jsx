import Brand1 from "../../assets/brand-1.png";
import Brand2 from "../../assets/brand-2.png";
import Brand3 from "../../assets/brand-3.png";
import Brand4 from "../../assets/brand-4.png";
import Brand5 from "../../assets/brand-5.png";
import Brand6 from "../../assets/brand-6.png";

const Partners = () => {
  const partners = [
    {
      id: 1,
      brand: Brand1,
    },
    {
      id: 2,
      brand: Brand2,
    },
    {
      id: 3,
      brand: Brand3,
    },
    {
      id: 4,
      brand: Brand4,
    },
    {
      id: 5,
      brand: Brand5,
    },
    {
      id: 6,
      brand: Brand6,
    },
  ];

  return (
    <div className="section max-w-[1920px] mx-auto">
      <div className="bg-[#E6F9FD] py-5 xshero:pt-8 xshero:pb-12 px-10 rounded-xl">
        <h2 className="font-bold text-[30px] xshero:text-[46px] xxllhero:text-[56px] text-center font-space-grotesk text-pmr-dark">
          Our{" "}
          <span className="bg-pmr-color bg-clip-text text-transparent">
            Partners
          </span>
        </h2>
        <div className="grid grid-cols-1 smpartners:grid-cols-2 sm:grid-cols-3 mdhero:grid-cols-4 grid-rows-6 smpartners:grid-rows-3 sm:grid-rows-2 gap-3 mt-2">
          {partners.map((partner) => {
            return (
              <div
                className={`p-3 border bg-white rounded-lg flex justify-center items-center ${
                  partner.id === 5
                    ? "mdhero:col-start-2"
                    : partner.id === 6
                    ? "mdhero:col-start-3"
                    : ""
                }`}
                key={partner.id}
              >
                <img src={partner.brand} alt="partner" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
