const product = (title, salePrice, oriPrice, description) => ({
    title,
    description,
    get price() {
        return oriPrice - salePrice;
    }
});

const apple = product('Apple', 200, 300, "This fruit is very heathy.");
delete apple.title;
console.log(apple.title);
