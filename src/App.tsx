import React from "react";
import Toolbar from "./components/toolBar";
import Canvas from "./components/canvas";
import {ToolTypeContext, ShapeTypeContext, ShapeOutlineContext} from "./context";
import "./app.less";
import {useState} from "react";
import {ShapeOutlineType, ShapeToolType, ToolType} from "./components/toolBar/toolType";

function App(): JSX.Element {
    const [toolType, setToolType] = useState<ToolType>(ToolType.PEN);
    const [shapeType, setShapeType] = useState<ShapeToolType>(ShapeToolType.LINE);
    const [shapeOutlineType, setShapeOutlineType] = useState<ShapeOutlineType>(ShapeOutlineType.SOLID);

    return (
        <ToolTypeContext.Provider value={{type: toolType, setType: setToolType}}>
            <ShapeTypeContext.Provider value={{type: shapeType, setType: (type: ShapeToolType) => {setToolType(ToolType.SHAPE); setShapeType(type);}}}>
                <ShapeOutlineContext.Provider value={{type: shapeOutlineType, setType: setShapeOutlineType}}>
                    <div className="app">
                        <Toolbar />
                        <Canvas toolType={toolType} />
                    </div>
                </ShapeOutlineContext.Provider>
            </ShapeTypeContext.Provider>
        </ToolTypeContext.Provider>
    );
}

export default App;
