
interface IProduct {
    name: string;
    price: number;
    weight?: number;
    isKosher?: boolean;
    manufacturer?: string;
    creation?: Date;
    expiration?: Date;
}



class Product implements IProduct {
    public name: string;
    public price: number;
    public weight: number;
    public isKosher: boolean;
    public manufacturer: string;
    public creation: Date;
    public expiration: Date;

    public static numberOfProdcuts: number = 0;
    public static ONE_DAY_IN_MILISCOND: number = 86400000;
    constructor(product: IProduct) {
        this.name = product.name;
        this.price = product.price;
        this.weight = product.weight;
        this.isKosher = product.isKosher;
        this.manufacturer = product.manufacturer;
        this.creation = product.creation || new Date()
        this.expiration = product.expiration || new Date();

        Product.numberOfProdcuts++;
    }
    getExpirationDate(): string {
        if (!this.expiration) return;

        return this.expiration.toLocaleDateString()
    }
    printProduct() {
        console.log(`Product Name: ${this.name}, price: ${this.price}`)
    }
    getPricePerKg(): number {
        const price = this.price / this.weight;
        return Number(price.toFixed(2))
    }
    isExpired(): boolean {
        return this.expiration.getTime() < new Date().getTime() - Product.ONE_DAY_IN_MILISCOND

    }
    setExp(expirationDate: Date) {
        const expirationDateInMS = expirationDate.getTime();
        if (expirationDateInMS > this.creation.getTime()) {
            this.expiration = expirationDate;
        }
    }

    static getHigherPrice(p1: Product, p2: Product) {
        // this is not ALLOWED
        if (p1.price > p2.price) return p1;
        return p2;
    }
}


const product4 = new Product({ name: "eggs", creation: new Date("2020-01-30"), price: 12, expiration: new Date("2020-05-30"), isKosher: true, weight: 2 })
const product55 = new Product({ name: "tomato", creation: new Date("2020-07-30"), expiration: new Date("2020-09-30"), price: 12, weight: 2, isKosher: true })
const product1111 = new Product({ name: "Cola", creation: new Date("2020-07-30"), expiration: new Date("2020-08-30"), price: 38, weight: 1.5, isKosher: true })

const p = new Product({
    name: "string",
    price: 1,
    weight: 1,
    isKosher: true,
    manufacturer: "string",
    creation: new Date(),
    expiration: new Date(),
})

const products: Array<Product> = [product4, product55, p, product1111];
for (let index = 0; index < products.length; index++) {
    const element: Product = products[index];
    // element.printProduct()
    // console.log(element.getPricePerKg())
    console.log(element.isExpired())
}
// console.log(product.getExpirationDate())

console.log(Product.getHigherPrice(product4, product1111))

const Store: Array<Product> = [];

function init() {

    const addProductButton = document.querySelector("#addProductButton");
    addProductButton.addEventListener("click", () => {
        const pName: HTMLInputElement = document.querySelector("#pName")
        const pPrice: HTMLInputElement = document.querySelector("#pPrice")
        const pIsKosher: HTMLInputElement = document.querySelector("#pIsKosher")
        const pWeight: HTMLInputElement = document.querySelector("#pWeight")
        const pMan: HTMLInputElement = document.querySelector("#pMan")
        // const pCreation: HTMLInputElement = document.querySelector("#pCreation")
        const pExpire: HTMLInputElement = document.querySelector("#pExpire")
        // const isKosher = pIsKosher.checked
        const product = new Product({
            name: pName.value, isKosher: pIsKosher.checked,
            weight: Number(pWeight.value), price: Number(pPrice.value),
            manufacturer: pMan.value,
        })
        product.setExp(new Date(pExpire.value))
        Store.push(product);
        //  draw()
    })

}

init();

function draw() {
    Store.map(item => console.log(item))
}