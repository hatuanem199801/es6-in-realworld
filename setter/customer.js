import fetch from 'node-fetch';

const customer = {
    fullName: "",
    firstName: "",
    lastName: "",
    avatar: ""
};

Object.defineProperty(customer, 'setFirstName', {
    set: function(value) {
        this.firstName = value.split(" ")[0];
    }
});

Object.defineProperty(customer, 'getAvatar', {
    set: function(value) {
        this.avatar = value;
    }
})

customer.setFirstName = "Em Ha Tuan";
customer.getAvatar = "https://picsum.photos/1080";
console.log(customer);