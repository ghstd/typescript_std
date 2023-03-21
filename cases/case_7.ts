@decorFabric_2('3')
@decorFabric_1('2')
class MyClass {
	name: string

	constructor(name: string) {
		this.name = name
		console.log(`in-target-constructor, MyClass, this.name: ${this.name}`)
	}
}



function decorFabric_1(prop: string) {
	console.log(`pre-decor, decorFabric_1, prop: ${prop}`)
	return function <T extends { new(...args: any[]): {} }>(Constructor: T) {
		console.log(`self-decor, decorFabric_1, target: ${Constructor.name}`)
		return class extends Constructor {
			name: string
			value: number

			constructor(...args: any[]) {
				super(...args)
				this.name = prop
				this.value = 1111
				console.log(`in-decor-constructor, decorFabric_1, this.name: ${this.name}`)
			}
		}
	}
}

function decorFabric_2(prop: string) {
	console.log(`pre-decor, decorFabric_2, prop: ${prop}`)
	return function <T extends { new(...args: any[]): {} }>(Constructor: T) {
		console.log(`self-decor, decorFabric_2, target: ${Constructor.name}`)
		return class extends Constructor {
			name: string
			value: number

			constructor(...args: any[]) {
				super(...args)
				this.name = prop
				this.value = 2222
				console.log(`in-decor-constructor, decorFabric_2, this.name: ${this.name}`)
			}
		}
	}
}

type decorFabric_2 = {
	value: number
};

const myObj = new MyClass('1') as decorFabric_2 & MyClass;

console.log(`post-decor, myObj, myObj.name: ${myObj.name}`)

console.log(myObj, `myObj.value: ${myObj.value}`)