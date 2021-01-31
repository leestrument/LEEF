import { BaseTrack }        from './baseTrack'
import { MultiSequencer }   from '../sequencer/multiSequencer'

export class MultiSequencerTrack extends BaseTrack {

    constructor(

        private _index          : number,
        private _multiSequencer = new MultiSequencer

    ){ super() }

    public getMultiSequencer(): MultiSequencer {

        return this._multiSequencer

    }

}