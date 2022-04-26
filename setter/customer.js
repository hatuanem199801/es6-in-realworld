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
    set: async function(value) {
        this.avatar = await fetch(value).then(res => res.arrayBuffer());
    }
})

customer.setFirstName = "Em Ha Tuan";
(async function() {
    await (customer.getAvatar = "https://picsum.photos/480");
    console.log(customer);
})();