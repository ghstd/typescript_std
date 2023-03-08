

type DeliveryType = IDeliveryToAddress | IDeliveryToStore;

interface IDeliveryToAddress {
	type: 'addres',
	address: string
}

interface IDeliveryToStore {
	type: 'store',
	storeId: number
}

interface IDelivery {
	date: Date,
	deliveryType: DeliveryType
}

interface IProduct {
	id: number,
	name: string,
	price: number
}

interface ICart {
	productList: IProduct[],
	delivery: IDelivery,
	addProduct(product: IProduct): void,
	removeProduct(id: number): void,
	calcAllPrice(): number,
	createDelivery(deliveryType: DeliveryType): void
	checkout(): void
}

class Card implements ICart { }



























































