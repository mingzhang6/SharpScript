/**
 * description Represents a collection of keys and values.
 */
// ReSharper disable InconsistentNaming
class Dictionary<K, V> implements IDictionary<K, V> {
    // ReSharper restore InconsistentNaming
    [x: string]: any;
    private pairs: KeyValuePair[];
    private readonly keyType;
    private readonly valueType;

    //# region Methods
    constructor(keyType: string, valueType: string, capacity: number) {
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
            } else {
                const msg = '"capacity" must be of type number.';
                alert(msg);
                throw new Error(msg);
            }
        }

        // noinspection JSUnusedLocalSymbols
        Object.defineProperty(this,
            '__capacity',
            {
// ReSharper disable MethodSafeThis
// ReSharper disable Lambda
                get: function() {
                    /// <summary></summary>
                    /// <returns type="K"></returns>
                    return _capacity;
                },
                set: function(value) {
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
    add(key: K, value: V) {
        if (this.keyType && typeof key !== this.keyType) {
            throw new Error(`A key must be of type ${this.keyType}`);
        }
        if (this.valueType && typeof value !== this.valueType) {
            throw new Error(`A value must be of type ${this.valueType}`);
        }

        // noinspection UnnecessaryLocalVariableJS
        const result = this.pairs.filter(
            (item) => {
                return item.key !== key;
            }
        );

        if (this.pairs.length === result.length) {
            const descriptor = {
                value: value,
                writable: true,
                configurable: true
            };
            Object.defineProperty(this, (key) as any, descriptor);
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

    get(key: K) {
        const result = this.pairs.filter(
            (item) => {
                return item.key === key;
            }
        );
        if (result.length !== 0) {
            return result[0].value;
        } else {
            // ReSharper disable once InconsistentFunctionReturns
            return;
        }
    }

    /**
     * Removes all keys and values from the dictionary.
     */
    clear() {
        this.pairs.forEach(
            (item) => {
                delete this[item.key];
            }
        );
        this.pairs.splice(0);
    }

    /**
     * Determines whether the dictionary contains the specified key.
     * @param key
     */
    containsKey(key: K): boolean {
        // noinspection UnnecessaryLocalVariableJS
        const hasKey = this.pairs.some(
            (item) => {
                return item.key === key;
            }
        );
        return hasKey;
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * Determines whether the dictionary contains the specified value.
     * @param value
     */
    containsValue(value: V): boolean {
        // noinspection UnnecessaryLocalVariableJS
        const hasKey = this.pairs.some(
            (item) => {
                return item.value === value;
            }
        );
        return hasKey;
    }

    /**
     * Removes the element with the specified key from the
     * @param key
     */
    remove(key: K) {
        // noinspection UnnecessaryLocalVariableJS
        const result = this.pairs.filter(
            (item) => {
                return item.key !== key;
            }
        );
        this.pairs = result;
    }

    /**
     *
     * @param callBackFn
     */
    forEach(callBackFn: (keyPairValue: KeyValuePair, index: number, array: KeyValuePair[]) => void) {
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
    get keys(): K[] {
        // noinspection UnnecessaryLocalVariableJS
        const result = this.pairs.map(
            (item) => {
                return item.key;
            }
        );
        return result;
    }

    /**
     * Gets a collection containing the values in the dictionary.
     */
    get values(): V[] {
        // noinspection UnnecessaryLocalVariableJS
        const result = this.pairs.map(
            /**
             * @param item {KeyValuePair}
             */
            (item) => {
                return item.value;
            }
        );
        return result;
    }

    // noinspection JSUnusedGlobalSymbols
    get capacity() {
        // noinspection TypeScriptUnresolvedVariable
        return this.__capacity1;
    }

    // noinspection JSMethodCanBeStatic,JSUnusedLocalSymbols,JSUnusedGlobalSymbols
    set capacity(value) {
        throw new Error('"capacity" property is readonly.')
    }

    //# endregion
}

declare namespace System {
    // noinspection JSUnusedGlobalSymbols
    enum DataType {
        Object = 'object',
        String = 'string',
        Number = 'number',
        Boolean = 'boolean',
        Undefined = 'undefined'
    }

    enum Option {
        One = 1,
    }

    /**
     * Specifies the culture, case, and sort rules to be used.
     */
    enum StringComparison {
        /**
         * Compare strings using culture-sensitive sort rules and the current culture.
         */
        CurrentCulture,
        /**
         * Compare strings using culture-sensitive sort rules, the current culture, and ignoring the case of the strings being compared.
         */
        CurrentCultureIgnoreCase,
        /**
         * Compare strings using culture-sensitive sort rules and the invariant culture.
         */
        InvariantCulture,
        /**
         * Compare strings using culture-sensitive sort rules, the invariant culture, and ignoring the case of the strings being compared.
         */
        InvariantCultureIgnoreCase,
        /**
         * Compare strings using ordinal (binary) sort rules.
         */
        Ordinal,
        /**
         * Compare strings using ordinal (binary) sort rules and ignoring the case of the strings being compared.
         */
        OrdinalIgnoreCase,
}
}


class KeyValuePair {
    public key;
    public value;
}

// ReSharper disable InconsistentNaming
interface IDictionary<K, V> {
    // ReSharper restore InconsistentNaming
    keys: K[];
    values: V[];
    get(key: K): V;
    add(key: K, value: V);
    containsKey(key: K): boolean;
    remove(key: K);
}