import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { SlidebarStatusContext } from "@/context/SlidebarStatus";
import MobileBar from "./MobileBar";

import { RiDashboardFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiChalkboard } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const navigation = [
  {
    name: "صفحه ی اصلی",
    href: "/",
    icon: (
      <RiDashboardFill className="scale-125 w-6 h-6 transition duration-200 dark:text-gray-400 group-hover:scale-[1.35]" />
    ),
    current: false,
  },
  {
    name: "هوش مصنوعی",
    href: "/ai-project",
    icon: (
      <GiArtificialIntelligence className="scale-125 w-6 h-6 transition duration-200 dark:text-gray-400 group-hover:scale-[1.35]" />
    ),
    current: false,
  },
  {
    name: "مباحث ویژه 1",
    href: "/mabahes1-project",
    icon: (
      <BiChalkboard className="scale-125 w-6 h-6 transition duration-200 dark:text-gray-400 group-hover:scale-[1.35]" />
    ),
    current: false,
  },
];

const Slidebar = ({ route }) => {
  const [menu, setMenu] = useState(navigation);

  const { status, changeStatusHandler } = useContext(SlidebarStatusContext);

  useEffect(() => {
    const newMenu = [...menu];
    newMenu.forEach((item) => {
      if (item.href === route) {
        item.current = true;
      } else {
        item.current = false;
      }
    });
    setMenu(newMenu);
  }, [route]);

  return (
    <>
      <MobileBar />

      <aside
        id="logo-sidebar"
        className={`hidden tablet:block fixed top-0 right-0 z-40 ${
          !status ? "w-fit" : "w-64"
        } h-screen bg-white border-l`}
        aria-label="Sidebar"
      >
        <div
          className={`${
            !status && "flex flex-col items-center "
          }h-full px-3 py-4 overflow-y-auto dark:bg-gray-800`}
        >
          <div className="flex gap-4 items-center pl-2.5 mb-5 py-8 cursor-pointer overflow-hidden">
            <img
              onClick={() => changeStatusHandler()}
              src="/images/Logo.svg"
              className="h-6 mr-3 sm:h-7 scale-[2] hover:rotate-12 transition-all duration-500"
              alt="Flowbite Logo"
            />
            <h1
              className={`${
                !status && "hidden "
              }self-center text-xl font-semibold whitespace-nowrap dark:text-white`}
            >
              پروژه های من
            </h1>
          </div>

          <ul className="flex flex-col gap-4 font-medium pt-8 border-t">
            {menu.map((item) => {
              return (
                <li>
                  <Link
                    href={item.href}
                    className={`flex items-center ${
                      !status && "w-fit"
                    } gap-2 p-2 rounded-lg dark:text-white group hover:bg-[#f9fafc] dark:hover:bg-gray-700 hover:text-[#5046e5] ${
                      item.current
                        ? "bg-[#f9fafc] text-[#5046e5]"
                        : "text-gray-700"
                    }`}
                  >
                    {item.icon}
                    <span className={`${!status && "hidden "}ml-3 font-[500]`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="absolute bottom-0 right-0 w-full h-fit p-4">
          <div className="flex flex-col gap-4">
            {status && (
              <p className="text-sm font-bold text-gray-500 mr-[-2px]">
                گیت هاب من:
              </p>
            )}
            <a
              href="https://github.com/amir-96/University-AI-Project"
              target="_blank"
              className="flex items-center gap-4 bg-gray-200 p-4 pr-5 rounded-md"
            >
              <BsGithub className="scale-[2.5]" />
              {status && <p className="text-md">سورس پروژه</p>}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Slidebar;
