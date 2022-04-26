const log = {
    messages: ["Error: receive records", "Success: wrote data to \"product\" table."]
};

let currentDate = "Unknown";

Object.defineProperty(log, 'currentDate', {
    set(value) {
        currentDate = value;
    },
    get() {
        return currentDate;
    },
    enumerable: false,
    configurable: false,
});

log.currentDate = new Date();

console.log(
    Object.getOwnPropertyDescriptor(log, 'currentDate')
);
// {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: false,
//     configurable: false
// }