const LEE_RANGE_MIN_DEF         = 0
const LEE_RANGE_MAX_DEF         = 1
const LEE_RANGE_IS_ACTIVE_DEF   = false

export class LeeRange {

    constructor(    

        private _min        = LEE_RANGE_MIN_DEF,
        private _max        = LEE_RANGE_MAX_DEF,
        private _isActive   = LEE_RANGE_IS_ACTIVE_DEF

    ){}

    // setter
    public setMin(min: number): void {

        this._min = min

    }
    public setMax(max: number): void {

        this._max = max

    }
    public active(): void {

        this._isActive = true

    }
    public deactive(): void {

        this._isActive = false

    }

    // getter
    public getMin(): number {

        return this._min

    }
    public getMax(): number {

        return this._max

    }
    public isActive(): boolean {

        return this._isActive

    }

}