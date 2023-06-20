var data = new Date;

data.getDate()
/* Takes the number from the current date 
E.G: 16 June 2023
Output: 16 */

data.getMinutes() /* Returns the current number of the data (0-59)
e.g: june 16, 2023. 20:13
output: 12
*/

data.getMonth()
/*Return the month (0-11) number
E.g: June 16, 2023
output: 5
*/

var datanova = new Date('march 15, 2017');

datanova.getData()+'/'+(datanova.getMonth()+1)+'/'+datanova.getFullYear();

datanova.setDate(datanova.getDate()+6)

var dias = ['segunda','terça','quarta','quinta','sexta','sábado','domingo']

dias[dias.getDay()]
