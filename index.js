const { format, addDays, subDays } = require("date-fns");

const now = new Date();
console.log(`Today is : ${format(now, "do MMMM yyyy")}`);

const nextWeek = addDays(now, 7);
console.log(`Next week is : ${format(nextWeek, "do MMMM yyyy")}`);

const previousWeek = subDays(now, 7);
console.log(`Previous week is : ${format(previousWeek, "do MMMM yyyy")}`);
