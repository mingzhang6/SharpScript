/**
 * description Represents a collection of keys and values.
 */
// ReSharper disable InconsistentNaming
class Dictionary {
    //# region Methods
    constructor(keyType, valueType, capacity) {
        if (keyType)
            this.keyType = keyType;
        if (valueType)
            this.valueType = valueType;
        this.pairs = [];
        // ReSharper disable once InconsistentNaming
        let _capacity = Number.MAX_VALUE;
        if (capacity) {
            if (typeof capacity === 'number') {
                _capacity = parseInt(capacity.toString());
            }
            else {
                const msg = '"capacity" must be of type number.';
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
    add(key, value) {
        if (this.keyType && typeof key !== this.keyType) {
            throw new Error(`A key must be of type ${this.keyType}`);
        }
        if (this.valueType && typeof value !== this.valueType) {
            throw new Error(`A value must be of type ${this.valueType}`);
        }
        // noinspection UnnecessaryLocalVariableJS
        const result = this.pairs.filter((item) => {
            return item.key !== key;
        });
        if (this.pairs.length === result.length) {
            const descriptor = {
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
        const pair = {
            key: key,
            value: value
        };
        this.pairs.push(pair);
    }
    get(key) {
        const result = this.pairs.filter((item) => {
            return item.key === key;
        });
        if (result.length !== 0) {
            return result[0].value;
        }
        else {
            // ReSharper disable once InconsistentFunctionReturns
            return;
        }
    }
    /**
     * Removes all keys and values from the dictionary.
     */
    clear() {
        this.pairs.forEach((item) => {
            delete this[item.key];
        });
        this.pairs.splice(0);
    }
    /**
     * Determines whether the dictionary contains the specified key.
     * @param key
     */
    containsKey(key) {
        // noinspection UnnecessaryLocalVariableJS
        const hasKey = this.pairs.some((item) => {
            return item.key === key;
        });
        return hasKey;
    }
    // noinspection JSUnusedGlobalSymbols
    /**
     * Determines whether the dictionary contains the specified value.
     * @param value
     */
    containsValue(value) {
        // noinspection UnnecessaryLocalVariableJS
        const hasKey = this.pairs.some((item) => {
            return item.value === value;
        });
        return hasKey;
    }
    /**
     * Removes the element with the specified key from the
     * @param key
     */
    remove(key) {
        // noinspection UnnecessaryLocalVariableJS
        const result = this.pairs.filter((item) => {
            return item.key !== key;
        });
        this.pairs = result;
    }
    /**
     *
     * @param callBackFn
     */
    forEach(callBackFn) {
        this.pairs.forEach(callBackFn);
    }
    //# endregion
    //# region property methods
    get count() {
        return this.pairs.length;
    }
    // noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
    set count(value) {
        throw new Error('"count" property is readonly.');
    }
    /**
     * Gets a collection containing the keys in the dictionary.
     */
    get keys() {
        // noinspection UnnecessaryLocalVariableJS
        const result = this.pairs.map((item) => {
            return item.key;
        });
        return result;
    }
    /**
     * Gets a collection containing the values in the dictionary.
     */
    get values() {
        // noinspection UnnecessaryLocalVariableJS
        const result = this.pairs.map(
        /**
         * @param item {KeyValuePair}
         */
        (item) => {
            return item.value;
        });
        return result;
    }
    // noinspection JSUnusedGlobalSymbols
    get capacity() {
        // noinspection TypeScriptUnresolvedVariable
        return this.__capacity1;
    }
    // noinspection JSMethodCanBeStatic,JSUnusedLocalSymbols,JSUnusedGlobalSymbols
    set capacity(value) {
        throw new Error('"capacity" property is readonly.');
    }
}
class KeyValuePair {
}
