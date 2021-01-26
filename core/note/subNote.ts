import { NOTE_VELOCITY_DEF } from './note'

export const SUB_NOTE_GATE_DEF = 1

export class SubNote {

    constructor(

        public velocity = NOTE_VELOCITY_DEF,
        public gate     = SUB_NOTE_GATE_DEF,

    ){}

}