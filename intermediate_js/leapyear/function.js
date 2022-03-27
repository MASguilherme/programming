function isLeap(leapYear) {
  leapYear = document.getElementById("year");
  leapYear = leapYear.value;

  var answer = document.getElementById("answer");

  if (leapYear % 4 === 0) {
    if (leapYear % 100 === 0) {
      if (leapYear % 400 === 0) {
        answer.innerHTML = leapYear + " its a leap Year!";
      } else {
        answer.innerHTML = leapYear + " its not a leap Year.";
      }
    } else {
      answer.innerHTML = leapYear + " its a leap Year!";
    }
  } else {
    answer.innerHTML = leapYear + " its not a leap Year.";
  }
}
