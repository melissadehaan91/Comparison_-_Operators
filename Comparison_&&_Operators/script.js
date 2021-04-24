const age = 18;
// const age = 16;
// const age = 30;

if (age >= 18){
    console.log('You are allowed in.');
} else{
    console.log('Unfortunately you are not allowed in.');
}

const isFemale = true;
// const isFemale = false;
if (isFemale){
    console.log('You may continue to buy a ticket for the ladiesnight.');
} else {
    console.log('Unfortunately this evening is only for Females');
}


const driverStatus = 'bob';
// const driverStatus = 'mel';
if (driverStatus === 'bob'){   
    console.log('Drive safe!');
} else {
    console.log('You are not allowed to drive anymore, call a taxi.');
} 


if (age >= 18 && age <=25){
    console.log('Je krijgt 50% korting op bier!');
} else {
    console.log('Helaas, geen 50% korting op bier.');
}

const name = 'Melissa';
// const name = 'Bram';

if (name === 'Bram' || name === 'Sarah'){
    console.log('Je krijgt een gratis drankje!');
} else {
    console.log('Helaas, je krijgt geen gratis drankje')
}

const totalAmount = 60;
// const totalAmount = 10;
// const totalAmount = 110;

if (totalAmount >= 25 && totalAmount <= 50){
    console.log('Je krijgt gratis (vega)bitterballen!');
} else if (totalAmount > 50 && totalAmount <= 100){
    console.log('Je krijgt een gratis portie nachos!');
} else if (totalAmount > 100){
    console.log('Je krijgt een gratis fles champagne!');
} else{
    console.log('Bij een minimale besteding van 25 euro krijg je een gratis cadeau!');
}