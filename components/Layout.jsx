import Head from "next/head";
import Slidebar from "./Slidebar/Slidebar";

const Layout = ({ title, children, route }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <nav>
        <Slidebar route={route} />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
