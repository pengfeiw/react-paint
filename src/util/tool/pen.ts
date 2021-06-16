import {ColorType} from "../toolType";
import Tool, {Point, getMousePos} from "./tool";
class Pen extends Tool {
    protected lineWidthBase = 1;
    protected drawColorType = ColorType.MAIN;
    private mouseDown = false;
    private previousPos: Point = {
        x: 0,
        y: 0
    };

    public onMouseDown(event: MouseEvent): void {
        if (!Tool.ctx) return;

        this.mouseDown = true;
        const mousePos = getMousePos(Tool.ctx.canvas, event);
        Tool.ctx.lineWidth = Tool.lineWidthFactor * this.lineWidthBase;
        Tool.ctx.strokeStyle = this.drawColorType === ColorType.MAIN ? Tool.mainColor : Tool.subColor;
        Tool.ctx.lineJoin = "round";
        Tool.ctx.lineCap = "round";
        Tool.ctx.beginPath();
        this.previousPos = mousePos;
    }

    public onMouseUp(): void {
        if (this.mouseDown) {
            Tool.ctx.closePath();
            this.mouseDown = false;
        }
    }

    public onMouseMove(event: MouseEvent): void {
        if (this.mouseDown) {
            const mousePos = getMousePos(Tool.ctx.canvas, event);
            Tool.ctx.moveTo(this.previousPos.x, this.previousPos.y);
            const c = 0.5 * (this.previousPos.x + mousePos.x);
            const d = 0.5 * (this.previousPos.y + mousePos.y);
            Tool.ctx.quadraticCurveTo(c, d, mousePos.x, mousePos.y);
            Tool.ctx.stroke();
            this.previousPos = mousePos;
        }
    }
}

export default Pen;
