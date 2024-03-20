import Head from "next/head";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SectionTitle from "./components/sectionTitle";

import { benefitOne } from "./components/data";
import Video from "./components/video";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Cta from "./components/cta";
import Faq from "./components/faq";
import PopupWidget from "./components/popupWidget";

const page = () => {
  return (
    <>
      <Head>
        <title>Janhit - Adressing the peoples</title>
        <meta
          name="description"
          content="Nextly is a free lanith next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle title=" Why should you use पूर्वानुमान">
        Transform your shop's success with our predictive sales analysis
        platform. Anticipate demand, optimize inventory, and stay ahead of the
        competition. Make data-driven decisions effortlessly and maximize
        profitability. Join us today for smarter retail management
      </SectionTitle>
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to use पूर्वानुमान "
      ></SectionTitle>
      <Video />
      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
};

export default page;
