import { InternalOptions, Options } from '../types';

const DEFAULT_OPTIONS: InternalOptions = {
    addQuestionMark: true,
    dateParser: value => value.toISOString(),
    flagNestedParents: true,
    preserveNull: true,
    preserveUndefined: false
};

export function parseOptions(options: Options): InternalOptions {
    return Object.keys(DEFAULT_OPTIONS).reduce<InternalOptions>((result, key) => {
        result[key] = options[key] ?? DEFAULT_OPTIONS[key];
        return result;
    }, {} as InternalOptions);
}
