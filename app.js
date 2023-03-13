"use strict";
// string, number, boolean, null, undefined, any, void, unknown
// tupl, enum, union types('|' - объединение, '&' - пересечение)
// readonly для tupl, array (пример альтернативной записи ReadonlyArray<string>)
const aObj = {
    name: 'str',
    age: 1
};
const bObj = {
    key: 'value'
};
const obj = aObj;
console.log('a'.repeat(3));
