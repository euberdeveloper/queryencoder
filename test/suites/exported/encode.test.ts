import { expect } from 'chai';

import { encode } from '@src';
import ASSETS from './assets';

export default function testColour(): void {
    describe('Test encode function', function () {
        for (const asset of ASSETS) {
            it(asset.title, function () {
                const expected = asset.expected;
                const result = encode(asset.object, asset.options);
                expect(result).to.equal(expected);
            });
        }
    });
}
