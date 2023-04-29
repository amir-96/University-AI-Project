import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const { route } = useRouter();

  return (
    <Layout title="صفحه ی اصلی" route={route}>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col md:flex-row gap-8">
          <Link
            href="ai-project"
            className="group block max-w-xs w-full h-[120px] mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
          >
            <div className="flex items-center space-x-3">
              <svg
                className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
              ></svg>
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                پروژه ی هوش مصنوعی
              </h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm pr-4">
              بررسی درخت داده بر اساس الگوریتم عرضی و عمفی
            </p>
          </Link>

          <Link
            href="mabahes-1"
            className="group block max-w-xs w-full h-[120px] mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
          >
            <div className="flex items-center space-x-3">
              <svg
                className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
              ></svg>
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                پروژه ی مباحث ویژه یک
              </h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm pr-4">
              مدیریت لیست کارکنان و روز های کاری
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
