import { MyRelations } from './../entities/user-relation/my-relations.model';
import { RELATION_SORT } from './constants';

export class RelationSubObj {
    sort: RELATION_SORT;
    asc: boolean;
    open: boolean;

    constructor() {
        this.asc = true;
        this.open = false;
        this.sort = RELATION_SORT.DEFAULT;
    }
}

export class RelationObj {
    [key: string]: RelationSubObj;

    constructor(keys: (keyof MyRelations)[]) {
        for (const key of keys) {
            this[key] = new RelationSubObj();
        }
    }
}
