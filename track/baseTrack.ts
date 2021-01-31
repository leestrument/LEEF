export const BASE_TRACK_IS_ACTIVE_DEF   = true
export const BASE_TRACK_IS_SOLO_DEF     = false
export const BASE_TRACK_IS_SELECTED_DEF = false

export class BaseTrack {

    constructor(

        private _isActive   = BASE_TRACK_IS_ACTIVE_DEF,
        private _isSolo     = BASE_TRACK_IS_SOLO_DEF,
        private _isSelected = BASE_TRACK_IS_SELECTED_DEF,

    ){}

    // setter
    public active(): void {

        this._isActive = true

    }
    public mute(): void {

        this._isActive = false

    }
    public solo(): void {

        this._isSolo = true

    }
    public unsolo(): void {

        this._isSolo = false

    }
    public select(): void {

        this._isSelected = true

    }
    public deselect(): void {

        this._isSelected = false

    }

    // getter
    public isActive(): boolean {

        return this._isActive

    }
    public isMuted(): boolean {

        return this._isActive === false

    }
    public isSolo(): boolean {

        return this._isSolo === true

    }
    public isSelected(): boolean {

        return this._isSelected

    }

}