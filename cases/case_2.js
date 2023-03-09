"use strict";
// =================================================================
class Cart {
    constructor() {
        this.productList = [];
    }
    addProduct(product) {
        this.productList.push(product);
    }
    removeProduct(id) {
        const index = this.productList.findIndex((item) => item.id === id);
        this.productList.splice(index, 1);
    }
    calcAllPrice() {
        if (!this.productList.length)
            return false;
        const sum = this.productList.reduce((acc, value) => acc + value.price, 0);
        return sum;
    }
    createDelivery(type, date, target) {
        if (type === 'address' && typeof target === 'string') {
            this.delivery = {
                date: new Date(),
                address: target
            };
        }
        else if (type === 'store' && typeof target === 'number') {
            this.delivery = {
                date: new Date(),
                storeId: target
            };
        }
        else {
            throw new Error('некорректные параметры доставки');
        }
    }
    checkout() {
        if (this.delivery && this.productList.length) {
            return true;
        }
        else {
            return false;
        }
    }
}
const cart = new Cart();
cart.addProduct({ id: 1, name: 't1', price: 10 });
cart.addProduct({ id: 2, name: 't2', price: 30 });
cart.addProduct({ id: 3, name: 't3', price: 20 });
cart.removeProduct(1);
cart.createDelivery('address', new Date(), 'some address');
console.log(cart.calcAllPrice());
console.log(cart.checkout());
// =============================================================
// =============================================================
class Logger {
    printDate() {
        const date = new Date().toLocaleString();
        this.log(date);
    }
}
class RealLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        console.log(new Date());
        console.log(message);
    }
}
