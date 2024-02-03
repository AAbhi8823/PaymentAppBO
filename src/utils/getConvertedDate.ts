const getConvertedDate = (date: string): string => {
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
};

export { getConvertedDate };