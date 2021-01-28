import { LeeRange } from '../../../helper/leeRange'

const VELOCITY_RANDOMIZER_MIN_DEF = 1
const VELOCITY_RANDOMIZER_MAX_DEF = 127

export class VelocityRandomizer extends LeeRange {

    constructor(){ super(VELOCITY_RANDOMIZER_MIN_DEF, VELOCITY_RANDOMIZER_MAX_DEF) } 

}