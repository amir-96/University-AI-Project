import Head from "next/head";
import Slidebar from "./Slidebar/Slidebar";

const Layout = ({ title, children, route }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="flex">
        <nav>
          <Slidebar route={route} />
        </nav>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
