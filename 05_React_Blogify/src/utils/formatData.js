function formatDate(dateString) {
  // Create a Date object from the input string
  const date = new Date(dateString);

  // Define months array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month, day, and year from the Date object
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Return the formatted date string
  return `${month} ${day}, ${year}`;
}

export default formatDate;
