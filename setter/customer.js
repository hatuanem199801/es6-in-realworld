const customer = {
    fullName: "",
    firstName: "",
    lastName: "",
};

Object.defineProperty(customer, 'setFirstName', {
    set: function(value) {
        this.firstName = value.split(" ")[0];
    }
})

customer.setFirstName = "Em Ha Tuan";

console.log(customer);