function timeAgo(timestamp) {
  const currentDate = new Date();
  const givenDate = new Date(timestamp);

  const timeDifferenceInSeconds = Math.floor((currentDate - givenDate) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInMonth = 2592000;

  if (timeDifferenceInSeconds < secondsInMinute) {
    return `${timeDifferenceInSeconds} seconds ago`;
  } else if (timeDifferenceInSeconds < secondsInHour) {
    const minutes = Math.floor(timeDifferenceInSeconds / secondsInMinute);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInSeconds < secondsInDay) {
    const hours = Math.floor(timeDifferenceInSeconds / secondsInHour);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInSeconds < secondsInMonth) {
    const days = Math.floor(timeDifferenceInSeconds / secondsInDay);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else {
    const months = Math.floor(timeDifferenceInSeconds / secondsInMonth);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
}

export default timeAgo;
