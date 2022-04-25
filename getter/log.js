const log = {
    currentDate: 1
};

Object.defineProperty(log, 'currentDate', {
    value: new Date(),
    writable: false
})

log.currentDate = "Hallo, May!";
// TypeError: Cannot assign to read only property 'currentDate' of object '#<Object>'
console.log(log.currentDate);