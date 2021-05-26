/* eslint-disable @typescript-eslint/no-require-imports */
import * as path from 'path';
import rewire = require('rewire');

import { InternalOptions } from '@src/types/options';

const DEFAULT_OPTIONS: InternalOptions = rewire(
    path.join(process.cwd(), 'dist', 'source', 'utils', 'parseOptions.js')
).__get__('DEFAULT_OPTIONS');

export { DEFAULT_OPTIONS };
