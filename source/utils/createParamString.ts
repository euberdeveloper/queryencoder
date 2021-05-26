export function createParamString(param: string, value: string): string {
    return [param, value].join('=');
}
