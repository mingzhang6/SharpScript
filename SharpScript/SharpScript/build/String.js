// ReSharper disable Lambda
// ReSharper disable MethodSafeThis
// noinspection JSUnusedGlobalSymbols
String.prototype.equal = function (str, ignoreCase) {
    if (ignoreCase) {
        return (this.toString().toLowerCase() === str.toLowerCase());
    }
    else {
        return this.toString() === str;
    }
};
//# endregion
