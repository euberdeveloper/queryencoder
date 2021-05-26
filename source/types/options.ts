export interface InternalOptions {
    addQuestionMark: boolean;
    flagNestedParents: boolean;
    preserveNull: boolean;
    preserveUndefined: boolean;
    dateParser: (value: Date) => string;
}

export type Options = Partial<InternalOptions>;
