/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Point {
    x: number;
    y: number;
}

export const getMousePos = (canvas: HTMLCanvasElement, event: MouseEvent): Point => {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
};

const rgbToHex = (r: number, g: number, b: number) => {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
};

export const getPixelColorOnCanvas = (ctx: CanvasRenderingContext2D, x: number, y: number): string => {
    const p = ctx.getImageData(x, y, 1, 1).data;

    const hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    return hex;
};

export default class Tool {
    /**
     * 线宽
     */
    public static lineWidthFactor = 1;
    /**
     * 主色
     */
    public static mainColor = "black";
    /**
     * 副色
     */
    public static subColor = "white";

    public static ctx: CanvasRenderingContext2D;

    public onMouseDown(event: MouseEvent): void {
        //
    }

    public onMouseMove(event: MouseEvent): void {
        //
    }

    public onMouseUp(event: MouseEvent): void {
        //
    }
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
