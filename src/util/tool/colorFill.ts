import Tool, {getPixelColorOnCanvas, getMousePos, Point} from "./tool";
import Color from "color";

/**
 * 遍历上下左右四个像素的颜色，如果与区域颜色（areaColor）相同，则赋予其主色并继续遍历，否则停止此处像素点的遍历。
 * 该算法虽然正确，但是会导致栈溢出错误，不建议（虽然可以通过Error.stackTraceLimit = Infinity, 修改栈大小，但是还是会死机。
 * @param x x coord of mouse down
 * @param y y coord of mouse down
 * @param areaColor the color in mouse down position
 * @param fillColor the color used to fill
 */
const fillInSpecificPos2 = (canvas: HTMLCanvasElement, x: number, y: number, areaColor: string, fillColor: string) => {
    console.log("11111");
    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return;
    const areaColorHex = new Color(areaColor).hex().toLowerCase();
    const fillColorHex = new Color(fillColor).hex().toLowerCase();
    if (areaColorHex === fillColorHex) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const curPixelColor = getPixelColorOnCanvas(ctx, x, y).toLowerCase();
    if (curPixelColor !== areaColorHex) {
        return;
    }
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, 1, 1);

    fillInSpecificPos2(canvas, x - 1, y, areaColor, fillColor); // left pixel
    fillInSpecificPos2(canvas, x, y + 1, areaColor, fillColor); // down pixel
    fillInSpecificPos2(canvas, x + 1, y, areaColor, fillColor); // right pixel
    fillInSpecificPos2(canvas, x, y - 1, areaColor, fillColor); // top pixel
};

const fillInSpecificPos = (canvas: HTMLCanvasElement, x: number, y: number, areaColor: string, fillColor: string) => {
    const areaColorHex = new Color(areaColor).hex().toLowerCase();
    const fillColorHex = new Color(fillColor).hex().toLowerCase();
    if (areaColorHex === fillColorHex) return;

    const queue: Point[] = [];
    queue.push({x, y});
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = fillColor;

    while (queue.length > 0) {
        const coord = queue.splice(0, 1)[0]; // 移除第一个，并且返回

        if (coord.x < 0 || coord.y < 0 || coord.x >= canvas.width || coord.y >= canvas.height) continue;

        const curColor = getPixelColorOnCanvas(ctx, coord.x, coord.y).toLowerCase();

        // 填充当前像素
        if (curColor !== areaColorHex) continue;
        ctx.fillRect(coord.x, coord.y, 1, 1);

        queue.push({x: coord.x - 1, y: coord.y});
        queue.push({x: coord.x + 1, y: coord.y});
        queue.push({x: coord.x, y: coord.y - 1});
        queue.push({x: coord.x, y: coord.y + 1});
    }
};

const floodFill = (ctx: CanvasRenderingContext2D, x: number, y: number, areaColor: string, fillColor: string) => {
    const areaColorHex = new Color(areaColor).hex().toLowerCase();
    const fillColorHex = new Color(fillColor).hex().toLowerCase();
    if (areaColorHex === fillColorHex) return;

    const queue: Point[] = [];
    queue.push({x, y});
    if (!ctx) return;
    // ctx.fillStyle = fillColor;

    while (queue.length > 0) {
        const coord = queue.splice(0, 1)[0]; // 移除第一个，并且返回

        if (coord.x < 0 || coord.y < 0 || coord.x >= ctx.canvas.width || coord.y >= ctx.canvas.height) continue;

        const curColor = getPixelColorOnCanvas(ctx, coord.x, coord.y).toLowerCase();

        // // 填充当前像素
        if (curColor !== areaColorHex) continue;
        // ctx.fillRect(coord.x, coord.y, 1, 1);
        const color = new Color(fillColor);
        const imageData = new ImageData(new Uint8ClampedArray([color.red(), color.green(), color.blue(), 255]), 1, 1);
        ctx.putImageData(imageData, coord.x, coord.y);

        queue.push({x: coord.x - 1, y: coord.y});
        queue.push({x: coord.x + 1, y: coord.y});
        queue.push({x: coord.x, y: coord.y - 1});
        queue.push({x: coord.x, y: coord.y + 1});
    }
}

