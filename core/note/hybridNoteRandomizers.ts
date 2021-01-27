import LeeRange from '../../helper/leeRange'

export class HybridNoteRandomizers {

    constructor(

        private _startRandomizer    = new LeeRange,
        private _gateRandomizer     = new LeeRange,
        private _velocityRandomizer = new LeeRange,

    ){}

}