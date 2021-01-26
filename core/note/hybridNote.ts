import { Note } from './note'
import { SubNote } from './subNote'
import { VelocityCurve } from './velocityCurve'

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
        
    ) { super(pitch, start, duration) }

}

console.log(new HybridNote(1.5, 1, 1))