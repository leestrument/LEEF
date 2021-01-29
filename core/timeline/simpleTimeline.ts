import { MidiClip } from '../clip/midiClip'

const MIDI_CLIP_COUNT_DEF = 8

export class SimpleTimeline {

    constructor(

        private _clips = Array.from({ length: MIDI_CLIP_COUNT_DEF }, () => new MidiClip) 

    ){}

    public addClip(): void {

        this._clips.push(new MidiClip)

    }
    public selectClip(clipIndex: number): void {

        this._clips[clipIndex].select()

    }
    public removeSelectedClips(): void {}


}