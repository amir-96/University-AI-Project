import Layout from "@/components/Layout";
import LinkBoxComponent from "@/components/MainPage/LinkBox";
import MainPageComponent from "@/components/MainPage/MainPage";
import { useRouter } from "next/router";

const Home = () => {
  const { route } = useRouter();

  return (
    <Layout title="صفحه ی اصلی" route={route}>
        <div className="fixed inset-0 bg-blue-50 blur-2xl z-[-1]" />
        <MainPageComponent />
        <LinkBoxComponent />
    </Layout>
  );
};

export default Home;
