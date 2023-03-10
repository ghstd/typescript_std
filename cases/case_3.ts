

interface IData {
	group: number
	name: string
}

const data = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 3, name: 'c' },
	{ group: 3, name: 'd' },
	{ group: 4, name: 'e' },
	{ group: 4, name: 'f' }
];

const example = {
	'1': [{ group: 1, name: 'a' }, { group: 1, name: 'b' }],
	'3': [{ group: 3, name: 'c' }]
};

type ResKey = string | number | symbol;

interface IResult<T> {
	[key: ResKey]: T[]
}

// ================================

function groupData<T extends Record<ResKey, any>>(arr: T[], key: keyof T): IResult<T> {
	const result = arr.reduce((acc: IResult<T>, item) => {
		if (acc[item[key]]) {
			acc[item[key]].push(item)
		} else {
			acc[item[key]] = [item]
		}
		return acc
	}, {});

	return result
}

console.log(groupData(data, 'group'))

// ================================

// function groupData<T extends IData>(arr: T[], key: string) {
// 	const result: { [key: string]: T[] } = {};

// 	arr.forEach((item) => {
// 		result[item[key]] = []
// 	})

// 	arr.forEach((item) => {
// 		result[item[key]].push(item)
// 	})

// 	console.log(result)
// }

// groupData(data, 'group')



// function groupData(arr: IData[], key: keyof IData) {
// 	const keys = [];
// 	keys.push(arr[0][key])
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i][key] !== arr[i - 1][key]) {
// 			keys.push(arr[i][key])
// 		}
// 	}
// }



// function groupData(arr: IData[], key: keyof IData) {

// 	const result: { [prop: string]: IData[] } = {};

// 	for (let i = 0; i < arr.length; i++) {
// 		const prop = arr[i][key];
// 		result[prop] = []
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[j][key] === prop) {
// 				result[prop].push(arr[j])
// 			}
// 		}
// 	}
// 	return result
// }

// console.log(groupData(data, 'group'))

































































