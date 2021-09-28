export const TABLES: {
    [key: string]: {
        type: 'default' | 'casual' | 'competitive'
        , table: boolean[][]
    }[]
} = {
    '4': [
        {
            type: 'default'
            , table: [
                [false, false, false, false]   // O O O O
                , [false, false, false, false] // O O O O
                , [false, false, false, false] // O O O O
                , [false, false, false, false] // O O O O
            ]
        }
        , {
            type: 'competitive'
            , table: [
                [true, true, true, true]   // X X X X
                , [true, true, true, true] // X X X X
                , [true, true, true, true] // X X X X
                , [true, true, true, true] // X X X X
            ]
        }
        , {
            type: 'competitive'
            , table: [
                [true, true, true, true]     // X X X X
                , [true, false, false, true] // X O O X
                , [true, false, false, true] // X O O X
                , [true, true, true, true]   // X X X X
            ]
        }
        , {
            type: 'casual'
            , table: [
                [false, true, true, false]   // O X X O
                , [true, false, false, true] // X O O X
                , [true, false, false, true] // X O O X
                , [false, true, true, false] // O X X O
            ]
        }
        , {
            type: 'casual'
            , table: [
                [true, false, false, true]   // X O O X
                , [false, true, true, false] // O X X O
                , [false, true, true, false] // O X X O
                , [true, false, false, true] // X O O X
            ]
        }
    ]
    , '5': [
        {
            type: 'default'
            , table: [
                [false, false, false, false, false]   // O O O O O
                , [false, false, false, false, false] // O O O O O
                , [false, false, false, false, false] // O O O O O
                , [false, false, false, false, false] // O O O O O
                , [false, false, false, false, false] // O O O O O
            ]
        }
        , {
            type: 'competitive'
            , table: [
                [true, true, true, true, true]   // X X X X X
                , [true, true, true, true, true] // X X X X X
                , [true, true, true, true, true] // X X X X X
                , [true, true, true, true, true] // X X X X X
                , [true, true, true, true, true] // X X X X X
            ]
        }
        , {
            type: 'competitive'
            , table: [
                [true, true, true, true, true]      // X X X X X
                , [true, false, false, false, true] // X O O O X
                , [true, false, false, false, true] // X O O O X
                , [true, false, false, false, true] // X O O O X
                , [true, true, true, true, true]    // X X X X X
            ]
        }
        , {
            type: 'casual'
            , table: [
                [false, false, true, false, false]   // O O X O O
                , [false, false, true, false, false] // O O X O O
                , [true, true, true, true, true]     // X X X X X
                , [false, false, true, false, false] // O O X O O
                , [false, false, true, false, false] // O O X O O
            ]
        }
        , {
            type: 'casual'
            , table: [
                [false, false, true, false, false]   // X X O X X
                , [false, false, true, false, false] // X X O X X
                , [true, true, true, true, true]     // O O O O O
                , [false, false, true, false, false] // X X O X X
                , [false, false, true, false, false] // X X O X X
            ]
        }
    ]
    , '6': [
        {
            type: 'default'
            , table: [
                [false, false, false, false, false, false]   // O O O O O O
                , [false, false, false, false, false, false] // O O O O O O
                , [false, false, false, false, false, false] // O O O O O O
                , [false, false, false, false, false, false] // O O O O O O
                , [false, false, false, false, false, false] // O O O O O O
                , [false, false, false, false, false, false] // O O O O O O
            ]
        }
        , {
            type: 'competitive'
            , table: [
                [true, true, true, true, true, true]   // X X X X X X
                , [true, true, true, true, true, true] // X X X X X X
                , [true, true, true, true, true, true] // X X X X X X
                , [true, true, true, true, true, true] // X X X X X X
                , [true, true, true, true, true, true] // X X X X X X
                , [true, true, true, true, true, true] // X X X X X X
            ]
        }
        , {
            type: 'competitive'
            , table: [
                [true, true, true, true, true, true]       // X X X X X X
                , [true, false, false, false, false, true] // X O O O O X
                , [true, false, false, false, false, true] // X O O O O X
                , [true, false, false, false, false, true] // X O O O O X
                , [true, false, false, false, false, true] // X O O O O X
                , [true, true, true, true, true, true]     // X X X X X X
            ]
        }
        , {
            type: 'casual'
            , table: [
                [true, true, true, true, true, true]     // X X X X X X
                , [true, true, true, true, true, true]   // X X X X X X
                , [true, true, false, false, true, true] // X X O O X X
                , [true, true, false, false, true, true] // X X O O X X
                , [true, true, true, true, true, true]   // X X X X X X
                , [true, true, true, true, true, true]   // X X X X X X
            ]
        }
        , {
            type: 'casual'
            , table: [
                [false, false, true, true, false, false]   // O O X X O O
                , [false, false, true, true, false, false] // O O X X O O
                , [true, true, true, true, true, true]     // X X X X X X
                , [true, true, true, true, true, true]     // X X X X X X
                , [false, false, true, true, false, false] // O O X X O O
                , [false, false, true, true, false, false] // O O X X O O
            ]
        }
        , {
            type: 'casual'
            , table: [
                [true, true, false, false, true, true]       // X X O O X X
                , [true, true, false, false, true, true]     // X X O O X X
                , [false, false, false, false, false, false] // O O O O O O
                , [false, false, false, false, false, false] // O O O O O O
                , [true, true, false, false, true, true]     // X X O O X X
                , [true, true, false, false, true, true]     // X X O O X X
            ]
        }
    ]
    , '7': [
        {
            type: 'default'
            , table: [
                [false, false, false, false, false, false, false]   // O O O O O O O
                , [false, false, false, false, false, false, false] // O O O O O O O
                , [false, false, false, false, false, false, false] // O O O O O O O
                , [false, false, false, false, false, false, false] // O O O O O O O
                , [false, false, false, false, false, false, false] // O O O O O O O
                , [false, false, false, false, false, false, false] // O O O O O O O
                , [false, false, false, false, false, false, false] // O O O O O O O
            ]
        }
        , {
            type: 'competitive'
            , table: [
                [true, true, true, true, true, true, true]   // X X X X X X X
                , [true, true, true, true, true, true, true] // X X X X X X X
                , [true, true, true, true, true, true, true] // X X X X X X X
                , [true, true, true, true, true, true, true] // X X X X X X X
                , [true, true, true, true, true, true, true] // X X X X X X X
                , [true, true, true, true, true, true, true] // X X X X X X X
                , [true, true, true, true, true, true, true] // X X X X X X X
            ]
        }
        , {
            type: 'competitive'
            , table: [
                [true, true, true, true, true, true, true]        // X X X X X X X
                , [true, false, false, false, false, false, true] // X O O O O O X
                , [true, false, false, false, false, false, true] // X O O O O O X
                , [true, false, false, false, false, false, true] // X O O O O O X
                , [true, false, false, false, false, false, true] // X O O O O O X
                , [true, false, false, false, false, false, true] // X O O O O O X
                , [true, true, true, true, true, true, true]      // X X X X X X X
            ]
        }
        , {
            type: 'casual'
            , table: [
                [true, true, true, true, true, true, true]      // X X X X X X X
                , [true, true, true, true, true, true, true]    // X X X X X X X
                , [true, true, false, false, false, true, true] // X X O O O X X
                , [true, true, false, false, false, true, true] // X X O O O X X
                , [true, true, false, false, false, true, true] // X X O O O X X
                , [true, true, true, true, true, true, true]    // X X X X X X X
                , [true, true, true, true, true, true, true]    // X X X X X X X
            ]
        }
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

    constructor(size: number, trials: number, type: 'default' | 'casual' | 'competitive' = 'casual') {
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

        this.clicks = 0;
        this.trials = trials;
        trials = Math.floor(trials);

        if (type === 'default') {
            const tableDefault = TABLES[size.toString()][0].table;
            this.screen = new Array<boolean[]>();
            this.table = new Array<boolean[]>();
            this.startup = new Array<boolean[]>();
            for (let i = 0; i < tableDefault.length; i++) {
                this.screen.push(new Array<boolean>());
                this.table.push(new Array<boolean>());
                this.startup.push(new Array<boolean>());
                for (let j = 0; j < tableDefault[i].length; j++) {
                    this.screen[i].push(tableDefault[i][j]);
                    this.table[i].push(tableDefault[i][j]);
                    this.startup[i].push(tableDefault[i][j]);
                }
            }
        } else {
            const types = type === 'casual' ? ['casual', 'competitive'] : ['competitive'];
            const tablesOfSizeX = TABLES[size.toString()].filter((t) => {
                return types.includes(t.type);
            });
            const chosenRandomTable = tablesOfSizeX[Math.floor(Math.random() * (tablesOfSizeX.length - 1)) + 1].table;

            this.screen = new Array<boolean[]>();
            this.table = new Array<boolean[]>();
            for (let i = 0; i < chosenRandomTable.length; i++) {
                this.screen.push(new Array<boolean>());
                this.table.push(new Array<boolean>());
                for (let j = 0; j < chosenRandomTable[i].length; j++) {
                    this.screen[i].push(chosenRandomTable[i][j]);
                    this.table[i].push(chosenRandomTable[i][j]);
                }
            }

            const clickedTiles = new Array<string>();
            while (clickedTiles.length < this.trials) {
                const i = Math.floor(Math.random() * this.screen.length);
                const j = Math.floor(Math.random() * this.screen[i].length);
                if (!clickedTiles.includes(i + '-' + j)) {
                    this._clickTile(i, j);
                    clickedTiles.push(i + '-' + j);
                }
            }

            this.startup = new Array<boolean[]>();
            for (let i = 0; i < chosenRandomTable.length; i++) {
                this.startup.push(new Array<boolean>());
                for (let j = 0; j < chosenRandomTable[i].length; j++) {
                    this.startup[i].push(this.table[i][j]);
                }
            }
        }
    }

    private _clickTile(index: number, jndex: number): void {
        for (let i = index - 1; i <= index + 1; i++) {
            for (let j = jndex - 1; j <= jndex + 1; j++) {
                if (!(i < 0 || i >= this.table.length || j < 0 || j >= this.table[i].length)) {
                    this.table[i][j] = !this.table[i][j];
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
