"use client";
import logo2 from "../public/img/logo2.png";
import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  DocumentIcon,
  BanknotesIcon,
  EyeDropperIcon,
  BookmarkIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

import sarkar from "../public/img/sss.webp";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Services provided",
  desc: "Transform your shop's success with our predictive sales analysis platform. Anticipate demand, optimize inventory, and stay ahead of the competition. Make data-driven decisions effortlessly and maximize profitability. Join us today for smarter retail management",
  image: sarkar,
  bullets: [
    {
      title: "Predicting future sales",
      desc: "Predicting future sales based on past data and trends.",
      icon: <CogIcon />,
    },
    {
      title: "Sales analysis",
      desc: "Analyzing sales data to make better decisions for the future.",
      icon: <CogIcon />,
    },
    {
      title: "Inventory help",
      desc: "inventory management to optimize inventory and reduce costs.",
      icon: <CogIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
