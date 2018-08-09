var year = parseInt(prompt("Enter a Year: "));
if (year % 4 === 0 && year % 100 != 0 || year % 400 == 0) {
  alert(year + " is a Leap Year");
}
else if (year % 4 != 0 && year % 100 == 0 || year % 400 !=0) {
  alert(year + " is not a Leap Year");
}