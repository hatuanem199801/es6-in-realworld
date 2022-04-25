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
    writable: true //TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>
});

log.currentDate = new Date();

console.log(log.currentDate);