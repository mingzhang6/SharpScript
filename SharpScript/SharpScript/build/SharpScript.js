/***********************************
 *
 ***********************************/
// ReSharper disable Lambda
// ReSharper disable MethodSafeThis
// noinspection JSUnusedGlobalSymbols
/**
 * @description Represents a collection of keys and values.
 */
var Dictionary = /** @class */ (function () {
    //# region Methods
    function Dictionary(keyType, valueType, capacity) {
        if (keyType)
            this.keyType = keyType;
        if (valueType)
            this.valueType = valueType;
        this._pairs = [];
        // ReSharper disable once InconsistentNaming
        var _capacity = Number.MAX_VALUE;
        if (capacity) {
            if (typeof capacity === 'number') {
                _capacity = parseInt(capacity.toString());
            }
            else {
                var msg = '"capacity" must be of type number.';
                alert(msg);
                throw new Error(msg);
            }
        }
        // noinspection JSUnusedLocalSymbols
        Object.defineProperty(this, '__capacity', {
            get: function () {
                return _capacity;
            },
            set: function (value) {
                throw new Error('"_capacity" is a readonly property.');
            },
            writable: false
        });
    }
    Dictionary.prototype.add = function (key, value) {
        if (this.keyType && typeof key !== this.keyType) {
            throw new Error("A key must be of type " + this.keyType);
        }
        if (this.valueType && typeof value !== this.valueType) {
            throw new Error("A value must be of type " + this.valueType);
        }
        // noinspection UnnecessaryLocalVariableJS
        var result = this._pairs.filter(function (item) {
            return item.key !== key;
        });
        this._pairs = result;
        // noinspection TypeScriptUnresolvedVariable
        if (this._pairs.length > this.capacity - 1) {
            throw new Error('Pair count exceeds capacity.');
        }
        var pair = {
            key: key,
            value: value
        };
        this._pairs.push(pair);
    };
    Dictionary.prototype.get = function (key) {
        var result = this._pairs.filter(function (item) {
            return item.key === key;
        });
        if (result.length !== 0) {
            return result[0].value;
        }
        else {
            return;
        }
    };
    Dictionary.prototype.clear = function () {
        this._pairs.splice(0);
    };
    /**
     * @description Determines whether the dictionary contains the specified key.
     * @param key
     */
    Dictionary.prototype.containsKey = function (key) {
        // noinspection UnnecessaryLocalVariableJS
        var hasKey = this._pairs.some(function (item) {
            return item.key === key;
        });
        return hasKey;
    };
    // noinspection JSUnusedGlobalSymbols
    /**
     * @description Determines whether the dictionary contains the specified value.
     * @param value
     */
    Dictionary.prototype.containsValue = function (value) {
        // noinspection UnnecessaryLocalVariableJS
        var hasKey = this._pairs.some(function (item) {
            return item.value === value;
        });
        return hasKey;
    };
    /**
     * @description Removes the element with the specified key from the
     * @param key
     */
    Dictionary.prototype.remove = function (key) {
        // noinspection UnnecessaryLocalVariableJS
        var result = this._pairs.filter(function (item) {
            return item.key !== key;
        });
        this._pairs = result;
    };
    /**
     *
     * @param callBackFn
     */
    Dictionary.prototype.forEach = function (callBackFn) {
        this._pairs.forEach(callBackFn);
    };
    Object.defineProperty(Dictionary.prototype, "count", {
        //# endregion
        //# region property methods
        get: function () {
            return this._pairs.length;
        },
        // noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
        set: function (value) {
            throw new Error('"count" property is readonly.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "keys", {
        /**
         * @description Gets a collection containing the keys in the dictionary.
         */
        get: function () {
            // noinspection UnnecessaryLocalVariableJS
            var result = this._pairs.map(function (item) {
                return item.key;
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "values", {
        /**
         * @description Gets a collection containing the values in the dictionary.
         */
        get: function () {
            // noinspection UnnecessaryLocalVariableJS
            var result = this._pairs.map(
            /**
             * @param item {KeyValuePair}
             */
            function (item) {
                return item.value;
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "capacity", {
        // noinspection JSUnusedGlobalSymbols
        get: function () {
            // noinspection TypeScriptUnresolvedVariable
            return this.__capacity1;
        },
        // noinspection JSMethodCanBeStatic,JSUnusedLocalSymbols,JSUnusedGlobalSymbols
        set: function (value) {
            throw new Error('"capacity" property is readonly.');
        },
        enumerable: true,
        configurable: true
    });
    return Dictionary;
}());
var Enum;
(function (Enum) {
    // noinspection JSUnusedGlobalSymbols
    var DataType;
    (function (DataType) {
        // noinspection JSUnusedGlobalSymbols
        DataType["Object"] = "object";
        DataType["String"] = "string";
        DataType["Number"] = "number";
        DataType["Boolean"] = "boolean";
        DataType["Undefined"] = "undefined";
    })(DataType || (DataType = {}));
    var Option;
    (function (Option) {
        Option[Option["One"] = 1] = "One";
    })(Option || (Option = {}));
})(Enum || (Enum = {}));
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    return KeyValuePair;
}());
String.prototype.equal = function (str, ignoreCase) {
    if (ignoreCase) {
        return (this.toString().toLowerCase() === str.toLowerCase());
    }
    else {
        return this.toString() === str;
    }
};
//# endregion
//# sourceMappingURL=SharpScript.js.map
