import { BaseNote } from '../baseNote/baseNote'
import { SubNote }  from './subNote'
import { VelocityCurve } from './velocityCurve'

export const HYBRID_NOTE_VISIBLE_SUB_NOTES_COUNT_MIN = 1
export const HYBRID_NOTE_VISIBLE_SUB_NOTES_COUNT_MAX = 32

export class HyBridNote extends BaseNote {

    constructor(
        
        pitch                           : number, 
        start                           : number, 
        duration                        : number,
        private _visibleSubNoteCount    = HYBRID_NOTE_VISIBLE_SUB_NOTES_COUNT_MIN,
        private _velocityCurve          = new VelocityCurve,
        private _subNotes               = Array.from({length : HYBRID_NOTE_VISIBLE_SUB_NOTES_COUNT_MAX }, () => new SubNote),
        
    ){ super(pitch, start, duration) }


    // setter
    public setVisibleSubNoteCount(subNoteCount: number): void {

        this._visibleSubNoteCount = subNoteCount

    }
    public increaseVisibleSubNoteCount(): void {

        if (this._visibleSubNoteCount < HYBRID_NOTE_VISIBLE_SUB_NOTES_COUNT_MAX) this._visibleSubNoteCount++
        
    }
    public decreaseVisibleSubNoteCount(): void {

        if (this._visibleSubNoteCount > HYBRID_NOTE_VISIBLE_SUB_NOTES_COUNT_MIN) this._visibleSubNoteCount--

    }

    // getter
    public getVisibleSubNoteCount(): number {

        return this._visibleSubNoteCount

    }

    // implement abstract methods of BaseNote
    public updateStartByRandomizer(): void {}
    public updateGateByRandomizer(): void {}


}