export const semesterOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Fall" },
  { value: "03", label: "Summer" },
];
export const genders = ["Male", "Female", "Other"];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const monthNames = [
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

const weekdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
export const weekDaysOptions = weekdays.map((item) => ({
  value: item,
  label: item,
}));
