import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const Mabahes1Page = () => {
  const { route } = useRouter();

  return ( 
    <Layout title="پروژه ی مباحث ویژه" route={route}>
      <div>
        پروژه ی مباحث ویژه
      </div>
    </Layout>
   );
}
 
export default Mabahes1Page;