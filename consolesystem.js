
var items = {
    row1: {

        number: 'YMP20103',
        color: 'White',
        size: 'XS',
        quantity: '3'
    },
    row2: {
        number: 'YMP20208',
        color: 'Black',
        size: 'M',
        quantity: '9'
    },
    row3 : {
        number: 'YMP20321',
        color: 'Black',
        size: 'L',
        quantity: '3'
    },
    row4 : {
        number: 'YMP20114',
        color: 'Grey',
        size: 'XL',
        quantity: '5'
    },
    row5 : {
        number: 'YMP20101',
        color: 'Blue',
        size: 'S',
        quantity: '1'
    }
};
console.log('row1 = ',items.row1);
console.log('row2 = ',items.row2);
console.log('row3 = ',items.row3);
console.log('row4 = ',items.row4);
console.log('row5 = ',items.row5);

items.row1.quantity = 15;

console.log('modified row1 quantity =', items.row1.quantity);

items.row6 = {number: 'YWM20311', color: 'PINK', size: 'XXS', quantity : '6'};

console.log('modified items list = ', items);

delete items.row3;

console.log('second modified items list = ', items);






