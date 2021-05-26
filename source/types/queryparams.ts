export type QueryValue = string | number | boolean | Date | null | undefined;
export interface QueryParms {
    [param: string]: QueryValue | QueryParms;
}
