import { BaseNote }             from '../baseNote/baseNote'
import { StartRandomizer }      from '../randomizer/startRandomizer'
import { GateRandomizer }       from '../randomizer/gateRandomizer'
import { SubNote }              from './subNote'
import { VelocityCurveType }    from './velocityCurveType'
import { VelocityCurve }        from './velocityCurve'
import LeeArray                 from '../../helper/leeArray'

export const HYBRID_NOTE_VISIBLE_SUB_NOTES_COUNT_MIN = 1
export const HYBRID_NOTE_VISIBLE_SUB_NOTES_COUNT_MAX = 32

export class HybridNote extends BaseNote {

    constructor(
        
        pitch                           : number, 
        start                           : number, 
        duration                        : number,
        private _visibleSubNoteCount    = HYBRID_NOTE_VISIBLE_SUB_NOTES_COUNT_MIN,
        private _subNotes               = Array.from({length : HYBRID_NOTE_VISIBLE_SUB_NOTES_COUNT_MAX }, () => new SubNote),
        private _startRandomizer        = new StartRandomizer,
        private _velocityCurve          = new VelocityCurve,
        private _gateRandomizer         = new GateRandomizer,
        
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
    public updateStartByStartRandomizer(): void {

        // do stuff in Max side..

    }
    public updateSubNotesVelocityByVelocityCurve(): void {

        const curveType = this._velocityCurve.getType()
        const min       = this._velocityCurve.getMin()
        const max       = this._velocityCurve.getMax()

        switch (curveType) {

            case VelocityCurveType.Up       : this.setSubNotesVelocityUp(min, max); break;
            case VelocityCurveType.Down     : this.setSubNotesVelocityDown(min, max); break;;
            case VelocityCurveType.Random   : this.setSubNotesVelocityRandom(min, max); break;;
            case VelocityCurveType.Fixed    : this.setSubNotesVelocityFixed(max); break;

        }

    }
    public updateSubNotesGateByGateRandomizer(): void {

        LeeArray.random(this._visibleSubNoteCount, this._gateRandomizer.getMin(), this._gateRandomizer.getMax(), false).forEach((randomGate, index) => this._subNotes[index].setGate(randomGate))

    }
    
    // getter
    public getVisibleSubNoteCount(): number {

        return this._visibleSubNoteCount

    }
    public getSubNotes(): SubNote[] {

        return this._subNotes

    }
    public getStartRandomizer(): StartRandomizer {

        return this._startRandomizer

    }
    public getVelocityCurve(): VelocityCurve {

        return this._velocityCurve

    }
    public getGateRandomizer(): GateRandomizer {

        return this._gateRandomizer

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