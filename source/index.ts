import { InternalOptions, Options, QueryParms } from './types';
import { createParamString } from './utils/createParamString';
import { parseOptions } from './utils/parseOptions';

export * from './types';

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

export function encode(queryParams: QueryParms, options: Options): string {
    const parts: string[] = [];

    const parsedOptions = parseOptions(options);
    _encode(queryParams, parsedOptions, parts, '');

    const query = parts.join('&');
    return options.addQuestionMark && query.length ? `?${query}` : query;
}
