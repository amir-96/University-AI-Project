import { createContext, useState } from "react";
import Cookies from "js-cookie";

const graphData = {
  name: "A",
  isAnswer: false,
  children: [
    {
      name: "B",
      isAnswer: false,
      children: [
        {
          name: "D",
          isAnswer: false,
          children: [
            {
              name: "I",
              isAnswer: true,
              children: [],
            },
            {
              name: "K",
              isAnswer: false,
              children: [],
            },
          ],
        },
        {
          name: "E",
          isAnswer: false,
          children: [],
        },
      ],
    },
    {
      name: "C",
      isAnswer: false,
      children: [
        {
          name: "F",
          isAnswer: false,
          children: [
            {
              name: "H",
              isAnswer: false,
              children: [],
            },
            {
              name: "J",
              isAnswer: false,
              children: [],
            },
          ],
        },
        {
          name: "G",
          isAnswer: false,
          children: [],
        },
      ],
    },
  ],
};

export const GraphDataContext = createContext();

let initialState = graphData;

const savedData = Cookies.get("graphData");

if (savedData) {
  initialState = JSON.parse(savedData);
}

export function GraphDataProvider({ children }) {
  const [data, setData] = useState(initialState);
  const [showAnswer, setShowAnswer] = useState(false);

  const unitAddHandler = (parentName, childName, nodeIsAnswer) => {
    const newData = { ...data };
    const parentNode = findObjectByName(newData, parentName.toUpperCase());

    if (parentNode) {
      // Check if child with same name already exists in the tree
      if (findObjectByName(newData, childName.toUpperCase())) {
        alert("Child node with same name already exists");
        return;
      }

      // Check if child with same name already exists in the parent node
      const existingChild = parentNode.children.find(
        (child) => child.name.toUpperCase() === childName.toUpperCase()
      );
      if (existingChild) {
        alert("Child node with same name already exists in parent node");
        return;
      }

      // Check if parent node has maximum 2 children
      if (parentNode.children.length >= 3) {
        alert("Cannot add child to parent node. Maximum 2 children allowed");
        return;
      }

      // Add the new child node to the parent node
      parentNode.children.push({
        name: childName.toUpperCase(),
        isAnswer: nodeIsAnswer,
        children: [],
      });

      setData(newData);
      Cookies.set("graphData", JSON.stringify(newData));
    } else {
      alert("Parent node not found");
    }
  };

  const findObjectByName = (data, name) => {
    if (data.name === name) {
      return data;
    }
    for (let i = 0; i < data.children.length; i++) {
      const result = findObjectByName(data.children[i], name);
      if (result) {
        return result;
      }
    }
    return null;
  };

  const refreshHandler = () => {
    Cookies.set(
      "graphData",
      JSON.stringify({
        name: "A",
        children: [],
      })
    );
    setData({
      name: "A",
      children: [],
    });
  };

  const showAvailableNodeHandle = (data) => {
    const results = [];
    const queue = [data];

    while (queue.length > 0) {
      const node = queue.shift();
      if (node.children.length < 3) {
        results.push(node.name);
      }
      queue.push(...node.children);
    }

    return results;
  };

  const bfs = (data) => {
    const queue = [{ node: data, depth: 1 }];
    const result = [];

    while (
      queue.length > 0 &&
      !result.some((node) => node.name.endsWith("(Answer)"))
    ) {
      const { node, depth } = queue.shift();

      if (node.isAnswer) {
        result.push({ name: node.name, layer: depth, isAnswer: true });
        break; // stop when the first answer is found
      } else {
        result.push({ name: node.name, layer: depth, isAnswer: false });
      }

      for (const child of node.children) {
        queue.push({ node: child, depth: depth + 1 });
      }
    }

    return result;
  };

  const dfs = (data) => {
    const stack = [{ node: data, depth: 1 }];
    const result = [];

    while (stack.length > 0) {
      const { node, depth } = stack.pop();

      if (node.isAnswer) {
        result.push({ name: node.name, layer: depth, isAnswer: true });
        break; // stop when the first answer is found
      } else {
        result.push({ name: node.name, layer: depth, isAnswer: false });
      }

      for (let i = node.children.length - 1; i >= 0; i--) {
        const child = node.children[i];
        stack.push({ node: child, depth: depth + 1 });
      }
    }

    return result;
  };

  const changeShowAnswerHandler = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <GraphDataContext.Provider
      value={{
        data,
        showAnswer,
        unitAddHandler,
        refreshHandler,
        showAvailableNodeHandle,
        changeShowAnswerHandler,
        bfs,
        dfs,
      }}
    >
      {children}
    </GraphDataContext.Provider>
  );
}
