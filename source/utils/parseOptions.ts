import { InternalOptions, Options } from '../types';

/** The default options for the function [[encode]] */
const DEFAULT_OPTIONS: InternalOptions = {
    addQuestionMark: true,
    dateParser: value => value.toISOString(),
    flagNestedParents: true,
    preserveNull: true,
    preserveUndefined: false
};

/**
 * The function that given an [[Options]] object, merges it with the default options, returning it as [[InternalOptions]]
 * @param options The options that will be merged with the default options
 * @returns The returned [[InternalOptions]]
 */
export function parseOptions(options: Options): InternalOptions {
    return Object.keys(DEFAULT_OPTIONS).reduce<InternalOptions>((result, key) => {
        result[key] = options[key] ?? DEFAULT_OPTIONS[key];
        return result;
    }, {} as InternalOptions);
}
