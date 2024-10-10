import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const FAQ = () => {
  const items = [
    {
      title: "Is My Data Secure?",
      content: "We ensure that all data is encrypted and securely stored.",
    },
    {
      title: "What Types Of Documents Can Ai GoverningDocs Generate?",
      content:
        "We cover a wide range of documents, including contracts, NDAs, compliance reports, and more.",
    },
    {
      title: "Can I Customize The Documents?",
      content:
        "Yes, our system allows you to fully customize documents to meet your specific needs.",
    },
  ];

  return (
    <div className="px-10 sm:px-16 mdhero:px-32 lgfaq:px-64 space-y-4 mt-20 max-w-[1920px] mx-auto">
      <h2 className="font-bold text-[30px] xshero:text-[38px] md:text-[46px] xxllhero:text-[56px] text-center font-space-grotesk text-pmr-dark">
        Frequently{" "}
        <span className="bg-pmr-color bg-clip-text text-transparent">
          Asked Qustions
        </span>
      </h2>
      {items.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <DisclosureButton
                className={`flex justify-between w-full p-4 text-left text-lg font-medium bg-white hover:bg-gray-50 rounded-lg border ${
                  open ? "shadow-md border-blue-300" : "border-gray-300"
                }`}
              >
                <span className="font-nunito-sans font-bold text-base smpartners:text-xl md:text-2xl xxxllhero:text-3xl text-pmr-dark">
                  {item.title}
                </span>
                <i
                  className={`fa-solid ${
                    open ? "fa-chevron-up text-blue-500" : "fa-chevron-down"
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pt-2 pb-4 font-nunito-sans font-normal text-base xxllhero:text-xl xxxllhero:text-2xl text-pmr-gray">
                {item.content}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default FAQ;
