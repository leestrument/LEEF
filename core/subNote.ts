export class SubNote {

    constructor(

        private _velocity : number,
        private _gate : number,

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