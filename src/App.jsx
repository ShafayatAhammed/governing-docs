import CTA from "./Components/CTA/cta.jsx";
import FAQ from "./Components/FAQ/faq.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Hero from "./Components/Hero/hero.jsx";
import Partners from "./Components/Partners/partners.jsx";
import ProbSolt from "./Components/ProbSolt/prob-solt.jsx";
import Reviews from "./Components/Reviews/reviews.jsx";

const App = () => {
  return (
    <>
      <Hero />
      <ProbSolt />
      <Reviews />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
