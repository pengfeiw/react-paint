/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {createContext} from "react";
import {LineWidthType, ShapeOutlineType, ShapeToolType, ToolType} from "../components/toolBar/toolType";

export const ToolTypeContext = createContext({
    type: ToolType.PEN,
    setType: (type: ToolType) => {}
});

export const ShapeTypeContext = createContext({
    type: ShapeToolType.LINE,
    setType: (type: ShapeToolType) => {}
});

export const ShapeOutlineContext = createContext({
    type: ShapeOutlineType.SOLID,
    setType: (type: ShapeOutlineType) => {}
});

export const LineWidthContext = createContext({
    type: LineWidthType.THIN,
    setType: (type: LineWidthType) => {}
});
