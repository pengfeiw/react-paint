export default class Tool {
    public canvas: HTMLCanvasElement;
    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }
    public init(): void {
        this.canvas.addEventListener("mousedown", this.mouseDown);
        this.canvas.addEventListener("mousemove", this.mouseMove);
        this.canvas.addEventListener("mouseup", this.mouseUp);
    }
    public dispose(): void {
        this.canvas.removeEventListener("mousedown", this.mouseDown);
        this.canvas.removeEventListener("mousemove", this.mouseMove);
        this.canvas.removeEventListener("mouseup", this.mouseUp);
    }
    public mouseDown(): void {
        // do nothing
    }
    public mouseMove(): void {
        // do nothing
    }

    public mouseUp(): void {
        // do nothing
    }
}

export class Pen extends Tool {

}

export class ColorFill extends Tool {
    
}

export class Text extends Tool {

}

export class ColorExtract extends Tool {

}

export class Eraser extends Tool {

}

export class Magnifying extends Tool {

}
