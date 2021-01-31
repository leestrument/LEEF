import { PianoRoll }        from './pianoRoll'
import { StepSequencer }    from './stepSequencer'

export enum SequencerType {

    PianoRoll,
    StepSequencer,

}

const MULTI_SEQUENCER_TYPE_DEF = SequencerType.PianoRoll

export class MultiSequencer {

    constructor(

        private _type               = MULTI_SEQUENCER_TYPE_DEF,
        private _pianoRoll          = new PianoRoll,
        private _stepSequencer      = new StepSequencer

    ){}

    // setter
    public setType(type: SequencerType): void {

        this._type = type

    }

    // getter 
    public getType(): SequencerType {

        return this._type

    }
    public getPianoRoll(): PianoRoll {

        return this._pianoRoll

    }
    public getStepSequencer(): StepSequencer {

        return this._stepSequencer

    }
 
}