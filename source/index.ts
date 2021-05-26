import { Options, QueryParms } from './types';

function _joinParts(param: string, value: string): string {
    return [param, value].join('=');
}

function _encode(queryParams: QueryParms, options: Options, parts: string[], prefix: string): void {
    for (const param in queryParams) {
        const value = queryParams[param];

        if (value instanceof Date) {
            parts.push(_joinParts(`${prefix}${param}`, value.toISOString()));
        } else if (typeof value === 'object') {
            if (options.flagNestedParents) {
                parts.push(_joinParts(`${prefix}${param}`, 'true'));
            }
            _encode(value, options, parts, `${prefix}${param}.`);
        } else {
            parts.push(_joinParts(`${prefix}${param}`, value.toString()));
        }
    }
}

export function encode(queryParams: QueryParms, options: Options): string {
    const parts: string[] = [];

    _encode(queryParams, options, parts, '');

    const query = parts.join('&');
    return options.addQuestionMark && query.length ? `?${query}` : query;
}
