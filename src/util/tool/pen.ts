import {ColorType} from "../toolType";
import Tool, {Point, getMousePos, getTouchPos} from "./tool";
class Pen extends Tool {
    protected lineWidthBase = 1;
    protected drawColorType = ColorType.MAIN;
    private mouseDown = false;
    private previousPos: Point = {
        x: 0,
        y: 0
    };
    private operateStart(pos: Point) {
        if (!Tool.ctx) return;

        this.mouseDown = true;
        Tool.ctx.lineWidth = Tool.lineWidthFactor * this.lineWidthBase;
        Tool.ctx.strokeStyle = this.drawColorType === ColorType.MAIN ? Tool.mainColor : Tool.subColor;
        Tool.ctx.lineJoin = "round";
        Tool.ctx.lineCap = "round";
        Tool.ctx.beginPath();
        this.previousPos = pos;
    }
    private operateMove(pos: Point) {
        if (this.mouseDown) {
            Tool.ctx.moveTo(this.previousPos.x, this.previousPos.y);
            const c = 0.5 * (this.previousPos.x + pos.x);
            const d = 0.5 * (this.previousPos.y + pos.y);
            Tool.ctx.quadraticCurveTo(c, d, pos.x, pos.y);
            Tool.ctx.stroke();
            this.previousPos = pos;
        }
    }
    private operateEnd() {
        if (this.mouseDown) {
            Tool.ctx.closePath();
            this.mouseDown = false;
        }
    }
    public onMouseDown(event: MouseEvent): void {
        event.preventDefault();

        const mousePos = getMousePos(Tool.ctx.canvas, event);

        this.operateStart(mousePos);
    }

    public onMouseUp(event: MouseEvent): void {
        event.preventDefault();
        this.operateEnd();
    }

    public onMouseMove(event: MouseEvent): void {
        event.preventDefault();
        const mousePos = getMousePos(Tool.ctx.canvas, event);
        this.operateMove(mousePos);
    }

    public onTouchStart(event: TouchEvent): void {
        event.preventDefault();
        const touchPos = getTouchPos(event.target as HTMLCanvasElement, event);
        this.operateStart(touchPos);
    }

    public onTouchMove(event: TouchEvent): void {
        event.preventDefault();
        const touchPos = getTouchPos(event.target as HTMLCanvasElement, event);
        this.operateMove(touchPos);
    }

    public onTouchEnd(event: TouchEvent): void {
        event.preventDefault();
        this.operateEnd();
    }
}

export default Pen;
