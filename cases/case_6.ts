

interface ITs {
	num: number
	classLog(): number
}

@fabric(234)
@fnDecor
@tsDecor
class TsClass implements ITs {
	num: number = 1

	classLog(): number {
		return this.num
	}

	cL() {
		console.log(this.num)
	}
}

function tsDecor<T extends { new(...args: any[]): {} }>(target: T) {
	console.log(target)
	return class extends target {
		num = 123
	}
}

function fnDecor(target: Function) {
	console.log(target)
}

console.log(new TsClass().classLog())



function fabric(valuse: number) {
	return function <T extends { new(...args: any[]): {} }>(target: T) {
		return class extends target {
			num = valuse
		}
	}
}

console.log(new TsClass().classLog())



















































