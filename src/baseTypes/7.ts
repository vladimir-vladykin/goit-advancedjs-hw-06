/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(weekDay: WeekDay): boolean {
  return weekDay === WeekDay.Saturday || weekDay === WeekDay.Sunday;
}

isWeekend(WeekDay.Monday);
isWeekend(WeekDay.Sunday);