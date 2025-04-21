let myDate = new Date();
console.log(typeof myDate); // object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myDate1 = new Date(2004,1,1,12,35); // month is 0 based
console.log(myDate1.toLocaleString());

let myDate2 = new Date("2004-02-01");
console.log(myDate2.toLocaleString());

let myDate3 = new Date("February 1, 2004");
console.log(myDate3.toLocaleString());

let myDate4 = new Date(0);
console.log(myDate4.toLocaleString());

let myDate5 = Date.now();
console.log(myDate5);



console.log(myDate1.getFullYear());
console.log(myDate1.getMonth()+1);
console.log(myDate1.getDate());
console.log(myDate1.getDay());
console.log(myDate1.getHours());
console.log(myDate1.getMinutes());
console.log(myDate1.getSeconds());
console.log(myDate1.getMilliseconds());
console.log(myDate1.getTimezoneOffset());
console.log(myDate1.getTime());


myDate1.toLocaleString('default', {month: 'long'});