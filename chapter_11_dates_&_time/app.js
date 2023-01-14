// dates & times

const before = new Date('January 1 2023 7:30:59');
const now = new Date();

console.log(before);
console.log(now);

// year, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay()); 
console.log('getHours:', now.getHours()); 
console.log('getMinutes:', now.getMinutes()); 
console.log('getSeconds:', now.getSeconds()); 

// timestamps
console.log('timestamp:', now.getTime())
console.log('timestamp:', before.getTime())

const diff = now.getTime() - before.getTime();
console.log('difference:', diff)

const mins = Math.round(diff / 1000 / 60)
const hours = Math.round(mins / 60)
const days = Math.round(hours / 24)

console.log(mins, hours, days)

// date strings
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())

console.log()

// converting timestamps into date objects
const timestamp = 1672572659000;
console.log(new Date(timestamp))