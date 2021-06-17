import {createTextChangeRange} from "typescript";
import {ShapeToolType, ShapeOutlineType} from "../toolType";
import Tool, {Point, getMousePos} from "./tool";

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
    private borderType: ShapeOutlineType = ShapeOutlineType.SOLID;
    private saveImageData?: ImageData;
    private isMouseDown = false;
    private mouseDownPos = {x: 0, y: 0};
    private lineWidthBase = 1;

    public constructor(type: ShapeToolType) {
        super();
        this.type = type;
    }

    public setType(type: ShapeToolType) {
        this.type = type;
    }

    public setBorderType(type: ShapeOutlineType) {
        this.borderType = type;
    }

    public onMouseDown(event: MouseEvent): void {
        const mousePos = getMousePos(Tool.ctx.canvas, event);
        this.saveImageData = Tool.ctx.getImageData(0, 0, Tool.ctx.canvas.width, Tool.ctx.canvas.height);
        this.isMouseDown = true;
        this.mouseDownPos = mousePos;
    }

    public onMouseMove(event: MouseEvent): void {
        if (this.isMouseDown && this.saveImageData) {
            const ctx = Tool.ctx;
            // 清空画布
            ctx.clearRect(0, 0, Tool.ctx.canvas.width, Tool.ctx.canvas.height);
            
            // 绘制
            ctx.putImageData(this.saveImageData, 0, 0);
            const mousePos = getMousePos(Tool.ctx.canvas, event);
            const vertexs: Point[] = getVertexs(this.type, this.mouseDownPos.x, this.mouseDownPos.y, mousePos.x, mousePos.y);

            ctx.strokeStyle = Tool.mainColor;
            ctx.lineWidth = Tool.lineWidthFactor * this.lineWidthBase;
            ctx.fillStyle = Tool.subColor;

            if (this.type === ShapeToolType.CIRCLE) {
                ctx.beginPath();
                ctx.ellipse(vertexs[0].x, vertexs[0].y, Math.abs(0.5 * (mousePos.x - this.mouseDownPos.x)), Math.abs(0.5 * (mousePos.y - this.mouseDownPos.y)), 0, 0, Math.PI * 2);
                ctx.stroke();
                // ctx.fill();
            } else {
                ctx.beginPath();
                ctx.moveTo(vertexs[0].x, vertexs[0].y);
                for (let i = 1; i < vertexs.length; i++) {
                    ctx.lineTo(vertexs[i].x, vertexs[i].y);
                }
                ctx.closePath();
                ctx.fill();
                // ctx.stroke();
            }
        }
    }

    public onMouseUp(event: MouseEvent): void {
        this.isMouseDown = false;
        this.saveImageData = undefined;
    }
}

export default Shape;
