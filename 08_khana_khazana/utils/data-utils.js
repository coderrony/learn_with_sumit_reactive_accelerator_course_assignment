export const replaceMongoIdInArray = (arr) => {
  const data = arr
    .map((item) => {
      return {
        id: item?._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);
  return data;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...rest } = { id: obj._id.toString(), ...obj };
  return rest;
};
