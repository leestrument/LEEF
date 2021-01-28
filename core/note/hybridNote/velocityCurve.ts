import { LeeRange } from '../../../helper/leeRange'
import { VelocityCurveType } from './velocityCurveType'

export const VELOCITY_CURVE_TYPE_DEF    = VelocityCurveType.Up
export const VELOCITY_CURVE_MIN_DEF     = 1
export const VELOCITY_CURVE_MAX_DEF     = 127

export class VelocityCurve extends LeeRange {

    constructor(

        _type = VELOCITY_CURVE_TYPE_DEF

    ){ super(VELOCITY_CURVE_MIN_DEF, VELOCITY_CURVE_MAX_DEF) }

}