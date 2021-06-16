import React from "react";
import Toolbar from "./components/toolBar";
import Canvas from "./components/canvas";
import {ToolTypeContext, ShapeTypeContext, ShapeOutlineContext, LineWidthContext, ColorContext} from "./context";
import "./app.less";
import {useState} from "react";
import {ColorType, LineWidthType, ShapeOutlineType, ShapeToolType, ToolType} from "./util/toolType";

function App(): JSX.Element {
    const [toolType, setToolType] = useState<ToolType>(ToolType.PEN);
    const [shapeType, setShapeType] = useState<ShapeToolType>(ShapeToolType.LINE);
    const [shapeOutlineType, setShapeOutlineType] = useState<ShapeOutlineType>(ShapeOutlineType.SOLID);
    const [lineWidthType, setLineWidthType] = useState<LineWidthType>(LineWidthType.THIN);
    const [activeColorType, setActiveColorType] = useState<ColorType>(ColorType.MAIN);
    const [mainColor, setMainColor] = useState<string>("black");
    const [subColor, setSubColor] = useState<string>("white");

    return (
        <ToolTypeContext.Provider value={{type: toolType, setType: setToolType}}>
            <ShapeTypeContext.Provider value={{type: shapeType, setType: (type: ShapeToolType) => {setToolType(ToolType.SHAPE); setShapeType(type);}}}>
                <ShapeOutlineContext.Provider value={{type: shapeOutlineType, setType: setShapeOutlineType}}>
                    <LineWidthContext.Provider value={{type: lineWidthType, setType: setLineWidthType}}>
                        <ColorContext.Provider value={{
                            mainColor,
                            subColor,
                            activeColor: activeColorType,
                            setColor: (value: string) => {
                                if (activeColorType === ColorType.MAIN) {
                                    setMainColor(value);
                                } else {
                                    setSubColor(value);
                                }
                            },
                            setActiveColor: setActiveColorType
                        }}>
                            <div className="app">
                                <Toolbar />
                                <Canvas toolType={toolType} />
                            </div>
                        </ColorContext.Provider>
                    </LineWidthContext.Provider>
                </ShapeOutlineContext.Provider>
            </ShapeTypeContext.Provider>
        </ToolTypeContext.Provider>
    );
}

export default App;
