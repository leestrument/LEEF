import LeeRandom from '../helper/leeRandom'

export const BASE_CLIP_IS_SELECTED_DEF = true

export class BaseClip {

    constructor(

        private _color      = LeeRandom.color(),
        private _isSelected = BASE_CLIP_IS_SELECTED_DEF

    ){}

    // setter
    public setColor(color: string): void {

        this._color = color

    }
    public select(): void {

        this._isSelected = true

    }
    public deselect(): void {

        this._isSelected = false

    }

    public toggle(): void {

        this._isSelected = !this._isSelected

    }

    // getter
    public getColor(): string {

        return this._color

    }
    public isSelected(): boolean {

        return this._isSelected

    }

}