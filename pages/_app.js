import { GraphDataProvider } from "@/context/GraphContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GraphDataProvider>
      <div className="font-yekanBakh">
        <Component {...pageProps} />
      </div>
    </GraphDataProvider>
  );
}
