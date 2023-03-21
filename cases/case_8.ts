class MyClass {
	name: string

	constructor(name: string) {
		this.name = name
	}

	@methodDecor()
	myMethod() {
		// throw new Error('error in root-method')
		console.log(this, 'from root method')
		return 'returning'
	}
}

function methodDecor(param: { shoodThrow: boolean } = { shoodThrow: false }) {
	return (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {

		const rootMethod: Function = descriptor.value

		descriptor.value = function (...args: any[]) {
			try {
				return rootMethod.apply(this, ...args)
			} catch (error) {
				if (param.shoodThrow) {
					throw new Error('throwing error')
				} else {
					console.log(error)
				}
			}
		}
	}
}

try {
	const res = new MyClass('123').myMethod();
	console.log(res)
} catch (error) {
	console.log('catched from outside: ' + error)
}