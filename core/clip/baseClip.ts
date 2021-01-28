export const BASE_CLIP_IS_SELECTED_DEF = false

export class BaseClip {

    constructor(

        private _color      = 'black',
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

    // getter
    public getColor(): string {

        return this._color

    }
    public isSelected(): boolean {

        return this._isSelected

    }

}