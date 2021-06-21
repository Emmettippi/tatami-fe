export class PercentageError {
    id: number;
    messageType: string;
    messageTypeId: number;
    messageKey: string;
    extraNotes: string;
    extraParam1: string;
    extraParam2: string;
    extraParam3: string;
    extraParam4: string;
    percentageId: number;

    constructor(
        id?: number,
        messageType?: string,
        messageTypeId?: number,
        messageKey?: string,
        extraNotes?: string,
        extraParam1?: string,
        extraParam2?: string,
        extraParam3?: string,
        extraParam4?: string,
        percentageId?: number
    ) {
        this.id = id;
        this.messageType = messageType;
        this.messageTypeId = messageTypeId;
        this.messageKey = messageKey;
        this.extraNotes = extraNotes;
        this.extraParam1 = extraParam1;
        this.extraParam2 = extraParam2;
        this.extraParam3 = extraParam3;
        this.extraParam4 = extraParam4;
        this.percentageId = percentageId;
    }
}


export class PercentageQueryParams {
    id: number;
    strParam1: string;
    strParam2: string;
    strParam3: string;
    strParam4: string;
    strParam5: string;
    decimalParam1: number;
    decimalParam2: number;
    decimalParam3: number;
    decimalParam4: number;
    decimalParam5: number;
    integerParam1: number;
    integerParam2: number;
    integerParam3: number;
    integerParam4: number;
    integerParam5: number;
    percentageId: number;

    constructor(
        id?: number,
        strParam1?: string,
        strParam2?: string,
        strParam3?: string,
        strParam4?: string,
        strParam5?: string,
        decimalParam1?: number,
        decimalParam2?: number,
        decimalParam3?: number,
        decimalParam4?: number,
        decimalParam5?: number,
        integerParam1?: number,
        integerParam2?: number,
        integerParam3?: number,
        integerParam4?: number,
        integerParam5?: number,
        percentageId?: number
    ) {
        this.id = id;
        this.strParam1 = strParam1;
        this.strParam2 = strParam2;
        this.strParam3 = strParam3;
        this.strParam4 = strParam4;
        this.strParam5 = strParam5;
        this.decimalParam1 = decimalParam1;
        this.decimalParam2 = decimalParam2;
        this.decimalParam3 = decimalParam3;
        this.decimalParam4 = decimalParam4;
        this.decimalParam5 = decimalParam5;
        this.integerParam1 = integerParam1;
        this.integerParam2 = integerParam2;
        this.integerParam3 = integerParam3;
        this.integerParam4 = integerParam4;
        this.integerParam5 = integerParam5;
        this.percentageId = percentageId;
    }
}

export class Percentage {
    id: number;
    operation: string;
    relatedTo: any;
    locked: boolean;
    lockedBy: any;
    createdAt: Date;
    lastUpdated: Date;
    progression: number;
    progressionStatus: string;
    percentageErrors: PercentageError[];
    percentageQueryParams: PercentageQueryParams[];

    constructor(
        id?: number,
        operation?: string,
        relatedTo?: any,
        locked?: boolean,
        lockedBy?: any,
        createdAt?: Date,
        lastUpdated?: Date,
        progression?: number,
        progressionStatus?: string,
        percentageErrors?: PercentageError[],
        percentageQueryParams?: PercentageQueryParams[]
    ) {
        this.id = id;
        this.operation = operation;
        this.relatedTo = relatedTo;
        this.locked = locked;
        this.lockedBy = lockedBy;
        this.createdAt = createdAt;
        this.lastUpdated = lastUpdated;
        this.progression = progression;
        this.progressionStatus = progressionStatus;
        this.percentageErrors = percentageErrors;
        this.percentageQueryParams = percentageQueryParams;
    }
}
