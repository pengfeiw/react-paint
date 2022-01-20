import {ShapeToolType} from "../toolType";
import Tool, {Point, getMousePos, getTouchPos, hexToRgb, updateImageData} from "./tool";

/**
 * 根据形状类型，获取要绘制的形状的顶点(圆形，返回圆心)
 * @param type shape type
 * @param sx x coord of start
 * @param sy y coord of start
 * @param ex x coord of end
 * @param ey y coord of end
 */
const getVertexs = (type: ShapeToolType, sx: number, sy: number, ex: number, ey: number): Point[] => {
    const points: Point[] = [];
    const mx = 0.5 * (sx + ex), my = 0.5 * (sy + ey);

    switch (type) {
        case ShapeToolType.LINE:
            points.push({x: sx, y: sy});
            points.push({x: ex, y: ey});
            break;
        case ShapeToolType.RECT:
            points.push({x: sx, y: sy});
            points.push({x: ex, y: sy});
            points.push({x: ex, y: ey});
            points.push({x: sx, y: ey});
            break;
        case ShapeToolType.CIRCLE:
            points.push({x: 0.5 * (sx + ex), y: 0.5 * (sy + ey)});
            break;
        case ShapeToolType.RHOMBUS:
            points.push({x: mx, y: sy});
            points.push({x: ex, y: my});
            points.push({x: mx, y: ey});
            points.push({x: sx, y: my});
            break;
        case ShapeToolType.TRIANGLE:
            points.push({x: mx, y: sy});
            points.push({x: sx, y: ey});
            points.push({x: ex, y: ey});
            break;
        case ShapeToolType.PENTAGON:
            points.push({x: mx, y: sy});
            points.push({x: ex, y: my});
            points.push({x: 0.5 * (mx + ex), y: ey});
            points.push({x: 0.5 * (mx + sx), y: ey});
            points.push({x: sx, y: my});
            break;
        case ShapeToolType.SEXANGLE:
            points.push({x: mx, y: sy});
            points.push({x: ex, y: 0.5 * (sy + my)});
            points.push({x: ex, y: 0.5 * (ey + my)});
            points.push({x: mx, y: ey});
            points.push({x: sx, y: 0.5 * (ey + my)});
            points.push({x: sx, y: 0.5 * (sy + my)});
            break;
        case ShapeToolType.ARROW_TOP:
            points.push({x: mx, y: sy});
            points.push({x: ex, y: my});
            points.push({x: ex - 1 / 3 * (ex - sx), y: my});
            points.push({x: ex - 1 / 3 * (ex - sx), y: ey});
            points.push({x: sx + 1 / 3 * (ex - sx), y: ey});
            points.push({x: sx + 1 / 3 * (ex - sx), y: my});
            points.push({x: sx, y: my});
            break;
        case ShapeToolType.ARROW_RIGHT:
            points.push({x: ex, y: my});
            points.push({x: mx, y: ey});
            points.push({x: mx, y: ey - 1 / 3 * (ey - sy)});
            points.push({x: sx, y: ey - 1 / 3 * (ey - sy)});
            points.push({x: sx, y: sy + 1 / 3 * (ey - sy)});
            points.push({x: mx, y: sy + 1 / 3 * (ey - sy)});
            points.push({x: mx, y: sy});
            break;
        case ShapeToolType.ARROW_DOWN:
            points.push({x: mx, y: ey});
            points.push({x: sx, y: my});
            points.push({x: sx + 1 / 3 * (ex - sx), y: my});
            points.push({x: sx + 1 / 3 * (ex - sx), y: sy});
            points.push({x: ex - 1 / 3 * (ex - sx), y: sy});
            points.push({x: ex - 1 / 3 * (ex - sx), y: my});
            points.push({x: ex, y: my});
            break;
        case ShapeToolType.ARROW_LEFT:
            points.push({x: sx, y: my});
            points.push({x: mx, y: sy});
            points.push({x: mx, y: sy + 1 / 3 * (ey - sy)});
            points.push({x: ex, y: sy + 1 / 3 * (ey - sy)});
            points.push({x: ex, y: ey - 1 / 3 * (ey - sy)});
            points.push({x: mx, y: ey - 1 / 3 * (ey - sy)});
            points.push({x: mx, y: ey});
            break;
        case ShapeToolType.FOUR_STAR:
            const offsetX = 0.125 * (ex - sx), offsetY = 0.125 * (ey - sy);
            points.push({x: mx, y: sy});
            points.push({x: mx + offsetX, y: my - offsetY});
            points.push({x: ex, y: my});
            points.push({x: mx + offsetX, y: my + offsetY});
            points.push({x: mx, y: ey});
            points.push({x: mx - offsetX, y: my + offsetY});
            points.push({x: sx, y: my});
            points.push({x: mx - offsetX, y: my - offsetY});
            break;
        default:
            break;
    }
    return points;
};

