const getDependencies = (tree) => {
  let dependencyList = [];

  if (!tree || !tree.dependencies) {
    return dependencyList;
  }

  console.log(`here${JSON.stringify(tree)}`);

  const { dependencies } = tree;
  const keys = Object.keys(dependencies);

  keys.forEach((key) => {
    const dependencyStr = `${key}@${dependencies[key].version}`;
    dependencyList.push(dependencyStr);
    if (dependencies[key].dependencies) {
      dependencyList = dependencyList.concat(getDependencies(dependencies[key]));
    }
  });

  // remove duplicates
  dependencyList = dependencyList.reduce((prev, curr) => {
    if (!prev.includes(curr)) prev.push(curr);
    return prev;
  }, []);

  dependencyList.sort((a, b) => (a > b ? 0 : -1));

  return dependencyList;
};

module.exports = getDependencies;
