import { expect } from 'chai';

import { Options } from '@src/types';
import { parseOptions } from '@src/utils/parseOptions';
import { DEFAULT_OPTIONS } from '@test/utils/getDefaultOptions';

export default function testColour(): void {
    describe('Test /utils/parseOptions', function () {
        it('Should return the default options due to empty object passed', function () {
            const opt: Options = {};

            const expected = DEFAULT_OPTIONS;
            const result = parseOptions(opt);

            expect(JSON.stringify(result)).to.equal(JSON.stringify(expected));
        });

        it('Should return the default options changed with "addQuestionMark" and "flagNestedParents" set to false', function () {
            const opt: Options = {
                addQuestionMark: false,
                flagNestedParents: false
            };

            const expected = { ...DEFAULT_OPTIONS, ...opt };
            const result = parseOptions(opt);

            expect(JSON.stringify(result)).to.equal(JSON.stringify(expected));
        });

        it('Should return the default options changed with "preserveNull" and "preserveUndefined" changed', function () {
            const opt: Options = {
                preserveNull: false,
                preserveUndefined: true
            };

            const expected = { ...DEFAULT_OPTIONS, ...opt };
            const result = parseOptions(opt);

            expect(JSON.stringify(result)).to.equal(JSON.stringify(expected));
        });

        it('Should return the default options changed with a function returning the locale datetime as date interpretation', function () {
            const opt: Options = {
                dateParser: value => value.toString()
            };
            const date = new Date();

            const parsedOptions = parseOptions(opt);
            const result = parsedOptions.dateParser(date);
            expect(result).to.equal(date.toString());
        });
    });
}
