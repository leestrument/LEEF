import { StartRandomizer }      from './startRandomizer'
import { GateRandomizer }       from './gateRandomizer'
import { VelocityRandomizer }   from './velocityRandomizer'

export const BASE_NOTE_PROABILITY_DEF   = 1
export const BASE_NOTE_IS_SELECTED_DEF  = false
export const BASE_NOTE_IS_ACTIVE_DEF    = false

export abstract class BaseNote {

    constructor(

        private _pitch      : number,
        private _start      : number,
        private _duration   : number,
        private _proability = BASE_NOTE_PROABILITY_DEF,
        private _isSelected = BASE_NOTE_IS_SELECTED_DEF,
        private _isActive   = BASE_NOTE_IS_ACTIVE_DEF,

        private _startRandomizer    = new StartRandomizer,
        private _velocityRandomizer = new VelocityRandomizer,
        private _gateRandomizer     = new GateRandomizer,

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
    public setProability(proability: number): void {

        this._proability = proability

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
    public getProability(): number {

        return this._proability

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
    public getStartRandomizer(): StartRandomizer {

        return this._startRandomizer

    }
    public getVelocityRandomizer(): VelocityRandomizer {

        return this._velocityRandomizer

    }
    public getGateRandomizer(): GateRandomizer {

        return this._gateRandomizer

    }

    // abstract methods
    public abstract updateStartByRandomizer(): void;
    public abstract updateVelocityByRandomizer(): void;
    public abstract updateGateByRandomizer(): void;

}