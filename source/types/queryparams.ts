/** The value that a query param can have */
export type QueryValue = string | number | boolean | Date | null | undefined;
/** The query params interface that is passed to the function [[encode]]. It is a (nested) object of [[QueryValue]] */
export interface QueryParms {
    [param: string]: QueryValue | QueryParms;
}
