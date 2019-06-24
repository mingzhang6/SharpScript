// ReSharper disable Lambda
// ReSharper disable MethodSafeThis
// noinspection JSUnusedGlobalSymbols

//# region Extends String
// ts-ignore
interface String {
    equal(str1, str2, ignoreCase): boolean;
}

String.prototype.equal = function (str, ignoreCase) {
    if (ignoreCase) {
        return (this.toString().toLowerCase() === str.toLowerCase())
    } else {
        return this.toString() === str;
    }
};
//# endregion
