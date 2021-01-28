import { BaseTrack }        from './baseTrack'
import { MultiSequencer }   from '../sequencer/multiSequencer'

export class MultiSequencerTrack extends BaseTrack {

    constructor(

        private _multiSequencer = new MultiSequencer

    ){ super() }


}