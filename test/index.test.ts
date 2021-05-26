import * as moduleAlias from 'module-alias';
import * as path from 'path';
moduleAlias.addAlias('@src', path.join(process.cwd(), 'dist', 'source'));
moduleAlias.addAlias('@test', path.join(process.cwd(), 'dist', 'test'));

import testParseOptions from '@test/suites/utils/parseOptions.test';

describe('queryencoder tests', function () {
    testParseOptions();
});
