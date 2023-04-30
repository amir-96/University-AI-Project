import AIProject from "@/components/AIProject/AIProject";
import { useRouter } from "next/router";

const AIPage = () => {
  const { route } = useRouter();

  return (
    <>
      <div className="fixed inset-0 bg-blue-50 blur-2xl z-[-1]" />
      <AIProject route={route} />
    </>
  );
};

export default AIPage;
