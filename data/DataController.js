const { graphData } = require("./data");

function findObjectByName(data, name, newChild) {
  if (data.name === name) {
    data.children.push(newChild);
    return data;
  }
  for (let i = 0; i < data.children.length; i++) {
    const result = findObjectByName(data.children[i], name, newChild);
    if (result) {
      return result;
    }
  }
  return null;
}

const unitAddHandler = (parentUnit, childUnit) => {
  const newData = { ...graphData };
  findObjectByName(newData, parentUnit, { name: childUnit, children: [] });
  setGraph(newData);
};
