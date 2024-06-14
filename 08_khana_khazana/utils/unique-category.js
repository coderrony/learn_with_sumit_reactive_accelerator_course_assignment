export const getUniqueCategory = (arr) => {
  // Ensure arr is an array, if not, set it to an empty array
  if (!Array.isArray(arr)) {
    return [];
  }

  const process = arr.reduce((acc, obj) => {
    // Find if the category already exists in the accumulator
    const temp = acc.find((item) => item.category === obj.category);
    // If not found, push the object to the accumulator
    if (!temp) {
      acc.push(obj);
    }
    return acc; // Don't forget to return the accumulator
  }, []);

  return process; // Return the result
};
