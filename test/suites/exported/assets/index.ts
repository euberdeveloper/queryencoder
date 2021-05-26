import { Options, QueryParms } from '@src/types';

interface Asset {
    title: string;
    object: QueryParms;
    options?: Options;
    expected: string;
}

const ASSETS: Asset[] = [
    {
        title: 'Should return an empty string',
        object: {},
        options: {},
        expected: ''
    },
    {
        title: 'Should return an empty string and work even with undefined options',
        object: {},
        expected: ''
    },
    {
        title: 'Should return a query string with some strings and numbers',
        object: {
            ciao: 'mondo',
            n: 23
        },
        options: {},
        expected: '?ciao=mondo&n=23'
    },
    {
        title: 'Should return a query string with some strings and booleans',
        object: {
            ciao: 'mondo',
            buono: true,
            cattivo: false
        },
        options: {},
        expected: '?ciao=mondo&buono=true&cattivo=false'
    },
    {
        title: 'Should return a query string with some strings and dates',
        object: {
            ciao: 'mondo',
            data: new Date(1999, 5, 23)
        },
        options: {},
        expected: '?ciao=mondo&data=1999-06-22T22:00:00.000Z'
    },
    {
        title: 'Should return a query string with some strings and custom-formatted dates',
        object: {
            ciao: 'mondo',
            data: new Date(1999, 5, 23)
        },
        options: {
            dateParser: date => date.getFullYear().toString()
        },
        expected: '?ciao=mondo&data=1999'
    },
    {
        title: 'Should return a query string with some strings and numbers without the initial "?"',
        object: {
            ciao: 'mondo',
            n: 23
        },
        options: {
            addQuestionMark: false
        },
        expected: 'ciao=mondo&n=23'
    },
    {
        title: 'Should return a query string with some null but without undefined',
        object: {
            ciao: undefined,
            come: undefined,
            va: null,
            tutto: null,
            n: 23
        },
        options: {},
        expected: '?va=null&tutto=null&n=23'
    },
    {
        title: 'Should return a query string with some undefined but without null',
        object: {
            ciao: undefined,
            come: undefined,
            va: null,
            tutto: null,
            n: 23
        },
        options: {
            preserveNull: false,
            preserveUndefined: true
        },
        expected: '?ciao=undefined&come=undefined&n=23'
    },
    {
        title: 'Should return a query string with a nested-flagged path',
        object: {
            a: {
                b: {
                    c: {
                        d: {
                            e: {}
                        }
                    }
                }
            }
        },
        options: {},
        expected: '?a=true&a.b=true&a.b.c=true&a.b.c.d=true&a.b.c.d.e=true'
    },
    {
        title: 'Should return a query string with a nested-flagged path and some strings',
        object: {
            a: {
                b: {
                    c: {
                        d: {
                            e: {
                                pocca: 'si',
                                bubu: 'no'
                            }
                        }
                    }
                }
            }
        },
        options: {},
        expected: '?a=true&a.b=true&a.b.c=true&a.b.c.d=true&a.b.c.d.e=true&a.b.c.d.e.pocca=si&a.b.c.d.e.bubu=no'
    },
    {
        title: 'Should return a query string without a nested-flagged path and with some strings',
        object: {
            a: {
                b: {
                    c: {
                        d: {
                            e: {
                                pocca: 'si',
                                bubu: 'no'
                            }
                        }
                    }
                }
            }
        },
        options: {
            flagNestedParents: false
        },
        expected: '?a.b.c.d.e.pocca=si&a.b.c.d.e.bubu=no'
    },
    {
        title: 'Should return a query string with some nested-flagged path and with some strings',
        object: {
            a: 0,
            b: '1',
            c: true,
            nested: {
                a: 1,
                b: '0',
                annida: {
                    a: false
                }
            },
            another: {
                b: 'boh'
            }
        },
        options: {},
        expected:
            '?a=0&b=1&c=true&nested=true&nested.a=1&nested.b=0&nested.annida=true&nested.annida.a=false&another=true&another.b=boh'
    },
    {
        title: 'Should return a query string without some nested-flagged path and with some strings',
        object: {
            a: 0,
            b: '1',
            c: true,
            nested: {
                a: 1,
                b: '0',
                annida: {
                    a: false
                }
            },
            another: {
                b: 'boh'
            }
        },
        options: { flagNestedParents: false },
        expected: '?a=0&b=1&c=true&nested.a=1&nested.b=0&nested.annida.a=false&another.b=boh'
    }
];

export default ASSETS;
