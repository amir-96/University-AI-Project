import Link from "next/link";
import { useEffect, useState } from "react";

import { RiDashboardFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiChalkboard } from "react-icons/bi";

const navigation = [
  {
    name: "صفحه ی اصلی",
    href: "/",
    icon: (
      <RiDashboardFill className="scale-125 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    current: false,
  },
  {
    name: "هوش مصنوعی",
    href: "/ai-project",
    icon: (
      <GiArtificialIntelligence className="scale-125 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    current: false,
  },
  {
    name: "مباحث ویژه 1",
    href: "/mabahes1-project",
    icon: (
      <BiChalkboard className=" scale-125 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    current: false,
  },
];

const Slidebar = ({ route }) => {
  const [menu, setMenu] = useState(navigation);

  useEffect(() => {
    console.log(route);
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
      <aside
        id="logo-sidebar"
        className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white border-l"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
          <Link href="/" className="flex gap-4 items-center pl-2.5 mb-5 py-8">
            <img
              src="/images/Logo.svg"
              className="h-6 mr-3 sm:h-7 scale-[2]"
              alt="Flowbite Logo"
            />
            <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              پروژه های من
            </h1>
          </Link>

          <ul className="flex flex-col gap-4 font-medium pt-8 border-t">
            {menu.map((item) => {
              return (
                <li>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 p-2 text-gray-700 rounded-lg dark:text-white hover:bg-[#f9fafc] dark:hover:bg-gray-700 hover:text-[#5046e5] ${
                      item.current && "bg-[#f9fafc] text-[#5046e5]"
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3 font-[500]">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Slidebar;
