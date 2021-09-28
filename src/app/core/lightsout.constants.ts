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

export class LightsoutGameTable {
    screen: boolean[][];
    table: boolean[][];
    startup: boolean[][];
    readonly trials: number;
    clicks: number;

    constructor(size: number, trials: number) {
        if (!size || size < 4) {
            size = 4;
        }
        if (size > 7) {
            size = 7;
        }
        size = Math.floor(size);

        if (!trials || trials < 1) {
            trials = 1;
        }
        if (trials > size) {
            trials = size;
        }
        trials = Math.floor(trials);

        this.clicks = 0;
        this.trials = trials;

        const tablesOfSize = TABLES[size.toString()];

        this.screen = tablesOfSize[Math.floor(Math.random() * tablesOfSize.length)];
        this.table = [...this.screen];

        const clickedTiles = new Array<string>();
        while (clickedTiles.length < this.trials) {
            const i = Math.floor(Math.random() * this.screen.length);
            const j = Math.floor(Math.random() * this.screen[i].length);
            if (!clickedTiles.includes(i + '-' + j)) {
                this._clickTile(i, j);
                clickedTiles.push(i + '-' + j);
            }
        }

        this.startup = [...this.table];
    }

    private _clickTile(i: number, j: number): void {
        for (let _i = i - 1; _i <= i + 1; _i++) {
            for (let _j = j - 1; _j <= j + 1; _j++) {
                if (!(_i < 0 || _i >= this.table.length || _j < 0 || _j >= this.table[_i].length)) {
                    this.table[_i][_j] = !this.table[_i][_j];
                }
            }
        }
    }

    clickTile(i: number, j: number): void {
        this._clickTile(i, j);
        this.clicks++;
    }

    isWin(): boolean {
        return JSON.stringify(this.screen) === JSON.stringify(this.table);
    }
}
