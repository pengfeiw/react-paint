import Tool, {getPixelColorOnCanvas, getMousePos} from "./tool";

class ColorExtract extends Tool {
    private setColor: (color: string) => void;

    /**
     * @param setColor 设置提取后的颜色
     */
    public constructor(setColor: (color: string) => void) {
        super();
        this.setColor = setColor;
    }
    public onMouseDown(event: MouseEvent): void {
        const mousepos = getMousePos(Tool.ctx.canvas, event);
        const color = getPixelColorOnCanvas(Tool.ctx, mousepos.x, mousepos.y);
        this.setColor(color);
    }
}

export default ColorExtract;
