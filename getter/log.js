const log = {
    currentDate: 1,
    messages: ["Error: receive records", "Success: wrote data to \"product\" table."]
};

Object.defineProperty(log, 'currentDate', {
    value: new Date(),
    enumerable: false
})

for (let key in log) {
    console.log(key);
}
// currentDate not found.