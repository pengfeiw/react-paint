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

export const rgbToHex = (r: number, g: number, b: number, a?: number) => {
    const componentToHex = (c: number) => {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const res = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    return a ? res + componentToHex(a) : res;
};

export const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: parseInt(result[4], 16)
    } : null;
};

export const getPixelColorOnCanvas = (ctx: CanvasRenderingContext2D, x: number, y: number): string => {
    const p = ctx.getImageData(x, y, 1, 1).data;

    return rgbToHex(p[0], p[1], p[2], p[3]);
};

export const updateImageData = (origin: ImageData, data: ImageData, fillData: [number, number, number, number]) => {
    for (let row = 0; row < data.height; row++) {
        for (let col = 0; col < data.width; col++) {
            const index = row * data.width * 4 + col * 4;
            const r1 = data.data[index];
            const g1 = data.data[index + 1];
            const b1 = data.data[index + 2];
            const a1 = data.data[index + 3];

            const r2 = origin.data[index];
            const g2 = origin.data[index + 1];
            const b2 = origin.data[index + 2];
            const a2 = origin.data[index + 3];

            const equalOrigin = r1 === r2 && g1 === g2 && b1 === b2 && a1 === a2;
            const equalFilling = r1 === fillData[0] && g1 === fillData[1] && b1 === fillData[2] && a1 === fillData[3];
            if (!(equalOrigin || equalFilling)) {
                data.data[index] = fillData[0];
                data.data[index + 1] = fillData[1];
                data.data[index + 2] = fillData[2];
                data.data[index + 3] = fillData[3];
            }
        }
    }

    return data;
}

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
