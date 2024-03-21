"use client"; // Fix typo

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import logo2 from "../public/img/pnn.png";
import Image from "next/image";
import SideBar from "../components/SideBar";
import PredictiveSalesPage from "../components/PredictiveSalesPage";
import ReviewScorePage from "../components/ReviewScorePage";
import ReviewAnalysisPage from "../components/ReviewAnalysisPage";
import ReportsPage from "../components/ReportsPage";

export default function Page() {
  const [component, setComponent] = useState("predict-sales");
  const router = useRouter(); // Initialize useRouter from next/navigation

  /*useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("name")) {
      setUsername(localStorage.getItem("name").split(" ")[0]);
    }
  }, []);*/

  // Navigation function for "Home" link
  const handleHomeClick = () => {
    router.push("/"); // Push to the home page
  };

  // Navigation function for "About Us" link
  const handleAboutUsClick = () => {
    router.push("/about"); // Push to the about-us page
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24" onClick={handleHomeClick}>
                <Image src={logo2} alt="पूर्वानुमान" width={40} height={40} />
                <span className="self-center ms-2 text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  {" "}
                  पूर्वानुमान
                </span>
              </a>

              <div className="hidden space-x-4 sm:flex ml-64">
                {/* Add onClick handlers to navigate */}
                <a
                  href="#"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  onClick={handleHomeClick}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  onClick={handleAboutUsClick}
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SideBar setComponent={setComponent} />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {component === "predict-sales" && <PredictiveSalesPage />}
          {component === "review-score" && <ReviewScorePage />}
          {component === "review-analysis" && <ReviewAnalysisPage />}
          {component === "reports" && <ReportsPage />}
        </div>
      </div>
    </>
  );
}
