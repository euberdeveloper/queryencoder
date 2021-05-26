import { InternalOptions, Options, QueryParms } from './types';
import { createParamString } from './utils/createParamString';
import { parseOptions } from './utils/parseOptions';

export * from './types';

/**
 * The utility function used by [[encode]].
 * @param queryParams The query parameters (it can be a subobject) to analyze
 * @param options The (already parsed) options
 * @param parts The parts that will be added
 * @param prefix The prefix if this is a subobject
 */
function _encode(queryParams: QueryParms, options: InternalOptions, parts: string[], prefix: string): void {
    for (const param in queryParams) {
        const value = queryParams[param];

        if (value instanceof Date) {
            parts.push(createParamString(`${prefix}${param}`, value.toISOString()));
        } else if (value === null) {
            if (options.preserveNull) {
                parts.push(createParamString(`${prefix}${param}`, 'null'));
            }
        } else if (value === undefined) {
            if (options.preserveUndefined) {
                parts.push(createParamString(`${prefix}${param}`, 'undefined'));
            }
        } else if (typeof value === 'object') {
            if (options.flagNestedParents) {
                parts.push(createParamString(`${prefix}${param}`, 'true'));
            }
            _encode(value, options, parts, `${prefix}${param}.`);
        } else {
            parts.push(createParamString(`${prefix}${param}`, value.toString()));
        }
    }
}

/**
 * The function that encodes the given object with the params into an url query string.
 * @param queryParams The query params object to encode.
 * @param options The [[Options]] passed to the function.
 * @returns The obtained url query string.
 */
export function encode(queryParams: QueryParms, options?: Options): string {
    const parts: string[] = [];

    const parsedOptions = parseOptions(options ?? {});
    _encode(queryParams, parsedOptions, parts, '');

    const query = parts.join('&');
    return parsedOptions.addQuestionMark && query.length ? `?${query}` : query;
}
