import React, { useEffect } from "react";
import Header from "./components/Header";
import Events from "./components/Events";
import ExploreApp from "./components/ExploreApp";
import Questions from "./components/Questions";
import Feedbacks from "./components/Feedbacks";
import Partners from "./components/Partners";
import EventCreators from "./components/EventCreators";
import InvestFuture from "./components/InvestFuture";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <Events />
      <ExploreApp />
      <Questions />
      <Feedbacks />
      <Partners />
      <EventCreators />
      <InvestFuture />
      <AboutUs />
      <Team />
      <Contact />
      <Footer />
      <div>
        <a
          href="https://dazzling-caramel-70f064.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="text-[24px] text-[#fff] font-black fixed bottom-[10px] right-[10px] text-center p-[10px] z-50 rounded-[10px] bg-[var(--button-text-orange)]"
        >
          New Version
        </a>
      </div>
    </div>
  );
}

export default App;
