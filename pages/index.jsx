import { useState } from "react";
import { AnimatedTree } from "react-tree-graph";
import { graphData } from "@/data/data";

import "react-tree-graph/dist/style.css";

export default function Home() {
  const [graph, setGraph] = useState(graphData);

  const unitAddHandler = () => {
    const name = document.getElementById("unitName").value;
    const parent = document.getElementById("unitParent").value;
    const newUnit = { name, children: [] };
    let test = [...graph.children, newUnit];

    setGraph({ ...graph, children: test });
  };

  return (
    <div className="flex justify-between p-4">
      <div className="flex flex-col gap-8 p-2 orunded-md shadow-lg w-[400px] h-[200px] rounded-lg border">
        <input
          id="unitName"
          type="text"
          placeholder="Add new child"
          className="shadow p-2 h-8"
        />
        <input
          id="unitParent"
          type="text"
          placeholder="Choose parent"
          className="shadow p-2 h-8"
        />
        <button
          onClick={unitAddHandler}
          className="p-2 shadow-md rounded-md bg-green-400"
        >
          Add unit
        </button>
      </div>
      <div className="top-12 right-40 flex max-w-[800px] m-auto items-center justify-center rotate-90 border h-fit">
        <AnimatedTree data={graph} height={800} width={800} />
      </div>
    </div>
  );
}
