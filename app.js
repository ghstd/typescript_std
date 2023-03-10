"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeSchool = void 0;
class GradeSchool {
    constructor() {
        this.list = {};
    }
    roster() {
        const keys = Object.keys(this.list);
        if (keys.length) {
            for (const key of keys) {
                this.list[key].sort((str_1, str_2) => {
                    if (str_1 > str_2) {
                        return 1;
                    }
                    else if (str_1 < str_2) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
            }
            const result = {};
            for (const key of keys) {
                result[key] = [...this.list[key]];
            }
            return result;
        }
        else {
            return {};
        }
    }
    add(name, grade) {
        if (typeof this.list[grade] === 'undefined') {
            this.list[grade] = [];
        }
        const keys = Object.keys(this.list);
        if (keys.length) {
            for (const key of keys) {
                this.list[key] = this.list[key].filter((item) => item !== name);
            }
        }
        if (this.list[grade].find((item) => item === name)) {
            return true;
        }
        else {
            this.list[grade].push(name);
        }
        return true;
    }
    grade(grd) {
        if (this.list[grd]) {
            this.list[grd].sort((str_1, str_2) => {
                if (str_1 > str_2) {
                    return 1;
                }
                else if (str_1 < str_2) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            return [...this.list[grd]];
        }
        else {
            return [];
        }
    }
}
exports.GradeSchool = GradeSchool;
const school = new GradeSchool();
school.add('Aimee', 2);
const roster = school.roster();
roster[2].push('Oops.');
console.log(school.roster());
