import Stars from "../../assets/stars.png";
import Client1 from "../../assets/client-1.png";
import Client2 from "../../assets/client-2.png";
import Client3 from "../../assets/client-3.png";

const Review = ({ img, name, des, bgc }) => {
  return (
    <div className="bg-pmr-color rounded-xl p-[1px]">
      <div className={`flex items-center ${bgc} rounded-xl`}>
        <img src={img} alt="client-img" />
        <div
          className={`font-nunito-sans text-base xxllhero:text-xl xxxllhero:text-2xl ${
            bgc === "bg-pmr-color" ? "text-white" : "text-pmr-gray"
          }`}
        >
          <h5>{name}</h5>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      img: Client1,
      name: "David",
      des: "Happly Client",
    },
    {
      id: 2,
      img: Client2,
      name: "John Smith",
      des: "Happly Client",
    },
    {
      id: 3,
      img: Client3,
      name: "Ronald Richards",
      des: "Happly Client",
    },
  ];

  return (
    <div className="section p-16 bg-[#F6F6F6]">
      <div className="max-w-[1920px] mx-auto">
        <h2 className="font-bold text-[30px] xshero:text-[46px] xxllhero:text-[56px] text-center font-space-grotesk text-pmr-dark">
          Reviews From{" "}
          <span className="bg-pmr-color bg-clip-text text-transparent">
            Our Client
          </span>
        </h2>
        <div className="mt-5 grid grid-cols-1 mdhero:grid-cols-2 items-center gap-8 mdhero:gap-16">
          <div className="flex flex-col gap-4">
            {reviews.map((review) => {
              return (
                <Review
                  img={review.img}
                  name={review.name}
                  des={review.des}
                  bgc={review.id === 2 ? "bg-pmr-color" : "bg-white"}
                  key={review.id}
                />
              );
            })}
          </div>
          <div className="font-nunito-sans flex flex-col gap-5 text-center mdhero:text-start">
            <h3 className="font-bold text-3xl text-pmr-dark xxllhero:text-4xl xxxllhero:text-5xl">
              It Was A Amazing Experiance!
            </h3>
            <div className="flex justify-center mdhero:justify-start">
              <img src={Stars} alt="stars" />
            </div>
            <p className="font-normal text-base xxllhero:text-xl xxxllhero:text-2xl text-pmr-gray">
              The AI features saved us countless hours and ensured our
              compliance was spot on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
