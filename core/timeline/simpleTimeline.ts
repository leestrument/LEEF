import { MidiClip } from '../clip/midiClip'

const MIDI_CLIP_COUNT_DEF = 1

export class SimpleTimeline {

    constructor(

        private _clips = Array.from({ length: MIDI_CLIP_COUNT_DEF }, () => new MidiClip) 

    ){}


    // setter
    public addClip(): void {

        this.unselectAllClips()
        this._clips.push(new MidiClip)

    }
    public selectClip(clipIndex: number): void {

        this._clips[clipIndex].select()

    }
    public removeSelectedClips(): void {}

    // getter
    public getClipCount(): number {

        return this._clips.length

    }
    public getClips(): MidiClip[] {

        return this._clips

    }
    public getClip(clipIndex: number): MidiClip {

        return this._clips[clipIndex]

    }
    
    // private 
    private unselectAllClips(): void {

        this._clips.forEach(clip => clip.deselect())

    }

}