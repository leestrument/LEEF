import { BaseNote } from '../baseNote/baseNote'
import { SubNote }  from './subNote'

export const HYBRID_NOTE_SUB_NOTES_COUNT_MIN = 1
export const HYBRID_NOTE_SUB_NOTES_COUNT_MAX = 32

export class HyBridNote extends BaseNote {

    constructor(
        
        pitch                           : number, 
        start                           : number, 
        duration                        : number,
        private _subNotes               = Array.from({length : HYBRID_NOTE_SUB_NOTES_COUNT_MAX}, () => new SubNote),
        private _visibleSubNoteCount    = HYBRID_NOTE_SUB_NOTES_COUNT_MIN
        
    ){ super(pitch, start, duration) }

    public updateStartByRandomizer(): void {}
    public updateVelocityByRandomizer(): void {}
    public updateGateByRandomizer(): void {}


}