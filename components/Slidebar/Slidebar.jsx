import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { SlidebarStatusContext } from "@/context/SlidebarStatus";
import MobileBar from "./MobileBar";

import { RiDashboardFill } from "react-icons/ri";
import { CgSearchFound } from "react-icons/cg";
import { GiChessQueen } from "react-icons/gi";
import { BiChalkboard } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const navigation = [
  {
    name: "صفحه ی اصلی",
    href: "/",
    icon: (
      <RiDashboardFill className="h-6 w-6 scale-125 transition duration-200 group-hover:scale-[1.35] dark:text-gray-400" />
    ),
    current: false,
  },
  {
    name: "جستجوی عرضی و عمقی",
    href: "/ai-project",
    icon: (
      <CgSearchFound className="h-6 w-6 scale-125 transition duration-200 group-hover:scale-[1.35] dark:text-gray-400" />
    ),
    current: false,
  },
  {
    name: "بازی هشت وزیر",
    href: "/game",
    icon: (
      <GiChessQueen className="h-6 w-6 scale-125 transition duration-200 group-hover:scale-[1.35] dark:text-gray-400" />
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
        className={`fixed right-0 top-0 z-40 hidden tablet:block ${
          !status ? "w-fit" : "w-64"
        } h-screen border-l bg-white`}
        aria-label="Sidebar"
      >
        <div
          className={`${
            !status && "flex flex-col items-center "
          }h-full overflow-y-auto px-3 py-4 dark:bg-gray-800`}
        >
          <div className="mb-5 flex cursor-pointer items-center gap-4 overflow-hidden py-8 pl-2.5">
            <img
              onClick={() => changeStatusHandler()}
              src="/images/Logo.svg"
              className="mr-3 h-6 scale-[2] transition-all duration-500 hover:rotate-12 sm:h-7"
              alt="Flowbite Logo"
            />
            <h1
              className={`${
                !status && "hidden "
              }self-center whitespace-nowrap text-xl font-semibold dark:text-white`}
            >
              پروژه های من
            </h1>
          </div>

          <ul className="flex flex-col gap-4 border-t pt-8 font-medium">
            {menu.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center ${
                      !status && "w-fit"
                    } group gap-2 rounded-lg p-2 hover:bg-[#f9fafc] hover:text-[#5046e5] dark:text-white dark:hover:bg-gray-700 ${
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

        <div className="absolute bottom-0 right-0 h-fit w-full p-4">
          <div className="flex flex-col gap-4">
            {status && (
              <p className="mr-[-2px] text-sm font-bold text-gray-500">
                گیت هاب من:
              </p>
            )}
            <a
              href="https://github.com/amir-96/University-AI-Project"
              target="_blank"
              className="flex items-center gap-4 rounded-md bg-gray-200 p-4 pr-5"
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
