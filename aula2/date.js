var data = new Date;
/* Instantiating */

console.log(data.getDate())
/* Takes the number of the day from the current date 
E.G: 16 June 2023
Output: 16 */

console.log(data.getMinutes()) /* Returns the current number of the data's minutes (0-59)
e.g: june 16, 2023. 20:13
output: 12
*/

console.log(data.getMonth())
/*Return the month (0-11) number
E.g: June 16, 2023
output: 5
*/

/* Learn how to get the months' name */
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log(months[data.getMonth()])
/* As getMonth funtion is 0-based, we create an array with months' names for we can get the name of the current month */

console.log(data.getDay())
/* The getDay function returns the number of the day of the week in a 1-based count
E.g: 21/06/2023 (It's Wednesday)
Output: 3*/

var datanova = new Date('march 15, 2017');
/* U can instantiate a new Data putting your owns sets */

console.log(datanova.getDate()+'/'+(datanova.getMonth()+1)+'/'+datanova.getFullYear());

console.log(datanova.setDate(datanova.getDate()+6))
/* The setDate function ables you to change the date */

console.log(datanova.getDate()+'/'+(datanova.getMonth()+1)+'/'+datanova.getFullYear());

/* A way for u to get the week's days' names*/
var dias = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

console.log(dias[data.getDay()-1])
/* As getDay function isn't 0-based, I had to decrease 1*/
