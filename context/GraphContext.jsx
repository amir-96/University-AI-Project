import { createContext, useState } from "react";

const graphData = {
  name: "A",
  children: [
    {
      name: "B",
      children: [
        {
          name: "C",
          children: [
            {
              name: "D",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

export const GraphDataContext = createContext();

export function GraphDataProvider({ children }) {
  const [data, setData] = useState(graphData);

  const unitAddHandler = (parentName, childName) => {
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
      if (parentNode.children.length >= 2) {
        console.log(
          "Cannot add child to parent node. Maximum 2 children allowed"
        );
        return;
      }

      // Add the new child node to the parent node
      parentNode.children.push({
        name: childName.toUpperCase(),
        children: [],
      });

      setData(newData);
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
    setData({
      name: "A",
      children: [],
    });
  };

  return (
    <GraphDataContext.Provider value={{ data, unitAddHandler, refreshHandler }}>
      {children}
    </GraphDataContext.Provider>
  );
}
