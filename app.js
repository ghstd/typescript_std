"use strict";
// string, number, boolean, null, undefined, any, void, unknown
// tupl, enum, union types('|' - объединение, '&' - пересечение)
// readonly для tupl, array (пример альтернативной записи ReadonlyArray<string>)
const o = {
    a: 1,
    b: 2,
    c: 3
};
const res = Object.keys(o);
const v = { a: 2 };
const part = {
    'a': 2,
    'c': 3
};
const Ll = {
    a: 'str',
    b: 1,
    c: 2
};
function get(param) { }
get(Ll);
const skls = ['a', 1];
Ll.a = 'qwe';
function enFn(value) {
    return value;
}
// console.log(enFn(testEnum))
// console.log(testEnum)
// console.log(nEnum)
const vv = 0 /* nEnum.a */;
