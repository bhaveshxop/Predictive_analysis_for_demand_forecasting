"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo2 from "../public/img/pnn.png";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const [username, setUsername] = useState("");

  const navigation = ["Home", "Dashboard", "About Us"];

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("name")) {
      setUsername(localStorage.getItem("name").split(" ")[0]);
    }
  }, []);

  return (
    <div className="w-full bg-white-100 ">
      <nav className="container bg-white-100 realtive flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src={logo2}
                        alt="पूर्वानुमान"
                        width={50}
                        height={50}
                      />
                    </span>
                    <b>
                      <span>पूर्वानुमान</span>
                    </b>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((menu, index) => (
                      <li className="mr-3 nav__item" key={index}>
                        <Link
                          href={
                            menu === "Home"
                              ? "/user"
                              : `/user/${menu.toLowerCase().replace(" ", "-")}`
                          }
                          onClick={() => {
                            if (menu === "Complaints" || menu === "Services") {
                              if (!localStorage.getItem("name")) {
                                router.push("/login");
                              }
                            }
                          }}
                          className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                        >
                          {menu}
                        </Link>
                      </li>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/login"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="/login">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 :outline-none"
            >
              Login/Register
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
