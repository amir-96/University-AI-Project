import AIProject from "@/components/AIProject/AIProject";
import { useRouter } from "next/router";

const AIPage = () => {
  const { route } = useRouter();

  return (
      <AIProject route={route} />
  );
};

export default AIPage;
