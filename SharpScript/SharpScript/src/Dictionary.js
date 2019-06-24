/**
 * description Represents a collection of keys and values.
 */
// ReSharper disable InconsistentNaming
var Dictionary = /** @class */ (function () {
    //# region Methods
    function Dictionary(keyType, valueType, capacity) {
        if (keyType)
            this.keyType = keyType;
        if (valueType)
            this.valueType = valueType;
        this.pairs = [];
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
            // ReSharper disable MethodSafeThis
            // ReSharper disable Lambda
            get: function () {
                /// <summary></summary>
                /// <returns type="K"></returns>
                return _capacity;
            },
            set: function (value) {
                /// <summary></summary>
                /// <param name="value" type="Object"></param>
                throw new Error('"_capacity" is a readonly property.');
            }
        });
        keyType = this.valueType;
        // ReSharper disable restore MethodSafeThis
        // ReSharper disable restore Lambda
    }
    /**
     * Adds the specified key and value to the dictionary.
     * @param key
     * @param value
     */
    Dictionary.prototype.add = function (key, value) {
        if (this.keyType && typeof key !== this.keyType) {
            throw new Error("A key must be of type " + this.keyType);
        }
        if (this.valueType && typeof value !== this.valueType) {
            throw new Error("A value must be of type " + this.valueType);
        }
        // noinspection UnnecessaryLocalVariableJS
        var result = this.pairs.filter(function (item) {
            return item.key !== key;
        });
        if (this.pairs.length === result.length) {
            var descriptor = {
                value: value,
                writable: true,
                configurable: true
            };
            Object.defineProperty(this, (key), descriptor);
        }
        this.pairs = result;
        // noinspection TypeScriptUnresolvedVariable
        if (this.pairs.length > this.capacity - 1) {
            throw new Error('Pair count exceeds capacity.');
        }
        var pair = {
            key: key,
            value: value
        };
        this.pairs.push(pair);
    };
    Dictionary.prototype.get = function (key) {
        var result = this.pairs.filter(function (item) {
            return item.key === key;
        });
        if (result.length !== 0) {
            return result[0].value;
        }
        else {
            // ReSharper disable once InconsistentFunctionReturns
            return;
        }
    };
    /**
     * Removes all keys and values from the dictionary.
     */
    Dictionary.prototype.clear = function () {
        var _this = this;
        this.pairs.forEach(function (item) {
            delete _this[item.key];
        });
        this.pairs.splice(0);
    };
    /**
     * Determines whether the dictionary contains the specified key.
     * @param key
     */
    Dictionary.prototype.containsKey = function (key) {
        // noinspection UnnecessaryLocalVariableJS
        var hasKey = this.pairs.some(function (item) {
            return item.key === key;
        });
        return hasKey;
    };
    // noinspection JSUnusedGlobalSymbols
    /**
     * Determines whether the dictionary contains the specified value.
     * @param value
     */
    Dictionary.prototype.containsValue = function (value) {
        // noinspection UnnecessaryLocalVariableJS
        var hasKey = this.pairs.some(function (item) {
            return item.value === value;
        });
        return hasKey;
    };
    /**
     * Removes the element with the specified key from the
     * @param key
     */
    Dictionary.prototype.remove = function (key) {
        // noinspection UnnecessaryLocalVariableJS
        var result = this.pairs.filter(function (item) {
            return item.key !== key;
        });
        this.pairs = result;
    };
    /**
     *
     * @param callBackFn
     */
    Dictionary.prototype.forEach = function (callBackFn) {
        this.pairs.forEach(callBackFn);
    };
    Object.defineProperty(Dictionary.prototype, "count", {
        //# endregion
        //# region property methods
        get: function () {
            return this.pairs.length;
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
         * Gets a collection containing the keys in the dictionary.
         */
        get: function () {
            // noinspection UnnecessaryLocalVariableJS
            var result = this.pairs.map(function (item) {
                return item.key;
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "values", {
        /**
         * Gets a collection containing the values in the dictionary.
         */
        get: function () {
            // noinspection UnnecessaryLocalVariableJS
            var result = this.pairs.map(
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
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    return KeyValuePair;
}());
//# sourceMappingURL=Dictionary.js.map