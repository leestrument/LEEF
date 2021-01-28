import { BaseNote } from '../note/baseNote/baseNote'
import LeeRandom    from '../../helper/leeRandom'

export const BASE_SEQUENCER_GRID_COUNT_DEF = 16

export class BaseSequencer {

    constructor(

        private _notes      : { [id: string] : BaseNote } = {}, 
        private _gridCount  = BASE_SEQUENCER_GRID_COUNT_DEF,

    ){}

    // setter
    public addNote(pitch: number, start: number, duration: number): void {

        const noteId = LeeRandom.id()

        this._notes[noteId] = new BaseNote(pitch, start, duration)

    }
    public addNoteByGridIndex(gridIndex:number, pitch: number): void {

        const duration  = 1 / this._gridCount
        const start     = gridIndex * duration

        this.addNote(pitch, start, duration)

    }
    public selectNoteById(noteId: string): void {

        this._notes[noteId].select()

    }
    public selectNotesByRange(rangeStart: number, rangeEnd: number): void {

        for (const noteId in this._notes) {

            const noteStart = this._notes[noteId].getStart()
            const noteEnd   = noteStart + this._notes[noteId].getDuration()
            
            if (noteStart >= rangeStart && noteEnd <= rangeEnd) this.selectNoteById(noteId)

        }

    }
    public selectAllNotes(): void {

        for (const noteId in this._notes) this.selectNoteById(noteId)

    }
    public deselectNoteById(noteId: string): void {

        this._notes[noteId].deselect()

    }
    public deselectAllNotes(): void {

        for (const noteId in this._notes) this.deselectNoteById(noteId)

    }
    public removeNoteById(noteId: string): void {

        delete this._notes[noteId]

    }
    public removeAllNotes(): void {

        for (const noteId in this._notes) {

            this.removeNoteById(noteId)

        }

    }
    public removeSelectedNotes(): void {

        for (const noteId in this._notes) {

            if (this._notes[noteId].isSelected()) this.removeNoteById(noteId)

        }        

    }
    
    
    public setGridCount(gridCount: number): void {

        this._gridCount = gridCount

    }

    // getter
    public getNote(noteId: string) {

        return this._notes[noteId]

    }
    public getGridCount(): number {

        return this._gridCount

    }

}

const s = new BaseSequencer

s.addNoteByGridIndex(2, 64)
s.addNoteByGridIndex(5, 64)

s.selectNotesByRange(0, 0.3)

console.log(s)