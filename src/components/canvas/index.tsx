import React from "react";
import {Paper} from "@material-ui/core";
import "./index.less";
import {useEffect} from "react";
import {useRef} from "react";
import {ToolType} from "../../util/toolType";
import {FC} from "react";

interface CanvasProps {
    toolType: ToolType;
}

const Canvas: FC<CanvasProps> = (props) => {
    const {toolType} = props;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.height = canvas.clientHeight;
            canvas.width = canvas.clientWidth;
        }
    }, [canvasRef]);

    return (
        <div className="canvas">
            <Paper className="paper">
                <canvas ref={canvasRef} />
            </Paper>
        </div>
    );
};

export default Canvas;
