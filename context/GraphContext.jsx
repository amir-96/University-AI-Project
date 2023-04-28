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

  const unitAddHandler = (parentName, childName, nodeIsAnswer) => {
    const newData = { ...data };
    const parentNode = findObjectByName(newData, parentName.toUpperCase());

    if (parentNode) {
      // Check if child with same name already exists in the tree
      if (findObjectByName(newData, childName.toUpperCase())) {
        console.log("Child node with same name already exists");
        return;
      }

      // Check if child with same name already exists in the parent node
      const existingChild = parentNode.children.find(
        (child) => child.name.toUpperCase() === childName.toUpperCase()
      );
      if (existingChild) {
        console.log("Child node with same name already exists in parent node");
        return;
      }

      // Check if parent node has maximum 2 children
      if (parentNode.children.length >= 3) {
        console.log(
          "Cannot add child to parent node. Maximum 2 children allowed"
        );
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
      console.log("Parent node not found");
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

  function getSortedNamesByLayer(data) {
    const results = [];
    const queue = [data];

    while (queue.length > 0) {
      const level = [];
      const levelQueue = [];

      for (const node of queue) {
        level.push(node);
        node.children.forEach((child) => levelQueue.push(child));
      }

      level.sort((a, b) => {
        const indexA = a.parent ? a.parent.children.indexOf(a) : 0;
        const indexB = b.parent ? b.parent.children.indexOf(b) : 0;
        return indexA - indexB;
      });
      results.push(level);
      queue.length = 0;
      queue.push(...levelQueue);
    }

    let text = "";
    results.forEach((level) => {
      level.forEach((node) => {
        if (node.isAnswer) {
          console.log(`Child array ${node.name} has isAnswer true`);
        }
        text += node.name + " -> ";
      });
    });

    console.log(results); // log the sorted results to the console
    console.log(text);
    return results;
  }

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

  return (
    <GraphDataContext.Provider
      value={{
        data,
        unitAddHandler,
        refreshHandler,
        getSortedNamesByLayer,
        showAvailableNodeHandle,
      }}
    >
      {children}
    </GraphDataContext.Provider>
  );
}
