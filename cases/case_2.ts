

type DeliveryType = 'address' | 'store';

interface IDelivery {
	date: Date
}

interface IDeliveryToAddress extends IDelivery {
	address: string
}

interface IDeliveryToStore extends IDelivery {
	storeId: number
}

interface IProduct {
	id: number,
	name: string,
	price: number
}

interface ICart {
	productList: IProduct[],
	delivery: IDeliveryToAddress | IDeliveryToStore,
	addProduct(product: IProduct): void,
	removeProduct(id: number): void,
	calcAllPrice(): number | boolean,
	createDelivery(type: DeliveryType, date: Date, target: string | number): void
	checkout(): boolean
}
// =================================================================
class Cart implements ICart {
	productList: IProduct[] = []
	delivery: IDeliveryToAddress | IDeliveryToStore

	constructor() {

	}

	addProduct(product: IProduct): void {
		this.productList.push(product)
	}

	removeProduct(id: number): void {
		const index: number = this.productList.findIndex((item) => item.id === id);
		this.productList.splice(index, 1)
	}

	calcAllPrice(): number | boolean {
		if (!this.productList.length) return false
		const sum: number = this.productList.reduce((acc, value) => acc + value.price, 0)
		return sum
	}

	createDelivery(type: DeliveryType, date: Date, target: string | number): void {
		if (type === 'address' && typeof target === 'string') {
			this.delivery = {
				date: new Date(),
				address: target
			}
		} else if (type === 'store' && typeof target === 'number') {
			this.delivery = {
				date: new Date(),
				storeId: target
			}
		} else {
			throw new Error('некорректные параметры доставки')
		}
	}

	checkout(): boolean {
		if (this.delivery && this.productList.length) {
			return true
		} else {
			return false
		}
	}
}

const cart = new Cart();

cart.addProduct({ id: 1, name: 't1', price: 10 })
cart.addProduct({ id: 2, name: 't2', price: 30 })
cart.addProduct({ id: 3, name: 't3', price: 20 })
cart.removeProduct(1)
cart.createDelivery('address', new Date(), 'some address')
console.log(cart.calcAllPrice())
console.log(cart.checkout())

// =============================================================
// =============================================================

abstract class Logger {
	abstract log(message: string): void

	printDate() {
		const date = new Date().toLocaleString();
		this.log(date)
	}
}

class RealLogger extends Logger {
	log(message: string) {
		console.log(message)
	}

	logWithDate(message: string) {
		console.log(new Date())
		console.log(message)
	}
}























































