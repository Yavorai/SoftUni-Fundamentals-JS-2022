function demo(peopleCount, groupType, dayOfWeek) {
  let totalPrice = 0;
  if (groupType === "Students" && dayOfWeek === "Sunday") {
    totalPrice = 8.45 * peopleCount;
  } else if (groupType === "Business" && dayOfWeek === "Saturday") {
    totalPrice = 10.9 * peopleCount;
  } else if (groupType === "Regular" && dayOfWeek === "Sunday") {
    totalPrice = 15 * peopleCount;
  }
  console.log(totalPrice);
}
demo(30, "Students", "Sunday");
demo(40, "Regular", "Saturday");
demo(425, "Business", "Saturday");