const scanLineFill = (ctx: CanvasRenderingContext2D, x: number, y: number, areaColor: string, fillColor: string) => {
    const areaColorHex = new Color(areaColor).hex().toLowerCase();
    const fillColorHex = new Color(fillColor).hex().toLowerCase();
    if (areaColorHex === fillColorHex) return;

    if (x < 0 || y < 0 || x >= ctx.canvas.width || y >= ctx.canvas.height) return;
    let lx = x, rx = x;
    while (lx > 0) {
        const curColor = getPixelColorOnCanvas(ctx, lx, y);
        if (curColor !== areaColorHex) break;
        lx--;
    }
    while (rx < ctx.canvas.width) {
        const curColor = getPixelColorOnCanvas(ctx, rx, y);
        if (curColor !== areaColorHex) break;
        rx++;
    }

    for (let i = lx + 1; i < rx; i++) {
        ctx.fillStyle = fillColor;
        ctx.fillRect(i, y, 1, 1);
    }

    const segmentsUp: number[] = [];

    const segmentsDn: number[] = [];

    // 上方
    let previousIsArea = false;
    for (let i = lx + 1; i < rx; i++) {
        const curColor = getPixelColorOnCanvas(ctx, i, y - 1);
        if ((curColor !== areaColorHex || i === rx - 1) && previousIsArea) {
            segmentsUp.push(i - 1);
            previousIsArea = false;
        } else if (curColor === areaColorHex) {
            previousIsArea = true;
        }
    }

    for (let i = 0; i < segmentsUp.length; i++) {
        scanLineFill(ctx, segmentsUp[i], y - 1, areaColor, fillColor);
    }

    previousIsArea = false;
    for (let i = lx + 1; i < rx; i++) {
        const curColor = getPixelColorOnCanvas(ctx, i, y + 1);
        if ((curColor !== areaColorHex || i === rx - 1) && previousIsArea) {
            segmentsDn.push(i - 1);
            previousIsArea = false;
        } else if (curColor === areaColorHex) {
            previousIsArea = true;
        }
    }

    for (let i = 0; i < segmentsDn.length; i++) {
        scanLineFill(ctx, segmentsDn[i], y + 1, areaColor, fillColor);
    }
};

/**
 * 根据scanLineFill函数修改成非递归形式，但是这个函数有问题，暂时不知道为什么。
 */
const scanLineFill2 = (ctx: CanvasRenderingContext2D, x: number, y: number, areaColor: string, fillColor: string) => {
    const areaColorHex = new Color(areaColor).hex().toLowerCase();
    const fillColorHex = new Color(fillColor).hex().toLowerCase();
    if (areaColorHex === fillColorHex) return;


    ctx.fillStyle = fillColor;
    const queue: Point[] = [];
    queue.push({x, y});
    while (queue.length > 0) {
        const coord = queue.splice(0, 1)[0];
        if (coord.x < 0 || coord.y < 0 || coord.x >= ctx.canvas.width || coord.y >= ctx.canvas.height) return;
        let lx = coord.x, rx = coord.x;

        while (lx > 0) {
            const curColor = getPixelColorOnCanvas(ctx, lx, coord.y);
            if (curColor !== areaColorHex) break;
            ctx.fillRect(lx, coord.y, 1, 1);
            lx--;
        }
        while (rx < ctx.canvas.width) {
            const curColor = getPixelColorOnCanvas(ctx, rx, coord.y);
            if (curColor !== areaColorHex) break;
            ctx.fillRect(rx, coord.y, 1, 1);
            rx++;
        }
        // 上方
        let previousIsArea = false;
        for (let i = lx + 1; i < rx; i++) {
            const curColor = getPixelColorOnCanvas(ctx, i, coord.y - 1);
            if ((curColor !== areaColorHex || i === rx - 1) && previousIsArea) {
                queue.push({x: i - 1, y: coord.y - 1});
                previousIsArea = false;
            } else if (curColor === areaColorHex) {
                previousIsArea = true;
            }
        }

        // 下方
        previousIsArea = false;
        for (let i = lx + 1; i < rx; i++) {
            const curColor = getPixelColorOnCanvas(ctx, i, coord.y + 1);
            if ((curColor !== areaColorHex || i === rx - 1) && previousIsArea) {
                queue.push({x: i - 1, y: coord.y + 1});
                previousIsArea = false;
            } else if (curColor === areaColorHex) {
                previousIsArea = true;
            }
        }
    }
};

