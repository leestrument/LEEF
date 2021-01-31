import { MidiClip } from '../clip/midiClip'

const MIDI_CLIP_COUNT_DEF = 1

export class SimpleTimeline {

    constructor(

        private _clips = Array.from({ length: MIDI_CLIP_COUNT_DEF }, () => new MidiClip) 

    ){}


    // setter
    public addClip(): void {

        this._clips.push(new MidiClip)
        this.unselectOtherClips(this.getClipCount() - 1)

    }
    public selectSingleClip(clipIndex: number): void {

        this._clips[clipIndex].select()
        this.unselectOtherClips(clipIndex)

    }
    public selectAnotherClip(clipIndex: number): void {

        this._clips[clipIndex].select()

    }
    public selectAllClips(): void {

        this._clips.forEach(clip => clip.select())

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

    private unselectOtherClips(clipIndexToExclude: number) {

        this._clips.forEach((clip, clipIndex) => { 
            
            if (clipIndex !== clipIndexToExclude) clip.deselect() 
        
        })
    
    }

}