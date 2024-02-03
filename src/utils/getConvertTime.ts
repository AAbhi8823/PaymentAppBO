const getConvertedTime = (time: string): string => {
  const numericTime = time.split("Z")?.[0];
  let [hours, minutes, seconds] = numericTime.split(":");
  let modifier = "AM";

  if (parseInt(hours) >= 12) {
    modifier = "PM";
  }

  if (parseInt(hours) > 12) {
    hours = (parseInt(hours) - 12).toString();
  }

  return `${hours}:${minutes}:${seconds} ${modifier}`;
};

export { getConvertedTime };
