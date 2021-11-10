export const filterByCategory = (array, category) => {
  return array.filter((item) => item.category === category);
};

export const getUniqueCategories = (array) => {
  return [...new Set(array.map((item) => item.category))];
};
