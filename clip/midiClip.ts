import { BaseClip } from './baseClip'
import { MultiSequencerTrack } from '../track/multiSequencerTrack'

export class MidiClip extends BaseClip {

    constructor(

        private _visibleTrackCount  = 16,
        private _tracks             = Array.from({length : 64}, (e, i) => new MultiSequencerTrack(i))

    ){ super() }

    // setter
    public setVisibleTrackCount(trackCount: number): void {

        this._visibleTrackCount = trackCount

    }

    // getter
    public getVisibleTrackCount(): number {

        return this._visibleTrackCount

    }
    public getTracks(): MultiSequencerTrack[] {

        return this._tracks

    }
    public getTrack(trackIndex: number): MultiSequencerTrack {

        return this._tracks[trackIndex]

    }

}