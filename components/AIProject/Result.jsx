import React from "react";
import { GraphDataContext } from "@/context/GraphContext";
import { useContext } from "react";

import { IoMdArrowBack } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";

const Result = () => {
  const { data, showAnswer, changeShowAnswerHandler, bfs, dfs } =
    useContext(GraphDataContext);

    const bfsSteps = bfs(data).length - 1;
    const dfsSteps = dfs(data).length - 1;

  const checkWinner = () => {
    if (bfsSteps > dfsSteps) {
      return (
        <p>
          الگوریتم{" "}
          <span className="text-green-400 font-bold text-2xl">BFS</span> در این
          جستجو عملکرد بهتری دارد
        </p>
      );
    } else if (bfsSteps < dfsSteps) {
      return (
        <p>
          الگوریتم{" "}
          <span className="text-green-400 font-bold text-2xl">DFS</span> در این
          جستجو عملکرد بهتری دارد
        </p>
      );
    } else {
      return <p>هردو الگوریتم در این جستجو عملکرد یکسان دارند</p>;
    }
  };

  return (
    <div
      className={`fixed ${
        showAnswer ? "top-0" : "top-[-100vh]"
      } right-0 bottom-0 left-0 bg-white h-screen p-8 z-[120] overflow-y-scroll transition-all ease-in duration-500 border-b`}
    >
      <AiFillCloseCircle
        onClick={() => changeShowAnswerHandler()}
        className="absolute top-8 left-8 scale-[2] text-red-500 cursor-pointer"
      />
      <div className="flex flex-col gap-8">
        <p>
          پاسخ روش <span className="text-green-400 font-bold text-lg">BFS</span>{" "}
          به صورت زیر است:
        </p>
        <div className="flex flex-wrap-reverse justify-center items-center">
          {bfs(data)
            .slice()
            .reverse()
            .map((item, index) => {
              return (
                <React.Fragment key={item.name}>
                  {index > 0 && (
                    <IoMdArrowBack className="h-4 w-4 text-gray-600 rotate-[-90deg] sm:rotate-180 mr-2" />
                  )}
                  <div
                    className={`${
                      item.isAnswer ? "bg-green-400" : "bg-red-100"
                    } w-full sm:w-auto sm:min-w-[85px] rounded-md p-2 text-center shadow mb-4 mx-4`}
                  >
                    <p className="font-bold mb-1">{item.name}</p>
                    <p className="text-sm">
                      {item.isAnswer ? "پاسخ" : "اشتباه"}
                    </p>
                    <p className="text-sm">لایه: {item.layer}</p>
                  </div>
                </React.Fragment>
              );
            })}
        </div>
        <p>
          مراحل طی شده:{" "}
          <span className="text-green-400 font-bold text-lg">
            {bfsSteps}
          </span>
        </p>
        <hr />
      </div>

      <div className="flex flex-col gap-8 mt-8">
        <p>
          پاسخ روش <span className="text-green-400 font-bold text-lg">DFS</span>{" "}
          به صورت زیر است:
        </p>
        <div className="flex flex-wrap-reverse justify-center items-center">
          {dfs(data)
            .slice()
            .reverse()
            .map((item, index) => {
              return (
                <React.Fragment key={item.name}>
                  {index > 0 && (
                    <IoMdArrowBack className="h-4 w-4 text-gray-600 rotate-[-90deg] sm:rotate-180 mr-2" />
                  )}
                  <div
                    className={`${
                      item.isAnswer ? "bg-green-400" : "bg-red-100"
                    } w-full sm:w-auto sm:min-w-[85px] rounded-md p-2 text-center shadow mb-4 mx-4`}
                  >
                    <p className="font-bold mb-1">{item.name}</p>
                    <p className="text-sm">
                      {item.isAnswer ? "پاسخ" : "اشتباه"}
                    </p>
                    <p className="text-sm">لایه: {item.layer}</p>
                  </div>
                </React.Fragment>
              );
            })}
        </div>
        <p>
          مراحل طی شده:{" "}
          <span className="text-green-400 font-bold text-lg">
            {dfsSteps}
          </span>
        </p>
        <hr />
      </div>

      <p className="w-fit mt-8 p-4 text-xl shadow rounded-md mx-auto">
        {checkWinner()}
      </p>
    </div>
  );
};

export default Result;
