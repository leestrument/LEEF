import { MidiClip } from '../clip/midiClip'

const MIDI_CLIP_COUNT_DEF = 1

export class SimpleTimeline {

    constructor(

        private _clips = Array.from({ length: MIDI_CLIP_COUNT_DEF }, () => new MidiClip) 

    ){}


    // setter
    public addClip(): void {

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
    public getClipsColors(): string[] {

        let colors: string[] = []

        this._clips.forEach(clip => colors.push(clip.getColor()))

        return colors

    }
    public getClipsSelectedStates(): boolean[] {

        let states: boolean[] = []

        this._clips.forEach(clip => states.push(clip.isSelected()))

        return states

    }

}