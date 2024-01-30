/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 55;
let ticketPrice =100;
let tittle = 'student';
if(age < 10){
    console.log('Children fare is free.')
}
else if(tittle){
    ticketPrice = ticketPrice - (50/100);
    console.log('Bus fare is: ', ticketPrice);
}
else if(age > 60){
    ticketPrice = ticketPrice - (15/100);
    console.log('Bus fare is: ', ticketPrice);
}
else{
    console.log('Bus fare is: ', ticketPrice)
}
