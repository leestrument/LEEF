import { MidiClip } from '../clip/midiClip'

const MIDI_CLIP_COUNT_DEF = 8

export class SimpleMidiClipTimeline {

    constructor(

        private _midiClips = Array.from({ length: MIDI_CLIP_COUNT_DEF }, () => new MidiClip) 

    ){}

}