// string, number, boolean, null, undefined, any, void, unknown
// tupl, enum, union types('|' - объединение, '&' - пересечение)
// readonly для tupl, array (пример альтернативной записи ReadonlyArray<string>)

// number
// string
// boolean
// object
// array
// tupl
// enum
// union
// intersection
// literal type
// type (alias)
// interface

// сужение типов (type narrowing):
// typeof id === 'number'
// Array.isArray(arr)
// 'key' in object (или object.hasOwnProperty) (наличие определенного свойста в объекте)

// явная задача нужного типа (кастование):
//  someProp as 'type here'

// 1. параметр функции может принимать более широкий тип, чем описано
// 2. в объявлении типа tupl можно исаользовать spred-оператор (...), напр.:
// const skls: [string, number, ...boolean[]] = ['a', 1, true, true];
// 3. enum - принимает числа и строки, по-умолчанию числовой, может быть гетерогенным.
// после компиляции enum - это самовыз. функция, однако const enum становится одной константой.
// 4. literal type - переменная, объявленная через 'const', или явно:
// function myFetch(param: 10 | 20, method: 'post' | 'get') {}

// ============================================

interface I {
	'a': number,
	'b': number,
	'c': number
}

const o: I = {
	a: 1,
	b: 2,
	c: 3
};

type Res = 'a'[]

const res: Res = Object.keys(o) as (keyof Pick<I, 'a'>)[]

const v: Pick<I, 'a'> = { a: 2 }

const part: Partial<Omit<I, 'b'>> = {
	'a': 2,
	'c': 3
}

// ============================================

interface Ii {
	a: string
	b: number
}

const Ll = {
	a: 'str',
	b: 1,
	c: 2
}

function get(param: Ii) { }

get(Ll)

const skls: readonly [string, number, ...boolean[]] = ['a', 1]

Ll.a = 'qwe'

// console.log(Ll)

interface enTest {
	a: 'aa',
	b: 'bb',
	c: 'cc'
}

const enum testEnum {
	a = 'aa',
	b = 'bb',
	c = 'cc'
}

const enum nEnum {
	a,
	b,
	c
}

function enFn(value: enTest) {
	return value
}

// console.log(enFn(testEnum))
// console.log(testEnum)
// console.log(nEnum)

const vv = nEnum.a;














