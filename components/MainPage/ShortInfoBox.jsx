import { useContext } from "react";
import { SlidebarStatusContext } from "@/context/SlidebarStatus";
import Link from "next/link";
import PersonalBoxComponent from "./PersonalBox";

const ShortInfoBoxComponent = () => {
  const { status } = useContext(SlidebarStatusContext);

  return (
    <>
      <div
        className={`mx-auto flex h-fit w-fit flex-col items-center gap-12 p-8 pt-20 text-gray-500 tablet:pt-8 ${
          status ? "tablet:mr-[16rem]" : "tablet:mr-20"
        }`}
      >
        <div className="flex h-fit w-full flex-col gap-4 rounded-md bg-white p-4 shadow">
          <PersonalBoxComponent />
          <h4 className="mt-8 text-xl font-semibold">درباره ی این وبسایت</h4>
          <p className="text-gray-400">
            من امیررضا حسینی در این وبسایت به صورت اوپن سورس به انجام پروژه های
            دانشگاهی خواهم پرداخت.
          </p>

          <h4 className="mt-8 text-xl font-semibold">- پروژه های من:</h4>
          <Link href="/ai-project">
            <p className="text-gray-400 hover:cursor-pointer hover:text-gray-700">
              1 _ پروژه ی هوش مصنوعی
            </p>
          </Link>
          <Link href="/mabahes-1">
            <p className="text-gray-400 hover:cursor-pointer hover:text-gray-700">
              2 _ پروژه ی مباحث ویژه ی 1
            </p>
          </Link>

          <h4 className="mt-8 text-lg font-semibold">- پروژه ی هوش مصنوعی:</h4>
          <p className="text-gray-400">مدرس: استاد جمشید افشانی</p>
          <p className="text-gray-400">
            در این پروژه برنامه ی نوشته شده باید بصورت همزمان روی درختی که شامل
            گره های مختلف (پاسخ صحیح و اشتباه) است پیمایش انجام داده و بصورت
            همزمان دو الگوریتم عرضی و عمقی را مقایسه کند. به علت تک نخی بودن
            زبان جاوا اسکریپت در این برنامه برای مقایسه ی همزمان از قابلیت
            (Async) استفاده شده است.
          </p>
          <h4 className="mt-8 text-lg font-semibold">
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
