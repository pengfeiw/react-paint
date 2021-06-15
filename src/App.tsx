import React from "react";
import Toolbar from "./components/toolBar";
import Canvas from "./components/canvas";
import {ToolTypeContext, ShapeTypeContext, ShapeOutlineContext, LineWidthContext} from "./context";
import "./app.less";
import {useState} from "react";
import {LineWidthType, ShapeOutlineType, ShapeToolType, ToolType} from "./components/toolBar/toolType";

function App(): JSX.Element {
    const [toolType, setToolType] = useState<ToolType>(ToolType.PEN);
    const [shapeType, setShapeType] = useState<ShapeToolType>(ShapeToolType.LINE);
    const [shapeOutlineType, setShapeOutlineType] = useState<ShapeOutlineType>(ShapeOutlineType.SOLID);
    const [lineWidthType, setLineWidthType] = useState<LineWidthType>(LineWidthType.THIN);

    return (
        <ToolTypeContext.Provider value={{type: toolType, setType: setToolType}}>
            <ShapeTypeContext.Provider value={{type: shapeType, setType: (type: ShapeToolType) => {setToolType(ToolType.SHAPE); setShapeType(type);}}}>
                <ShapeOutlineContext.Provider value={{type: shapeOutlineType, setType: setShapeOutlineType}}>
                    <LineWidthContext.Provider value={{type: lineWidthType, setType: setLineWidthType}}>
                        <div className="app">
                            <Toolbar />
                            <Canvas toolType={toolType} />
                        </div>
                    </LineWidthContext.Provider>
                </ShapeOutlineContext.Provider>
            </ShapeTypeContext.Provider>
        </ToolTypeContext.Provider>
    );
}

export default App;
