import React from "react";
import Toolbar from "./components/toolBar";
import Canvas from "./components/canvas";
import {ToolTypeContext, ShapeTypeContext} from "./context";
import "./app.less";
import {useState} from "react";
import {ShapeToolType, ToolType} from "./components/toolBar/toolType";

function App(): JSX.Element {
    const [toolType, setToolType] = useState<ToolType>(ToolType.PEN);
    const [shapeType, setShapeType] = useState<ShapeToolType>(ShapeToolType.LINE);

    return (
        <ToolTypeContext.Provider value={{type: toolType, setType: setToolType}}>
            <ShapeTypeContext.Provider value={{type: shapeType, setType: setShapeType}}>
                <div className="app">
                    <Toolbar />
                    <Canvas toolType={toolType} />
                </div>
            </ShapeTypeContext.Provider>
        </ToolTypeContext.Provider>
    );
}

export default App;
