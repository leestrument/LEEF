import { MidiClip } from '../core/clip/midiClip'

const CLIP_COUNT_DEF = 8

export class SEQimist {

    constructor( 
        
        private _clips = Array.from({ length: CLIP_COUNT_DEF }, () => new MidiClip) 
        
    ){}


}