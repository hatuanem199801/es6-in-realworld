const log = {
    currentDate: 1
};

Object.defineProperty(log, 'currentDate', {
    value: new Date()
})

console.log(log.currentDate);