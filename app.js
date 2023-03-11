"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let TsClass = class TsClass {
    constructor() {
        this.num = 1;
    }
    classLog() {
        return this.num;
    }
    cL() {
        console.log(this.num);
    }
};
TsClass = __decorate([
    fabric(234),
    fnDecor,
    tsDecor
], TsClass);
function tsDecor(target) {
    console.log(target);
    return class extends target {
        constructor() {
            super(...arguments);
            this.num = 123;
        }
    };
}
function fnDecor(target) {
    console.log(target);
}
console.log(new TsClass().classLog());
function fabric(valuse) {
    return function (target) {
        return class extends target {
            constructor() {
                super(...arguments);
                this.num = valuse;
            }
        };
    };
}
console.log(new TsClass().classLog());
