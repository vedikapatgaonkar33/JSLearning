console.log("-------------------- 1 --------------------");

function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
        console.log(`The month number ${monthNumber} is January`);
            break;
        case 2:
        console.log(`The month number ${monthNumber} is February`);
            break;    
        case 3:
        console.log(`The month number ${monthNumber} is March`);
            break;
        case 4:
        console.log(`The month number ${monthNumber} is April`);
            break;
        case 5:
        console.log(`The month number ${monthNumber} is May`);
            break;
        case 6:
        console.log(`The month number ${monthNumber} is June`);
            break;
        case 7:
        console.log(`The month number ${monthNumber} is July`);
            break; 
        case 8:
        console.log(`The month number ${monthNumber} is August`);
            break;   
        case 9:
        console.log(`The month number ${monthNumber} is September`);
            break;
        case 10:
        console.log(`The month number ${monthNumber} is October`);
            break;
        case 11:
        console.log(`The month number ${monthNumber} is November`);
            break;
        case 12:
        console.log(`The month number ${monthNumber} is December`);
            break;
        default:
            console.log(`The month number ${monthNumber} is Invalid `);
            break;
    }
    
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
