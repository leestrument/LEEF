import { PianoRoll }        from './pianoRoll'
import { StepSequencer }    from './stepSequencer'

export class MultiSequencer {

    constructor(

        private _selectedSequencer  : 'Piano Roll' | 'Step Sequencer' = 'Piano Roll',
        private _pianoRoll          = new PianoRoll,
        private _stepSequencer      = new StepSequencer

    ){}

}