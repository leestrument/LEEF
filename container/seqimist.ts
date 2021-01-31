import { SimpleTimeline } from '../timeline/simpleTimeline'

export class SEQimist {

    constructor( 
        
        private _timeline = new SimpleTimeline
        
    ){}

    public getTimeline(): SimpleTimeline {

        return this._timeline

    }

}