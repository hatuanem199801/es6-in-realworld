const order = {
    values: [],
    /**
     * @param {any} name
     */
    set current(name) {
        this.values.push(name);
    }
}

order.current = 'NEW';
order.current = 'IN PROGRESS';
order.current = 'DELIVERY';
order.current = 'DONE';

console.log(order.values);