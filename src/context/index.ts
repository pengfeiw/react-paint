/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {createContext} from "react";
import {ToolType} from "../components/toolBar/tool/interface";

export const ToolTypeContext = createContext({
    type: ToolType.PEN,
    setType: (type: ToolType) => {}
});
