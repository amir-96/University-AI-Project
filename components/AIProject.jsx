import { useState, useEffect, useContext } from "react";
import { GraphDataContext } from "@/context/GraphContext";
import { AnimatedTree } from "react-tree-graph";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";

import "react-tree-graph/dist/style.css";

import { BsChevronUp } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";

const AIProject = ({ route }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    data,
    unitAddHandler,
    refreshHandler,
    getSortedNamesByLayer,
    showAvailableNodeHandle,
  } = useContext(GraphDataContext);

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

  return (
    <Layout title="AI - Project" route={route}>
      <div className="grid grid-cols-1 gap-y-8 py-4">
        <div
          onSubmit={handleFormSubmit}
          className="w-full md:absolute right-80 max-w-md h-fit mx-auto mt-10 bg-white p-8 border border-gray-300 shadow-lg rounded-lg"
        >
          <div id="manage" className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-6">مدیریت گره ها</h2>
            <FiRefreshCw
              onClick={refreshHandler}
              className="scale-[1.75] mb-5 ml-2 cursor-pointer hover:rotate-90 transition-all duration-500"
            />
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
                    return <option value={item}>{item}</option>;
                  })}
                </select>
                <BsChevronUp className="absolute top-3 left-2" />
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

        <div
          id="graphContainer"
          className="flex md:ml-12 max-w-[800px] mx-auto items-center justify-center rotate-90 h-fit rounded-lg border"
        >
          <AnimatedTree
            data={data}
            width={isMobile ? 400 : 800}
            height={isMobile ? 400 : 800}
          />
        </div>
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(AIProject), { ssr: false });
