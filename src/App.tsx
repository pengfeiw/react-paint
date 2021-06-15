import React from "react";
import Toolbar from "./components/toolBar";
import Canvas from "./components/canvas";
import {ToolTypeContext} from "./context";
import "./app.less";
import {useState} from "react";
import {ToolType} from "./components/toolBar/tool/interface";

function App(): JSX.Element {
    const [toolType, setToolType] = useState<ToolType>(ToolType.PEN);

    return (
        <ToolTypeContext.Provider value={{
            type: toolType,
            setType: setToolType
        }}>
            <div className="app">
                <Toolbar />
                <Canvas toolType={toolType} />
            </div>
        </ToolTypeContext.Provider>
    );
}

export default App;
