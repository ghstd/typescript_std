"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Admin_name;
class Admin {
    constructor() {
        _Admin_name.set(this, 'admin');
        this.age = 10;
    }
    showName(value) {
        console.log(__classPrivateFieldGet(this, _Admin_name, "f"));
        __classPrivateFieldSet(value, _Admin_name, 'test', "f");
        console.log(__classPrivateFieldGet(value, _Admin_name, "f"));
    }
}
_Admin_name = new WeakMap();
const admin = new Admin();
const newAdmin = new Admin();
newAdmin.age = 20;
console.log(admin);
console.log(newAdmin);
admin.showName(newAdmin);
