import Tool, {getPixelColorOnCanvas, getMousePos, getTouchPos} from "./tool";

class ColorExtract extends Tool {
    private setColor: (color: string) => void;

    /**
     * @param setColor 设置提取后的颜色
     */
    public constructor(setColor: (color: string) => void) {
        super();
        this.setColor = setColor;
    }

    private operateStart(pos: {x: number; y: number}) {
        const color = getPixelColorOnCanvas(Tool.ctx, pos.x, pos.y);
        this.setColor(color);
    }
    public onMouseDown(event: MouseEvent): void {
        event.preventDefault();
        const mousepos = getMousePos(Tool.ctx.canvas, event);
        this.operateStart(mousepos);
    }

    public onTouchStart(event: TouchEvent): void {
        if (event.cancelable) {
            event.preventDefault();
        }
        const canvas = event.target as HTMLCanvasElement;
        const touchPos = getTouchPos(canvas, event);

        this.operateStart(touchPos);
    }
}

export default ColorExtract;
