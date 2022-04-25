const product = (title, salePrice, oriPrice, description) => ({
    title,
    description,
    get price() {
        return oriPrice - salePrice;
    }
});

const apple = product('Apple', 200, 300, "This fruit is very heathy.");
console.log(apple.title);
