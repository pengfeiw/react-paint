import Tool, {getMousePos} from "./tool";
import Color from "color";

/**
 * 高效率的填充算法
 * 参考地址: http://www.williammalone.com/articles/html5-canvas-javascript-paint-bucket-tool/
 */
const efficentFloodFill = (ctx: CanvasRenderingContext2D, startX: number, startY: number, fillColor: [number, number, number]) => {
    const pixelStack: [number, number][] = [[startX, startY]];
    const canvasWidth = ctx.canvas.width, canvasHeight = ctx.canvas.height;
    const startPos = (startY * canvasWidth + startX) * 4;
    const colorLayer = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const startColor: [number, number, number] = [colorLayer.data[startPos], colorLayer.data[startPos + 1], colorLayer.data[startPos + 2]];
    
    if (startColor[0] === fillColor[0] && startColor[1] === fillColor[1] && startColor[2] === fillColor[2]) return;

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
const matchColor = (colorLayer: ImageData, pixelPos: number, color: [number, number, number]) => {
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
