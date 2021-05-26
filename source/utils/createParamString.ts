/**
 * Utility function that given the param name and its value returns the url param string.
 * @param param The param name.
 * @param value The param value.
 * @returns The url param string.
 */
export function createParamString(param: string, value: string): string {
    return [param, value].join('=');
}
