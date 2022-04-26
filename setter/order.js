const date = Object.freeze('date');

const order = {
    values: [],
    currentDateOrder: null,
    /**
     * @param {string} name
     */
    set current(name) {
        this.values.push(name);
    },

    
    /**
     * set date of order.
     * @param {Date} value
     */
    set [date](value) {
        // use computed to define name of property.
        this.currentDateOrder = value;
    }
}

order.current = 'NEW';
order.current = 'IN PROGRESS';
order.current = 'DELIVERY';
order.current = 'DONE';

order.currentDateOrder = new Date();

console.log(order.values);
console.log(order.currentDateOrder);