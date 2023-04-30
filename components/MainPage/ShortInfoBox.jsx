import { useContext } from "react";
import { SlidebarStatusContext } from "@/context/SlidebarStatus";
import Link from "next/link";
import PersonalBoxComponent from "./PersonalBox";

const ShortInfoBoxComponent = () => {
  const { status } = useContext(SlidebarStatusContext);

  return (
    <>
      <div
        className={`flex flex-col items-center gap-12 w-fit h-fit p-8 pt-20 tablet:pt-8 mx-auto text-gray-500 ${
          status ? "tablet:mr-[16rem]" : "tablet:mr-20"
        }`}
      >
        <div className="flex flex-col gap-4 w-full h-fit rounded-md shadow bg-white p-4">
          <PersonalBoxComponent />
          <h4 className="text-xl font-semibold mt-8">درباره ی این وبسایت</h4>
          <p className="text-gray-400">
            من امیررضا حسینی در این وبسایت به صورت اوپن سورس به انجام پروژه های
            دانشگاهی خواهم پرداخت
          </p>

          <h4 className="text-xl font-semibold mt-8">- پروژه های من:</h4>
          <Link href="/ai-project">
            <p className="text-gray-400 hover:text-gray-700 hover:cursor-pointer">
              1 _ پروژه ی هوش مصنوعی
            </p>
          </Link>
          <Link href="/mabahes-1">
            <p className="text-gray-400 hover:text-gray-700 hover:cursor-pointer">
              2 _ پروژه ی مباحث ویژه ی 1
            </p>
          </Link>

          <h4 className="text-lg font-semibold mt-8">- پروژه ی هوش مصنوعی:</h4>
          <p className="text-gray-400">مدرس: استاد جمشید افشانی</p>
          <p className="text-gray-400">
            در این پروژه برنامه ی نوشته شده باید بصورت همزمان روی درختی که شامل
            گره های مختلف (پاسخ صحیح و اشتباه) است پیمایش انجام داده و بصورت
            همزمان دو الگوریتم عرضی و عمقی را مقایسه کند. به علت تک نخی بودن
            زبان جاوا اسکریپت در این برنامه برای مقایسه ی همزمان از قابلیت
            (Async) استفاده شده است.
          </p>
          <h4 className="text-lg font-semibold mt-8">
            - پروژه ی مباحث ویژه ی یک:
          </h4>

          <p className="text-gray-400">مدرس: استاد بخت همت</p>
          <p className="text-gray-400">
            در این پروژه به دو جدول یکی برای کارکنان و دیگری برای شیفت بندی
            کارکنان نیاز است. همچنین در این پروژه باید قابلیت مدیریت کارکنان از
            جمله بازنشسته کردن و اخراج کردن و ویرایش کارکنان وجود داشته باشد.
            همچنین نیاز است اعتبار سنجی فیلد ها انجام شود.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShortInfoBoxComponent;
