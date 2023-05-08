import EightQueens from "@/components/Game/EightQueens";
import Layout from "@/components/Layout";

const GamePage = () => {
  return (
    <Layout title="بازی ۸ وزیر">
      <div className="mx-auto flex items-center justify-center mt-16 w-screen">
        <EightQueens />
      </div>
    </Layout>
  );
};

export default GamePage;
