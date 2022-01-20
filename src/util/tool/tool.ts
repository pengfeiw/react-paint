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

export const getTouchPos = (canvas: HTMLCanvasElement, event: TouchEvent): Point => {
    return {
        x: event.touches[0].pageX - canvas.offsetLeft,
        y: event.touches[0].pageY - canvas.offsetTop
    }
};

const rgbToHex = (r: number, g: number, b: number, a?: number) => {
    const componentToHex = (c: number) => {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const res = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    return a ? res + componentToHex(a) : res;
};

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

export const getPixelColorOnCanvas = (ctx: CanvasRenderingContext2D, x: number, y: number): string => {
    const p = ctx.getImageData(x, y, 1, 1).data;

    return rgbToHex(p[0], p[1], p[2], p[3]);
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

    public onTouchStart(event: TouchEvent): void {
        //
    }

    public onTouchMove(event: TouchEvent): void {
        //
    }

    public onTouchEnd(event: TouchEvent): void {
        //
    }
}
