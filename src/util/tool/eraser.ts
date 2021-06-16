import Pen from "./pen";
import {ColorType} from "../toolType";

class Eraser extends Pen {
    protected lineWidthBase = 3;
    protected drawColorType = ColorType.SUB;
}

export default Eraser;
