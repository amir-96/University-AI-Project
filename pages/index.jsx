import AIProject from "@/components/AIProject";
import { useRouter } from "next/router";

const Home = () => {
  const { route } = useRouter();

  return <AIProject route={route} />;
};

export default Home;
