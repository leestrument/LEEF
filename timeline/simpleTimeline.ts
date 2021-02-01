import { MidiClip } from '../clip/midiClip'

const MIDI_CLIP_COUNT_DEF = 1

export class SimpleTimeline {

    constructor(

        private _clips = Array.from({ length: MIDI_CLIP_COUNT_DEF }, () => new MidiClip), 
        private _prevSelectedClipIndex = 0,

    ){}

    // setter
    public addClip(): void {

        this._clips.push(new MidiClip)

        const lastClipIndex = this.getClipCount() - 1

        this.unselectOtherClips(lastClipIndex)
        this._prevSelectedClipIndex = lastClipIndex

    }
    public selectSingleClip(clipIndex: number): void {

        this._clips[clipIndex].select()

        this.unselectOtherClips(clipIndex)
        this._prevSelectedClipIndex = clipIndex

    }
    public selectAnotherClip(clipIndex: number): void {

        this._clips[clipIndex].select()
        this._prevSelectedClipIndex = clipIndex

    }
    public selectMultipleClipsByRange(clipIndex: number): void {

        const startIndex = Math.min(this._prevSelectedClipIndex, clipIndex)
        const endIndex = Math.max(this._prevSelectedClipIndex, clipIndex)

        this._clips.forEach((clip, clipIndex) => {

            if (clipIndex >= startIndex && clipIndex <= endIndex) clip.select()
            else clip.deselect()

        })

    }
    public selectAllClips(): void {

        this._clips.forEach(clip => clip.select())

    }

    public removeSelectedClips(): void {}

    public setSelectedClipsColor(color: string) {

        this._clips.forEach(clip => {

            if (clip.isSelected()) clip.setColor(color)

        })

    }


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