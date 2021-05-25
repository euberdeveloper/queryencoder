export type QueryValue = string | number | boolean | Date;
export interface QueryParms {
    [param: string]: QueryValue | QueryParms;
}
