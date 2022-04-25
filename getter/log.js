const log = {
    currentDate: 1
};

Object.defineProperty(log, 'currentDate', {
    get() {
        return new Date();
    }
})

console.log(log.currentDate);