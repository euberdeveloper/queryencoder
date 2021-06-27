/**
 * The interface of the options internally used by the function [[encode]]
 */
export interface InternalOptions {
    /**
     * If '?' will be added to the begin of the result, in case the result is not empty. Default value: true
     */
    addQuestionMark: boolean;
    /**
     * If a value is of boolean type, it will be just declared if true while omitted if false. (e.g. &val) Default value: false
     */
    shortBoolean: boolean;
    /**
     * If, in case there is a nested object, a parameter with value true for each path to the parents will be added. Default value: true
     */
    flagNestedParents: boolean;
    /**
     * If all the null values will be kept and parsed as 'null'. Default value: true
     */
    preserveNull: boolean;
    /**
     * If all the undefined values will be kept and parsed as 'undefined'. Default value: false
     */
    preserveUndefined: boolean;
    /**
     * The function used to parse the dates. Default value: value => value.toISOString()
     */
    dateParser: (value: Date) => string;
}

export type Options = Partial<InternalOptions>;
