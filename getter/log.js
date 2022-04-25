const log = {
    currentDate: 1,
    messages: ["Error: receive records", "Success: wrote data to \"product\" table."]
};

Object.defineProperty(log, 'currentDate', {
    value: new Date(),
});
console.log(log);