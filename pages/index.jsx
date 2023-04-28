import { useState, useContext } from "react";
import { GraphDataContext } from "@/context/GraphContext";
import { AnimatedTree } from "react-tree-graph";
import { graphData } from "@/data/data";

import "react-tree-graph/dist/style.css";

export default function Home() {
  const { data, unitAddHandler, refreshHandler } = useContext(GraphDataContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("unitName").value.toString();
    const parentName = document.getElementById("unitParent").value.toString();
    unitAddHandler(name, parentName);
  };

  return (
    <div className="flex justify-between p-4">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-8 p-2 orunded-md shadow-lg w-[400px] h-[200px] rounded-lg border"
      >
        <input
          id="unitName"
          type="text"
          placeholder="Add new child"
          className="shadow p-2 h-8"
          required
        />
        <input
          id="unitParent"
          type="text"
          placeholder="Choose parent"
          className="shadow p-2 h-8"
          required
        />
        <button type="submit" className="p-2 shadow-md rounded-md bg-green-400">
          افزودن
        </button>
      </form>
      <div className="top-12 right-40 flex max-w-[800px] m-auto items-center justify-center rotate-90 border h-fit">
        <AnimatedTree data={data} height={800} width={800} />
      </div>
    </div>
  );
}
