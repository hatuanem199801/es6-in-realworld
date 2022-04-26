const date = Object.freeze('date');

const order = {
    values: [],
    currentDateOrder: null,
    oneHundred: 0,
    customer: null,

    /**
     * @param {string} value
     */
    set setCustomer(value) {
        this.customer = value;
    },

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
    },

    /**
     * set date of order.
     * @param {Date} value
     */
    set 100(value) {
        this.oneHundred = value;
    }
}

order.setCustomer = "Em Ha Tuan";

delete order.current; // Delete set property with delete operator.

order.current = 'NEW';
order.current = 'IN PROGRESS';
order.current = 'DELIVERY';
order.current = 'DONE';

order.currentDateOrder = new Date();

order[100] = 200;


console.log(order);