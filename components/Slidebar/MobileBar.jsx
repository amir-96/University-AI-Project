import { useState } from "react";
import Link from "next/link";

import { RiDashboardFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
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
      name: "هوش مصنوعی",
      href: "/ai-project",
      icon: <GiArtificialIntelligence className="scale-[2]" />,
    },
    {
      name: "مباحث ویژه 1",
      href: "/mabahes1-project",
      icon: <BiChalkboard className="scale-[2]" />,
    },
  ];

  return (
    <>
      <div className="fixed tablet:hidden top-4 right-0 w-20 z-40 focus:rotate-45 transition-all duration-500">
        <img
          onClick={() => setShowMobileBar(true)}
          src="/images/Logo.svg"
          alt="Logo"
        />
      </div>

      {showMobileBar && (
        <div
          onClick={() => setShowMobileBar(false)}
          className="fixed inset-0 bg-black opacity-50 z-[78]"
        />
      )}
      <div
        className={`fixed tablet:hidden top-0 ${
          showMobileBar ? "right-0" : "right-[-80vw]"
        } bottom-0 w-[80vw] bg-white z-[80] p-8 border-l transition-all ease-in duration-200`}
      >
        <div className="flex items-center pb-5 w-full h-[5rem] border-b">
          <img className="w-20" src="/images/Logo.svg" alt="Logo" />
          <h1 className="text-xl font-semibold">پروژه های من</h1>
        </div>
        <ul className="flex flex-col gap-12 h-[18rem] mt-8 p-4 mr-[-14px]">
          {navigation.map((item) => {
            return (
              <li>
                <Link
                  href={item.href}
                  className="flex items-center gap-4 text-xl shadow p-4 hover:bg-gray-200 rounded-md hover:text-[#5046e5]"
                >
                  {item.icon}
                  <span className="ml-3 font-[500]">{item.name}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <a
              className="flex items-center gap-4 text-xl shadow p-4 hover:bg-gray-200 rounded-md hover:text-[#5046e5]"
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
            className="absolute bottom-8 left-8 rounded-full shadow scale-[2.5]"
          />
        </span>
      </div>
    </>
  );
};

export default MobileBar;
