import { expect } from 'chai';

import { Options } from '@src/types';
import { createParamString } from '@src/utils/createParamString';

export default function testColour(): void {
    describe('Test /utils/createParamString', function () {
        it('Should return the param string "hello=world"', function () {
            const expected = 'hello=world';
            const result = createParamString('hello', 'world');

            expect(result).to.equal(expected);
        });

        it('Should return the param string "ciao=mondo"', function () {
            const expected = 'ciao=mondo';
            const result = createParamString('ciao', 'mondo');

            expect(result).to.equal(expected);
        });
    });
}
