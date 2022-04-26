const date = Object.freeze('date');

const order = {
    values: [],
    currentDateOrder: null,
    oneHundred: 0,
    /**
     * @param {string} name
     */
    set current(name, secondArgs) {
        this.values.push(name);
    },

    
    /**
     * set date of order.
     * @param {Date} value
     */
    set [date](value) {
        // use computed to define name of property.
        this.currentDateOrder = value;
    },

    /**
     * set date of order.
     * @param {Date} value
     */
    set 100(value) {
        this.oneHundred = value;
    }
}

order.current = 'NEW';
order.current = 'IN PROGRESS';
order.current = 'DELIVERY';
order.current = 'DONE';

order.currentDateOrder = new Date();

order[100] = 200;

console.log(order.values);
console.log(order.oneHundred);