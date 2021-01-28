import { BaseNote } from '../note/baseNote/baseNote'
import LeeRandom    from '../../helper/leeRandom'

export const BASE_SEQUENCER_GRID_DEF = 16

export class BaseSequencer {

    constructor(

        private _notes  : { [id: string] : BaseNote } = {}, 
        private _grid   = BASE_SEQUENCER_GRID_DEF,

    ){}

    public addNote(pitch: number, start: number, duration: number): void {

        const noteId = LeeRandom.id()

        this._notes[noteId] = new BaseNote(pitch, start, duration)

    }

}