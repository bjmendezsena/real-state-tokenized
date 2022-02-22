export const getValue: any = (source: any, key: string) => {
  const arrKeys = key.split(".");
  const firstKey = arrKeys.shift() || "";
  const { [firstKey]: newSource = undefined } = source;

  if (arrKeys.length > 0) {
    return getValue(newSource || {}, arrKeys.join("."));
  }

  return newSource;
};