class Shape extends Tool {
    private type: ShapeToolType;
    private saveImageData?: ImageData;
    private isMouseDown = false;
    private mouseDownPos = {x: 0, y: 0};
    private lineWidthBase = 1;
    public isDashed = false;
    private dashLineStyle = [10, 10];
    public constructor(type: ShapeToolType, dashed = false) {
        super();
        this.type = type;
        this.isDashed = dashed;
    }

    public setType(type: ShapeToolType) {
        this.type = type;
    }

    private operateStart(pos: {x: number; y: number}) {
        this.saveImageData = Tool.ctx.getImageData(0, 0, Tool.ctx.canvas.width, Tool.ctx.canvas.height);
        this.isMouseDown = true;
        this.mouseDownPos = pos;

        Tool.ctx.strokeStyle = Tool.mainColor;
        Tool.ctx.lineWidth = Tool.lineWidthFactor * this.lineWidthBase;
        Tool.ctx.fillStyle = Tool.subColor;
        if (this.isDashed) {
            Tool.ctx.setLineDash(this.dashLineStyle);
        }
    }

    private operateMove(pos: {x: number; y: number}) {
        if (this.isMouseDown && this.saveImageData) {
            const ctx = Tool.ctx;
            ctx.clearRect(0, 0, Tool.ctx.canvas.width, Tool.ctx.canvas.height);

            ctx.putImageData(this.saveImageData, 0, 0);
            const vertexs: Point[] = getVertexs(this.type, this.mouseDownPos.x, this.mouseDownPos.y, pos.x, pos.y);

            if (this.type === ShapeToolType.CIRCLE) {
                ctx.beginPath();
                ctx.ellipse(vertexs[0].x, vertexs[0].y, Math.abs(0.5 * (pos.x - this.mouseDownPos.x)), Math.abs(0.5 * (pos.y - this.mouseDownPos.y)), 0, 0, Math.PI * 2);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.moveTo(vertexs[0].x, vertexs[0].y);
                for (let i = 1; i < vertexs.length; i++) {
                    ctx.lineTo(vertexs[i].x, vertexs[i].y);
                }
                ctx.closePath();
                ctx.stroke();
            }
        }
    }
    private operateEnd() {
        Tool.ctx.setLineDash([]);

        let imageData = Tool.ctx.getImageData(0, 0, Tool.ctx.canvas.width, Tool.ctx.canvas.height);

        const colorRgb = hexToRgb(Tool.mainColor);
        if (colorRgb && this.saveImageData) {
            imageData = updateImageData(this.saveImageData, imageData, [colorRgb.r, colorRgb.g, colorRgb.b, colorRgb.a]);

            Tool.ctx.putImageData(imageData, 0, 0);
        }
        
        this.isMouseDown = false;
        this.saveImageData = undefined;
    }

    public onMouseDown(event: MouseEvent): void {
        event.preventDefault();
        const mousePos = getMousePos(Tool.ctx.canvas, event);
        this.operateStart(mousePos);
    }

    public onMouseMove(event: MouseEvent): void {
        event.preventDefault();
        const mousePos = getMousePos(Tool.ctx.canvas, event);
        this.operateMove(mousePos);
    }

    public onMouseUp(event: MouseEvent): void {
        event.preventDefault();
        this.operateEnd();
    }

    public onTouchStart(event: TouchEvent): void {
        if (event.cancelable) {
            event.preventDefault();
        }
        const canvas = event.target as HTMLCanvasElement;
        const touchPos = getTouchPos(canvas, event);

        this.operateStart(touchPos);
    }

    public onTouchMove(event: TouchEvent): void {
        if (event.cancelable) {
            event.preventDefault();
        }
        const canvas = event.target as HTMLCanvasElement;
        const touchPos = getTouchPos(canvas, event);

        this.operateMove(touchPos);
    }

    public onTouchEnd(event: TouchEvent): void {
        if (event.cancelable) {
            event.preventDefault();
        }
        this.operateEnd();
    }
}

export default Shape;
