import LeeRange from '../../helper/leeRange'
import { NOTE_VELOCITY_MIN, NOTE_VELOCITY_MAX} from './note'

export enum VelocityCurveType {

    Up,
    Down,
    Random,
    Fixed    

}

const VELOCITY_CURVE_TYPE_DEF = VelocityCurveType.Up

export class VelocityCurve extends LeeRange {

    constructor(

        private _type = VELOCITY_CURVE_TYPE_DEF

    ){ super(NOTE_VELOCITY_MIN, NOTE_VELOCITY_MAX) }

    public setType(type: VelocityCurveType): void {

        this._type = type

    }
    public getType(): VelocityCurveType {

        return this._type

    }
 
}