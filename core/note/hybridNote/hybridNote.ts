import { BaseNote } from '../baseNote/baseNote'
import { SubNote } from './subNote'
import { VelocityCurve } from './velocityCurve'
import LeeArray from '../../../helper/leeArray'

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
    public getVelocityCurve(): VelocityCurve {

        return this._velocityCurve

    }

    // private setter
    private setSubNotesVelocityUp(velocityMin, velocityMax): void {

        LeeArray.up(this._visibleSubNoteCount, velocityMin, velocityMax).forEach((velocity, index) => this._subNotes[index].setVelocity(velocity))

    }
    private setSubNotesVelocityDown(velocityMin, velocityMax): void {

        LeeArray.down(this._visibleSubNoteCount, velocityMin, velocityMax).forEach((velocity, index) => this._subNotes[index].setVelocity(velocity))

    }
    private setSubNotesVelocityRandom(velocityMin, velocityMax): void {

        LeeArray.random(this._visibleSubNoteCount, velocityMin, velocityMax).forEach((velocity, index) => this._subNotes[index].setVelocity(velocity))

    }
    private setSubNotesVelocityFixed(velocityToFix: number): void {

        LeeArray.fill(this._visibleSubNoteCount, velocityToFix).forEach((velocity, index) => this._subNotes[index].setVelocity(velocity))

    }

}