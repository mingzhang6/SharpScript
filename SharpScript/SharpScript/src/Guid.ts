class Guid extends String {
    static empty: Guid;

    constructor(string) {
        super();
        var guid;
        if (string) {
            guid = Guid.parse(string);
        } else {
            guid = this.generate();
        }
        const descriptor = {
            value: guid
        };

        Object.defineProperty(this, 'guid', descriptor);
        console.log(guid.toString());
    }

    s4() {
        'use strict';
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    generate() {
        // then to call it, plus stitch in '4' in the third group
        const str = (this.s4() + this.s4() + "-"
            + this.s4() + "-4" + this.s4().substr(0, 3)
            + '-' + this.s4() + "-" + this.s4()
            + this.s4() + this.s4()).toLowerCase();
        var guid = '{' + str + '}';
        return guid;
    }

    generateEmpty() {
        return Guid.parse("{00000000-0000-0000-0000-000000000000}");
    }

    toString(format: string): string {
        if (format) {
            if (format.toUpperCase() === 'N') {
                /** @type string */
                const str = this['guid'];
                return str.replace(/[-|{|}]/g, '');
            }
            if (format.toUpperCase() === 'P') {
                /** @type string */
                const str = this['guid'];
                return str.replace('{', '(').replace('}', ')');
            }
            if (format.toUpperCase() === 'D') {
                /** @type string */
                const str = this['guid'];
                return str.replace(/[{|}]/g, '');
            }
        }
        return this['guid'];
    }

    static equal(guid1, guid2) {
        const parsed1 = Guid.parse(guid1);
        const parsed2 = Guid.parse(guid2);
        if (parsed1.toString() === parsed2.toString())
            return true;
        return (guid1 == guid2);
    }

    static parse(input: string | object, ) {
        // 4c24765c-a558-4dac-aa6b-9c862278876b
        //if (typeof input !== 'string') {
        //    throw new Error('parameter must be of type string.');
        //}
        const d = input.toString().toLowerCase().replace(/[-|{|}]/g, '');
        if (d.length !== 32) {
            const msg = 'input is not a valid guid string.';
            alert(msg);
            throw new Error(msg);
        }
        /** @type Array<string> */
        const charArray = d.split('');
        for (let i = 0; i < charArray.length; i++) {
            const char = charArray[i];
            if ((char >= '0' && char <= '9') || (char >= 'a' && char <= 'z')) {

            } else {
                const msg = 'input is not a valid guid string.';
                alert(msg);
                throw new Error(msg);
            }
        }
        charArray.fill('-', 8, 9);
        charArray.fill('-', 13, 14);
        charArray.fill('-', 18, 19);
        charArray.fill('-', 23, 24);
        charArray.fill('{', 0, 1);
        charArray.push('}');
        const guid = charArray.join('');
        return guid;
    }

// ReSharper disable once InconsistentNaming
    static _isStringOrGuid(obj) {
        if ((obj instanceof Guid) || typeof obj === 'string') {
            return true;
        }
        return false;
    }
}