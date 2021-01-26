export const SUBNOTE_VELOCITY_MIN = 1
export const SUBNOTE_VELOCITY_MAX = 127
export const SUBNOTE_VELOCITY_DEF = 64
export const SUBNOTE_GATE_MIN = 0
export const SUBNOTE_GATE_MAX = 1

export class SubNote {

    constructor(

        private _velocity: number = SUBNOTE_VELOCITY_DEF,
        private _gate: number = SUBNOTE_GATE_MAX,

    ){}

    // setter
    public setVelocity(velocity: number): void {

        this._velocity = velocity

    }
    public setGate(gate: number): void {

        this._gate = gate

    }

    // getter
    public getVelocity(): number {

        return this._velocity

    }
    public getGate(): number {

        return this._gate

    }

}