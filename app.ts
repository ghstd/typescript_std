

const data = [
	{ id: 1, name: 'q' },
	{ id: 2, name: 'w' },
	{ id: 3, name: 'e' }
];

interface IWithId {
	id: number
}

function sortById<T extends IWithId>(arr: Array<T>, type: boolean = false): Array<T> {
	if (type) {
		return arr.sort((a, b) => a.id - b.id);
	} else {
		return arr.sort((a, b) => b.id - a.id);
	}
}

console.log(sortById(data))
console.log(sortById(data, true))






























































