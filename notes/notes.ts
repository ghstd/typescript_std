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
// interface (2 варианта задания ф-ции: 1 - fn(prop: type): type или 2 - fn:(prop: type) => type)
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
// declare - означает сказать typescript, что такая переменная уже есть, хоть ему может быть и не видна.

// 1. параметр функции может принимать более широкий тип, чем описано
// 2. в объявлении типа TUPL можно исаользовать spred-оператор (...), напр.:
// const skls: [string, number, ...boolean[]] = ['a', 1, true, true];
// 3. ENUM - принимает числа и строки, по-умолчанию числовой, может быть гетерогенным.
// после компиляции enum - это самовыз. функция, однако const enum становится одной константой.
// 4. LITERAL TYPE - переменная, объявленная через 'const', или явно:
// function myFetch(param: 10 | 20, method: 'post' | 'get') {}
// 5. OPTIONAL (?) хоть и означает в объекте 'some type' | undefined,
// но не эквивалентно явному заданию значения 'some type' | undefined (так наличие св-ва обязательно)
// 6. при передаче пар-ов ф-ции можно сделать интерфейс для деструктуризации,
// чтоб не зависеть от порядка пар-ов: function displayMessage({text, sender}: Message) {}.
// 7. UNKNOWN (error в конструкции try/catch имеет тип 'unknown', проверка: error instanceof Error),
// в union type: 'unknown' | 'some type' = вернет 'unknown'.
// 8. NEVER: type nev = never & number вурнет never,
// (function (): never { throw new Error() })() - покрыть не используемую ветку условия (исчерпывающая проверка)
// 9. NULL - спец. опция в tsconfig - strictNullCheks: true (если true, то нельзя обратиться к св-ву, которого нет),
// null - чего-то нет осознанно, делать проверку на null, возвращать null; undefined - отсутствие в runtime чего-то.
// 10. для приведения одного объекта к другому использовать
// кастомные ф-ции mapping-а, записывая лишь нужные св-ва в нужный объект.
// 11. TYPE GUARD - синтаксис - function isString(prop: string): prop is string - boolean,
// но если написать boolean, не произойдет сужение типов для объектов,
// проверка не может быть асинхронной (Promise),
// альтернатива для объектов: вместо in -  (user as Admin).role !== undefined.

// CLASS
// аксессор SET по-умолчанию принимает такой же тип, который возвращает GET.
// если есть только GET - св-во становиться readonly.
// GET и SET не могут быть асинхронными.
// модификатор OVERRIDE для переопределенного метода в классе-наследнике для наглядности и безопасности
// модификаторы св-в и методов: #, public, protected, private, static, readonly а так же возможны их комбинации: private static readonly 'prop'.
// статические блоки класса STATIC {} (внутири нельзя использовать асинхронность)
// THIS-параметр: function fn(this: 'object', x: number) {} (может использоваться не только в методах класса, а и в просто ф-ях)
// так же есть тип THIS, так же может применяться в TYPE GUARDS: this is 'type'
// если структура нескольких классов идентична(сравниваются структурно), то их типы могут быть неразличимы, в том же тайп гарде например (могут заменять друг друга).
// ABSTRACT(модификатор): class(можно только extends), method(нужно реализовать),
// abstract class может содержать реальные методы, в которых может уже использовать abstract методы.

// GENERIC
// <T = 'value'> - можно задать значение по-умолчанию
// class B<T> extends A<string, number> {} - можно наследоваться только от класса с конкретными типами.
// может потребоваться явно передать аргументы типа, когда компилятору не удается определить тип в сложных примерах.
// MIXIN: type Constructor<T = {}> = new (...args: any[]) => T

// ============================================