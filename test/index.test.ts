import * as moduleAlias from 'module-alias';
import * as path from 'path';
moduleAlias.addAlias('@src', path.join(process.cwd(), 'dist', 'source'));
moduleAlias.addAlias('@test', path.join(process.cwd(), 'dist', 'test'));

import testParseOptions from '@test/suites/utils/parseOptions.test';
import testCreateParamString from '@test/suites/utils/createParamString.test';

describe('queryencoder tests', function () {
    testParseOptions();
    testCreateParamString();
});
