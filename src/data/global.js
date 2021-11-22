export const filterData = (database, key, value, self) => {
  let result = database.filter((data) => {
    return data[key] == value && data.name !== self;
  });
  return result;
};

export const findData = (database, key, value) => {
  let result = database.find((data) => {
    return data[key] == value;
  });
  return result;
};
