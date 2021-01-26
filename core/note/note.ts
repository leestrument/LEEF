export const NOTE_VELOCITY_MIN      = 1
export const NOTE_VELOCITY_MAX      = 127
export const NOTE_VELOCITY_DEF      = 64
export const NOTE_IS_SELECTED_DEF   = false
export const NOTE_IS_ACTIVE_DEF     = true

export class Note {

    constructor(

        private _pitch      : number,
        private _start      : number,
        private _duration   : number,
        private _velocity   = NOTE_VELOCITY_DEF,
        private _isSelected = NOTE_IS_SELECTED_DEF,
        private _isActive   = NOTE_IS_ACTIVE_DEF,

    ){}
    
    // setter
    public setPitch(pitch: number): void {

        this._pitch = pitch

    }
    public setStart(start: number): void {

        this._start = start

    }
    public setDuration(duration: number): void {

        this._duration = duration

    }
    public setVelocity(velocity: number): void {

        this._velocity = velocity

    }
    public select(): void {

        this._isSelected = true

    }
    public deselect(): void {

        this._isSelected = false

    }
    public active(): void {

        this._isActive = true

    }
    public mute(): void {

        this._isActive = false

    }

    // getter
    public getPitch(): number {

        return this._pitch

    }
    public getStart(): number {

        return this._start

    }
    public getDuration(): number {

        return this._duration

    }
    public getVelocity(): number {

        return this._velocity

    }
    public isSelected(): boolean {

        return this._isSelected

    }
    public isActive(): boolean {

        return this._isActive

    }
    public isMuted(): boolean {

        return this._isActive === false

    }

}