import { MidiClip } from '../clip/midiClip'

const CLIP_COUNT_DEF = 8

export class SimpleMidiClipTimeline {

    constructor(

        private _midiClips = Array.from({ length: CLIP_COUNT_DEF }, () => new MidiClip) 

    ){}

}