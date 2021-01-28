import { BaseSequencer }    from './baseSequencer'
import { HybridNote }       from '../note/hybridNote/hybridNote'
import LeeRandom            from '../../helper/leeRandom'

export class PianoRoll extends BaseSequencer {

    constructor(){ super() }

    public moveSelectedNotesLeft(): void {}
    public moveSelectedNotesCenter(): void {}
    public moveSelectedNotesRight(): void {}

    // Implement BaseSequencer's abstract method.
    public addNote(pitch: number, start: number, duration: number): void {

        const noteId = LeeRandom.id()

        this.getNotes()[noteId] = new HybridNote(pitch, start, duration)
        
    }

}