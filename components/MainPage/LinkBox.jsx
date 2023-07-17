import { useContext } from "react";
import { SlidebarStatusContext } from "@/context/SlidebarStatus";
import Link from "next/link";

const LinkBoxComponent = () => {
  const { status } = useContext(SlidebarStatusContext);

  return (
    <div
      className={`mx-auto flex h-fit w-fit items-center justify-center ${
        status ? "tablet:pr-[16rem]" : "tablet:pr-20"
      }`}
    >
      <div className="flex flex-col gap-8 pb-12 md:flex-row">
        <Link
          href="ai-project"
          className="group mx-auto block h-[120px] w-full max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            ></svg>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white">
              پروژه ی هوش مصنوعی
            </h3>
          </div>
          <p className="pr-4 text-sm text-slate-500 group-hover:text-white">
            بررسی درخت داده بر اساس الگوریتم عرضی و عمقی
          </p>
        </Link>

        <Link
          href="game"
          className="group mx-auto block h-[120px] w-full max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            ></svg>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white">
              پروژه ی مباحث ویژه یک
            </h3>
          </div>
          <p className="pr-4 text-sm text-slate-500 group-hover:text-white">
            بازی 8 وزیر
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LinkBoxComponent;
