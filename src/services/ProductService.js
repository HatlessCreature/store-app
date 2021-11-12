class ProductService {

    static id = 4;

    products = [
        { id: 1, manufacturer: "Arctos inc", name: "Bazen za decu", numAvailable: 1 },
        { id: 2, manufacturer: "Canis DOO", name: "Naocare za sunce", numAvailable: 3 },
        { id: 3, manufacturer: "Panthera & co", name: "Klima uredjaj", numAvailable: 8 }
    ]

    getAll() {
        return [...this.products];
    }

    get(id) {
        return this.products.find(x => x.id == id);
    }

    create(newProduct) {
        const createdProduct = { ...newProduct, id: ProductService.id };
        this.products.push(createdProduct);
        ProductService.id++;
        return createdProduct;
    }

    delete(id) {
        var updatedProducts = [...this.products];
        var indexToRemove = updatedProducts.findIndex(x => x.id === id);
        if (indexToRemove > -1) {
            updatedProducts.splice(indexToRemove, 1)
            this.products = [...updatedProducts];
        }
    }
}

export default new ProductService();
