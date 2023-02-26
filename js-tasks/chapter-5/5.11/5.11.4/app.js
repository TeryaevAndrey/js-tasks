const getDateAgo = (date, days) => {
  date.setDate(date.getDate() - days);

  return date.getDate();
};

console.log(getDateAgo(date, 1));
