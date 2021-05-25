import { DeepPartial } from './deepParial';

export interface InternalOptions {
    addQuestionMark: boolean;
    flagNestedParents: boolean;
    dateParser: (value: Date) => string;
}

export type Options = DeepPartial<InternalOptions>;