/**
 * 高效率的填充算法
 * 参考地址: http://www.williammalone.com/articles/html5-canvas-javascript-paint-bucket-tool/
 */
const efficentFloodFill = (ctx: CanvasRenderingContext2D, startX: number, startY: number, fillColor: [number, number, number]) => {
    const pixelStack: [number, number][] = [[startX, startY]];
    const canvasWidth = ctx.canvas.width, canvasHeight = ctx.canvas.height;
    const startPos = (startY * canvasWidth + startX) * 4;
    const colorLayer = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const startColor: [number, number, number, number] = [colorLayer.data[startPos], colorLayer.data[startPos + 1], colorLayer.data[startPos + 2], colorLayer.data[startPos + 3]];
    
    while (pixelStack.length > 0) {
        const newPos = pixelStack.pop() as [number, number];
        
        const x = newPos[0];
        let y = newPos[1];
        
        let pixelPos = (y * canvasWidth + x) * 4;
        while (y-- >= 0 && matchColor(colorLayer, pixelPos, startColor)) {
            pixelPos -= canvasWidth * 4;
        }
        pixelPos += canvasWidth * 4;
        ++y;

        let reachLeft = false, reachRight = false;
        while (y++ < canvasHeight - 1 && matchColor(colorLayer, pixelPos, startColor)) {
            fillPixel(colorLayer, pixelPos, fillColor);
            if (x > 0) {
                if (matchColor(colorLayer, pixelPos - 4, startColor)) {
                    if (!reachLeft) {
                        pixelStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                } else if (reachLeft) {
                    reachLeft = false;
                }
            }

            if (x < canvasWidth - 1) {
                if (matchColor(colorLayer, pixelPos + 4, startColor)) {
                    if (!reachRight) {
                        pixelStack.push([x + 1, y]);
                        reachRight = true;
                    }
                } else if (reachRight) {
                    reachRight = false;
                }
            }

            pixelPos += canvasWidth * 4;
        }
    }

    ctx.putImageData(colorLayer, 0, 0);
};

/**
 * 判断两个位置的像素颜色是否相同
 */
const matchColor = (colorLayer: ImageData, pixelPos: number, color: [number, number, number, number]) => {
    const r = colorLayer.data[pixelPos];
    const g = colorLayer.data[pixelPos + 1];
    const b = colorLayer.data[pixelPos + 2];

    return (r === color[0] && g === color[1] && b === color[2]);
};

/**
 * 修改指定ImageData的指定位置像素颜色
 */
const fillPixel = (colorLayer: ImageData, pixelPos: number, color: [number, number, number]) => {
    colorLayer.data[pixelPos] = color[0];
    colorLayer.data[pixelPos + 1] = color[1];
    colorLayer.data[pixelPos + 2] = color[2];

    return colorLayer;
}

class ColorFill extends Tool {
    public onMouseDown(event: MouseEvent): void {
        const mousepos = getMousePos(Tool.ctx.canvas, event);
        const color = new Color(Tool.mainColor);
        efficentFloodFill(Tool.ctx, mousepos.x, mousepos.y, [color.red(), color.green(), color.blue()]);
    }
}

export default ColorFill;
