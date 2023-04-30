import { useState, useEffect, useContext } from "react";
import { GraphDataContext } from "@/context/GraphContext";
import { SlidebarStatusContext } from "@/context/SlidebarStatus";
import { AnimatedTree } from "react-tree-graph";
import Result from "./Result";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";

import "react-tree-graph/dist/style.css";

import { BsChevronUp } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { FcSettings } from "react-icons/fc";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const AIProject = ({ route }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showTreePanel, setShowTreePanel] = useState(false);

  const {
    data,
    showAnswer,
    unitAddHandler,
    refreshHandler,
    showAvailableNodeHandle,
    changeShowAnswerHandler,
  } = useContext(GraphDataContext);

  const { status, whatScreen } = useContext(SlidebarStatusContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("unitName").value.toString();
    const parentName = document.getElementById("unitParent").value.toString();
    const isAnswer = isChecked;

    unitAddHandler(parentName, name, isAnswer);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const onlyLetters = /^[A-Za-z]+$/;
    if (!onlyLetters.test(inputValue)) {
      e.target.value = "";
    }
  };

  const makeTree = (whatScreen) => {
    if (whatScreen === "desktop") {
      return <AnimatedTree data={data} width={800} height={800} />;
    } else if (whatScreen === "tablet") {
      return <AnimatedTree data={data} width={750} height={750} />;
    } else if (whatScreen === "stablet") {
      return <AnimatedTree data={data} width={450} height={450} />;
    } else if (whatScreen === "mobile") {
      return <AnimatedTree data={data} width={350} height={350} />;
    } else if (whatScreen === "smobile") {
      return <AnimatedTree data={data} width={250} height={250} />;
    }
  };

  return (
    <Layout title="AI - Project" route={route}>
      <div className="flex gap-y-8 py-4">
        {showTreePanel && (
          <div
            onSubmit={handleFormSubmit}
            className="w-full absolute md:left-4 bottom-4 max-w-md h-fit mx-auto mt-10 bg-white p-8 border border-gray-300 shadow-lg rounded-lg z-50"
          >
            <div id="manage" className="flex items-center justify-between">
              <h2 className="text-2xl font-bold mb-6">مدیریت گره ها</h2>
              <div className="flex gap-4">
                <FiRefreshCw
                  onClick={refreshHandler}
                  className="scale-[1.75] mb-5 ml-2 cursor-pointer hover:rotate-90 transition-all duration-500"
                />
                <AiFillCloseCircle
                  onClick={() => setShowTreePanel(false)}
                  className="scale-[1.8] text-red-500 cursor-pointer"
                />
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="unitName"
                >
                  نام
                </label>
                <input
                  id="unitName"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:border-blue-500 focus:outline-none"
                  type="text"
                  placeholder="نام گره را وارد کنید"
                  maxLength={1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="unitParent"
                >
                  گره ی پدر
                </label>
                <div className="inline-block relative w-[220px]">
                  <select
                    id="unitParent"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    required
                  >
                    <option value="">گره ی پدر را انتخاب کنید</option>
                    {showAvailableNodeHandle(data).map((item) => {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <BsChevronUp className="absolute top-3 left-2 rotate-180" />
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2">
                  <input
                    id="unitAnswer"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <span className="text-gray-700 font-medium">
                    این گره جواب باشد
                  </span>
                </label>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                افزودن گره
              </button>
            </form>
          </div>
        )}

        <div
          className={`flex w-screen tablet:w-fit h-fit mx-auto items-center justify-center rounded-lg bg-white ${
            status ? "tablet:mr-28 lg:mr-[17rem]" : "tablet:mr-28 lg:mr-[8rem]"
          }`}
        >
          <div className="absolute top-4 left-4 flex items-center justify-between gap-4 z-[20] p-4 rounded-md bg-white shadow-md border">
            <FcSettings
              onClick={() => setShowTreePanel(!showTreePanel)}
              className="tablet:text-5xl text-3xl hover:cursor-pointer hover:rotate-[45deg] transition-all duration-[1s]"
            />
            <AiFillCheckCircle
              onClick={() => changeShowAnswerHandler()}
              className="tablet:text-5xl text-3xl text-green-300 hover:text-green-500 transition-all duration-500 hover:cursor-pointer"
            />
          </div>
          <div
            id="graphContainer"
            className="rotate-90 tablet:border-none border-r shadow rounded-lg"
          >
            {makeTree(whatScreen)}
          </div>
        </div>
      </div>
      <Result />
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(AIProject), { ssr: false });
