const seourl = Object.freeze('seourl');

const product = (title, salePrice, oriPrice, description) => ({
    title,
    description,
    get price() {
        return oriPrice - salePrice;
    },
    get [seourl]() {
        return this.title.toLowerCase().replace(/\s/g, "-");
    }
});

const apple = product('Apple from California', 200, 300, "This fruit is very heathy.");
console.log(apple.seourl);
