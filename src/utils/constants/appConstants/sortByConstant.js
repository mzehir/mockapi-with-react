export const SORT_BY_CONSTANT = {
  OLD_TO_NEW: { value: "oldToNew", label: "Old to new" },
  NEW_TO_OLD: { value: "newToOld", label: "New to old" },
  HIGHT_TO_LOW: { value: "hightToLow", label: "Price hight to low" },
  LOW_TO_HIGHT: { value: "lowToHight", label: "Price low to hight" },
};

export function sortByConstantToArray() {
  const result = Object.values(SORT_BY_CONSTANT).map(
    ({ isDefault, ...rest }) => rest
  );

  return result;
}

export function getSortByConstantDefault() {
  const defaultOption = Object.values(SORT_BY_CONSTANT).find(
    (option) => option.isDefault
  );

  return defaultOption ? defaultOption.value : "";
}
