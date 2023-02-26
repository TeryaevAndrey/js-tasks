const getSecondsToday = () => {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today;

  return Math.floor(diff / 1000);
};

console.log(getSecondsToday());
