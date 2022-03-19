// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  let timeArr = s.split('');
  let meridiem = timeArr.splice(8, 2);
  let hour = Number(timeArr[0] + timeArr[1]);
  if (meridiem[0] === 'P') {
    if (hour < 8) {
      timeArr[0] = 1;
      timeArr[1] = Number(timeArr[1]) + 2;
    } else if (hour < 12) {
      timeArr[0] = 2;
      timeArr[1] = hour - 8;
    }
  } else {
    if (hour === 12) {
      timeArr[0] = 0;
      timeArr[1] = 0;
    }
  }
  return timeArr.join('');
}

console.log(timeConversion('12:43:00AM'))