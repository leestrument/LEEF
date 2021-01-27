import { Note, NOTE_VELOCITY_MIN, NOTE_VELOCITY_MAX } from './note'
import { SubNote } from './subNote'
import { VelocityCurve, VelocityCurveType } from './velocityCurve'
import { HybridNoteRandomizers } from './hybridNoteRandomizers'
import LeeArray from '../../helper/leeArray'

export const HYBRID_NOTE_VISIBLE_SUB_NOTE_COUNT_MIN = 1
export const HYBRID_NOTE_VISIBLE_SUB_NOTE_COUNT_MAX = 32

export class HybridNote extends Note {

    constructor(
        
        pitch: number, 
        start: number, 
        duration: number,
        private _subNotes = Array.from({length : HYBRID_NOTE_VISIBLE_SUB_NOTE_COUNT_MAX}, () => new SubNote),
        private _visibleSubNoteCount = HYBRID_NOTE_VISIBLE_SUB_NOTE_COUNT_MIN,
        private _velocityCurve = new VelocityCurve,
        private _randomizers = new HybridNoteRandomizers,
        
    ) { super(pitch, start, duration) }

    // setter
    public setVisibleSubNoteCount(noteCount: number): void {

        this._visibleSubNoteCount = noteCount
        
        if (this._velocityCurve.isActive()) this.updateSubNotesVelocityByVelocityCurve()

    }
    public increaseVisibleSubNoteCount(): void {

        if (this._visibleSubNoteCount < HYBRID_NOTE_VISIBLE_SUB_NOTE_COUNT_MAX) {

            this._visibleSubNoteCount++

            if (this._velocityCurve.isActive()) this.updateSubNotesVelocityByVelocityCurve()

        } 

    }
    public decreaseVisibleSubNoteCount(): void {

        if (this._visibleSubNoteCount > HYBRID_NOTE_VISIBLE_SUB_NOTE_COUNT_MIN) {

            this._visibleSubNoteCount--

            if (this._velocityCurve.isActive()) this.updateSubNotesVelocityByVelocityCurve()

        }

    }
    public activeVelocityCurve(): void { 
        
        this._velocityCurve.active()
        this.updateSubNotesVelocityByVelocityCurve()
    
    }
    public deactiveVelocityCurve(): void { 
        
        this._velocityCurve.deactive() 
    
    }
    public setVelocityCurveType(curveType: VelocityCurveType): void {

        this._velocityCurve.setType(curveType)
        this.updateSubNotesVelocityByVelocityCurve()
        
    }
    public setVelocityCurveMin(curveMin: number): void {

        this._velocityCurve.setMin(curveMin)
        this.updateSubNotesVelocityByVelocityCurve()

    }
    public setVelocityCurveMax(curveMax: number): void {

        this._velocityCurve.setMax(curveMax)
        this.updateSubNotesVelocityByVelocityCurve()

    }

    // getter
    public getVisibleSubNoteCount(): number {

        return this._visibleSubNoteCount

    }
    public getVelocityCurve(): VelocityCurve {

        return this._velocityCurve

    }
    public getSubNotes(): SubNote[] {

        return this._subNotes

    }
    // private setter
    private setSubNotesVelocityUp(velocityMin = NOTE_VELOCITY_MIN, velocityMax = NOTE_VELOCITY_MAX): void {

        LeeArray.up(this._visibleSubNoteCount, velocityMin, velocityMax).forEach((velocity, index) => this._subNotes[index].velocity = velocity)

    }
    private setSubNotesVelocityDown(velocityMin = NOTE_VELOCITY_MIN, velocityMax = NOTE_VELOCITY_MAX): void {

        LeeArray.down(this._visibleSubNoteCount, velocityMin, velocityMax).forEach((velocity, index) => this._subNotes[index].velocity = velocity)

    }
    private setSubNotesVelocityRandom(velocityMin = NOTE_VELOCITY_MIN, velocityMax = NOTE_VELOCITY_MAX): void {

        LeeArray.random(this._visibleSubNoteCount, velocityMin, velocityMax).forEach((velocity, index) => this._subNotes[index].velocity = velocity)

    }
    private setSubNotesVelocityFixed(velocityToFix: number): void {

        LeeArray.fill(this._visibleSubNoteCount, velocityToFix).forEach((velocity, index) => this._subNotes[index].velocity = velocity)

    }
    private updateSubNotesVelocityByVelocityCurve(): void {

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

}

// This is written in M1!