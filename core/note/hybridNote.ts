import { Note, NOTE_VELOCITY_DEF } from './note'
import { SubNote } from './subNote'

export const HYBRID_NOTE_VISIBLE_SUB_NOTE_COUNT_MIN = 1
export const HYBRID_NOTE_VISIBLE_SUB_NOTE_COUNT_MAX = 32

export class HybridNote extends Note {

    constructor(
        
        pitch       : number, 
        start       : number, 
        duration    : number,
        private _subNotes               = Array.from({length : HYBRID_NOTE_VISIBLE_SUB_NOTE_COUNT_MAX}, () => new SubNote),
        private _visibleSubNoteCount    = HYBRID_NOTE_VISIBLE_SUB_NOTE_COUNT_MIN,
        
    ) { super(pitch, start, duration) }

}

console.log(new HybridNote(1.5, 1, 1))