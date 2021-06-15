/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {createContext} from "react";
import {ShapeToolType, ToolType} from "../components/toolBar/toolType";

export const ToolTypeContext = createContext({
    type: ToolType.PEN,
    setType: (type: ToolType) => {}
});

export const ShapeTypeContext = createContext({
    type: ShapeToolType.LINE,
    setType: (type: ShapeToolType) => {}
});
