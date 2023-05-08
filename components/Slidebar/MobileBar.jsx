import { useState } from "react";
import Link from "next/link";

import { RiDashboardFill } from "react-icons/ri";
import { CgSearchFound } from "react-icons/cg";
import { GiChessQueen } from "react-icons/gi";
import { BiChalkboard } from "react-icons/bi";
import { BsGithub, BsArrowRightShort } from "react-icons/bs";

const MobileBar = () => {
  const [showMobileBar, setShowMobileBar] = useState(false);

  const navigation = [
    {
      name: "صفحه ی اصلی",
      href: "/",
      icon: <RiDashboardFill className="scale-[2]" />,
    },
    {
      name: "جستجوی عرضی و عمقی",
      href: "/ai-project",
      icon: <CgSearchFound className="scale-[2]" />,
    },
    {
      name: "بازی هشت وزیر",
      href: "/game",
      icon: <GiChessQueen className="scale-[2]" />,
    },
    {
      name: "مباحث ویژه 1",
      href: "/mabahes1-project",
      icon: <BiChalkboard className="scale-[2]" />,
    },
  ];

  return (
    <>
      <div className="fixed right-0 top-4 z-40 w-20 transition-all duration-500 focus:rotate-45 tablet:hidden">
        <img
          onClick={() => setShowMobileBar(true)}
          src="/images/Logo.svg"
          alt="Logo"
        />
      </div>

      {showMobileBar && (
        <div
          onClick={() => setShowMobileBar(false)}
          className="fixed inset-0 z-[78] bg-black opacity-50"
        />
      )}
      <div
        className={`fixed top-0 tablet:hidden ${
          showMobileBar ? "right-0" : "right-[-80vw]"
        } bottom-0 z-[80] w-[80vw] border-l bg-white p-8 transition-all duration-200 ease-in`}
      >
        <div className="flex h-[5rem] w-full items-center border-b pb-5">
          <img className="w-20" src="/images/Logo.svg" alt="Logo" />
          <h1 className="text-xl font-semibold">پروژه های من</h1>
        </div>
        <ul className="mr-[-14px] mt-8 flex h-[18rem] flex-col gap-12 p-4">
          {navigation.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-4 rounded-md p-4 text-xl shadow hover:bg-gray-200 hover:text-[#5046e5]"
                >
                  {item.icon}
                  <span className="ml-3 font-[500]">{item.name}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <a
              className="flex items-center gap-4 rounded-md p-4 text-xl shadow hover:bg-gray-200 hover:text-[#5046e5]"
              href="https://github.com/amir-96/University-AI-Project"
              target="_blank"
            >
              <BsGithub className="scale-[2]" />
              سورس پروژه
            </a>
          </li>
        </ul>
        <span>
          <BsArrowRightShort
            onClick={() => setShowMobileBar(false)}
            className="absolute bottom-8 left-8 scale-[2.5] rounded-full shadow"
          />
        </span>
      </div>
    </>
  );
};

export default MobileBar;
