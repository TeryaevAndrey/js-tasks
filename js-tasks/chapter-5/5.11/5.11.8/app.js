const formatDate = (date) => {
  let diff = new Date() - date;

  if (diff < 1000) {
    return "Прямо сейчас";
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return `${sec} секунд назад`;
  }

  let min = Math.floor(diff / 60000);

  if (min < 60) {
    return `${min} минут назад`;
  }

  let fullDate = {
    day:
      date.getDay().toString().length < 2 ? "0" + date.getDay() : date.getDay(),
    month:
      date.getMonth().toString().length < 2
        ? "0" + date.getMonth()
        : date.getMonth(),
    year: date.getFullYear(),
    hour:
      date.getHours().toString().length < 2
        ? "0" + date.getHours()
        : date.getHours(),
    minutes:
      date.getMinutes().toString().length < 2
        ? "0" + date.getMinutes()
        : date.getMinutes(),
  };

  return `${fullDate.day}.${fullDate.month}.${fullDate.year} ${fullDate.hour}:${fullDate.minutes}`;
};

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
