// string, number, boolean, null, undefined, any, void, unknown
// tupl, enum, union types('|' - объединение, '&' - пересечение)
// readonly для tupl, array (пример альтернативной записи ReadonlyArray<string>)

// примитивные типы: string, number, bigint, boolean, symbol, nullили undefined

// number
// string
// boolean
// object (это не Object)
// array
// tupl
// enum
// union
// intersection
// literal type
// type (alias)
// interface
// optional (?)
// приведение к типу (as 'type', или использовать '!'; as можно применять к объекту (в конце после объекта))
// void
// unknown (error в конструкции try/catch имеет тип 'unknown', проверка: error instanceof Error)
// never
// null (null - явное отсутствие св-ва, undefined - неявное)
// type guard ( + type narrowing - сужение типа) 'prop' is 'type' - boolean

// type narrowing (сужение типов):
// typeof id === 'number'
// Array.isArray(arr)
// 'key' in object (или object.hasOwnProperty) (наличие определенного свойста в объекте) - как способ разделить union объектов

// явная задача нужного типа (кастование): someProp as 'some type'

// 1. параметр функции может принимать более широкий тип, чем описано
// 2. в объявлении типа tupl можно исаользовать spred-оператор (...), напр.:
// const skls: [string, number, ...boolean[]] = ['a', 1, true, true];
// 3. enum - принимает числа и строки, по-умолчанию числовой, может быть гетерогенным.
// после компиляции enum - это самовыз. функция, однако const enum становится одной константой.
// 4. literal type - переменная, объявленная через 'const', или явно:
// function myFetch(param: 10 | 20, method: 'post' | 'get') {}
// 5. optional (?) хоть и означает в объекте 'some type' | undefined,
// но не эквивалентно явному заданию значения 'some type' | undefined (так наличие св-ва обязательно)
// 6. при передаче пар-ов ф-ции можно сделать интерфейс для деструктуризации,
// чтоб не зависеть от порядка пар-ов: function displayMessage({text, sender}: Message) {}.
// 7. unknown (error в конструкции try/catch имеет тип 'unknown', проверка: error instanceof Error),
// в union типе: 'unknown' | 'some type' = вернет 'unknown'.
// 8. never: type nev = never & number вурнет never,
// (function (): never { throw new Error() })() - покрыть не используемую ветку условия (исчерпывающая проверка)
// 9. null - спец. опция в tsconfig - strictNullCheks: true (если true, то нельзя обратиться к св-ву, которого нет),
// null - чего-то нет осознанно, делать проверку на null, возвращать null; undefined - отсутствие в runtime чего-то.
// 10. для приведения одного объекта к другому использовать
// кастомные ф-ции mapping-а, записывая лишь нужные св-ва в нужный объект.
// 11. type guard - синтаксис - function isString(prop: string): prop is string - boolean,
// но если написать boolean, не произойдет сужение типов для объектов,
// проверка не может быть асинхронной (Promise),
// альтернатива для объектов: вместо in -  (user as Admin).role !== undefined.

// ============================================

type I1 = {
	name: string
}

const aObj = {
	name: 'str',
	age: 1
}

const bObj = {
	key: 'value'
}

const obj: I1 = aObj

console.log('a'.repeat(3))




























