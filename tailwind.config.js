/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pmr-color": "linear-gradient(180deg, #00D2FF 0%, #059DBE 100%)",
        "pmr-color-hover": "linear-gradient(180deg, #00A3CC 0%, #047A93 100%)",
      },
      textColor: {
        "pmr-color": "transparent",
      },
      backgroundClip: {
        text: "text",
      },
      colors: {
        "pmr-dark": "#2D2D2D",
        "pmr-gray": "#666666",
      },
      fontFamily: {
        "space-grotesk": "Space Grotesk, serif",
        "nunito-sans": "Nunito Sans, serif",
      },
      screens: {
        xxxllhero: "1800px",
        xxllhero: "1550px",
        xxlhero: "1441px",
        xlhero: "1255px",
        lghero: "1080px",
        mdhero: "890px",
        xshero: "550px",
        xxshero: "400px",
        lgprobsolt: "1050px",
        xsprobsolt: "450px",
        smpartners: "500px",
        lgfaq: "1150px",
        lgcta: "980px",
        mdcta: "880px",
      },
      boxShadow: {
        "card-shadow": "0px 10px 30px 0px #02B6DC26",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-clip-text": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
        },
      });
    },
  ],
};
