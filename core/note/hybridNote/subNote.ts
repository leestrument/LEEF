const SUB_NOTE_VELOCITY_DEF = 64
const SUB_NOTE_GATE_DEF     = 1

export class SubNote {

    constructor(

        private _velocity   = SUB_NOTE_VELOCITY_DEF,
        private _gate       = SUB_NOTE_GATE_DEF,

    ){}

    public setVelocity(velocity: number): void {

        this._velocity = velocity

    }
    public setGate(gate: number): void {

        this._gate = gate

    }
    public getVelocity(): number {

        return this._velocity

    }
    public getGate(): number {

        return this._gate

    }
    
}