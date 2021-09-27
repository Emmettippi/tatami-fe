export const TABLES: { [key: string]: boolean[][][] } = {
    '4': [
        [
            [true, true, true, true]   // X X X X
            , [true, true, true, true] // X X X X
            , [true, true, true, true] // X X X X
            , [true, true, true, true] // X X X X
        ]
        , [
            [true, true, true, true]     // X X X X
            , [true, false, false, true] // X O O X
            , [true, false, false, true] // X O O X
            , [true, true, true, true]   // X X X X
        ]
        , [
            [false, true, true, false]   // O X X O
            , [true, false, false, true] // X O O X
            , [true, false, false, true] // X O O X
            , [false, true, true, false] // O X X O
        ]
        , [
            [true, false, false, true]   // X O O X
            , [false, true, true, false] // O X X O
            , [false, true, true, false] // O X X O
            , [true, false, false, true] // X O O X
        ]
    ]
    , '5': [
        [
            [true, true, true, true, true]   // X X X X X
            , [true, true, true, true, true] // X X X X X
            , [true, true, true, true, true] // X X X X X
            , [true, true, true, true, true] // X X X X X
            , [true, true, true, true, true] // X X X X X
        ]
        , [
            [true, true, true, true, true]      // X X X X X
            , [true, false, false, false, true] // X O O O X
            , [true, false, false, false, true] // X O O O X
            , [true, false, false, false, true] // X O O O X
            , [true, true, true, true, true]    // X X X X X
        ]
        , [
            [false, false, true, false, false]   // O O X O O
            , [false, false, true, false, false] // O O X O O
            , [true, true, true, true, true]     // X X X X X
            , [false, false, true, false, false] // O O X O O
            , [false, false, true, false, false] // O O X O O
        ]
        , [
            [false, false, true, false, false]   // X X O X X
            , [false, false, true, false, false] // X X O X X
            , [true, true, true, true, true]     // O O O O O
            , [false, false, true, false, false] // X X O X X
            , [false, false, true, false, false] // X X O X X
        ]
    ]
    , '6': [
        [
            [true, true, true, true, true, true]   // X X X X X X
            , [true, true, true, true, true, true] // X X X X X X
            , [true, true, true, true, true, true] // X X X X X X
            , [true, true, true, true, true, true] // X X X X X X
            , [true, true, true, true, true, true] // X X X X X X
            , [true, true, true, true, true, true] // X X X X X X
        ]
        , [
            [true, true, true, true, true, true]       // X X X X X X
            , [true, false, false, false, false, true] // X O O O O X
            , [true, false, false, false, false, true] // X O O O O X
            , [true, false, false, false, false, true] // X O O O O X
            , [true, false, false, false, false, true] // X O O O O X
            , [true, true, true, true, true, true]     // X X X X X X
        ]
        , [
            [true, true, true, true, true, true]     // X X X X X X
            , [true, true, true, true, true, true]   // X X X X X X
            , [true, true, false, false, true, true] // X X O O X X
            , [true, true, false, false, true, true] // X X O O X X
            , [true, true, true, true, true, true]   // X X X X X X
            , [true, true, true, true, true, true]   // X X X X X X
        ]
        , [
            [false, false, true, true, false, false]   // O O X X O O
            , [false, false, true, true, false, false] // O O X X O O
            , [true, true, true, true, true, true]     // X X X X X X
            , [true, true, true, true, true, true]     // X X X X X X
            , [false, false, true, true, false, false] // O O X X O O
            , [false, false, true, true, false, false] // O O X X O O
        ]
        , [
            [true, true, false, false, true, true]       // X X O O X X
            , [true, true, false, false, true, true]     // X X O O X X
            , [false, false, false, false, false, false] // O O O O O O
            , [false, false, false, false, false, false] // O O O O O O
            , [true, true, false, false, true, true]     // X X O O X X
            , [true, true, false, false, true, true]     // X X O O X X
        ]
    ]
    , '7': [
        [
            [true, true, true, true, true, true, true]   // X X X X X X X
            , [true, true, true, true, true, true, true] // X X X X X X X
            , [true, true, true, true, true, true, true] // X X X X X X X
            , [true, true, true, true, true, true, true] // X X X X X X X
            , [true, true, true, true, true, true, true] // X X X X X X X
            , [true, true, true, true, true, true, true] // X X X X X X X
            , [true, true, true, true, true, true, true] // X X X X X X X
        ]
        , [
            [true, true, true, true, true, true, true]        // X X X X X X X
            , [true, false, false, false, false, false, true] // X O O O O O X
            , [true, false, false, false, false, false, true] // X O O O O O X
            , [true, false, false, false, false, false, true] // X O O O O O X
            , [true, false, false, false, false, false, true] // X O O O O O X
            , [true, false, false, false, false, false, true] // X O O O O O X
            , [true, true, true, true, true, true, true]      // X X X X X X X
        ]
        , [
            [true, true, true, true, true, true, true]      // X X X X X X X
            , [true, true, true, true, true, true, true]    // X X X X X X X
            , [true, true, false, false, false, true, true] // X X O O O X X
            , [true, true, false, false, false, true, true] // X X O O O X X
            , [true, true, false, false, false, true, true] // X X O O O X X
            , [true, true, true, true, true, true, true]    // X X X X X X X
            , [true, true, true, true, true, true, true]    // X X X X X X X
        ]
    ]
    , '8': []
    , '9': []
    , '10': []
};
