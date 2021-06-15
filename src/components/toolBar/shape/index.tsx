import React from "react";
import {ShapeTypeContext} from "../../../context";
import {ShapeToolType} from "../toolType";
import "./index.less";

const shapes = [
    {
        type: ShapeToolType.LINE,
        img: "./icon/shape_line.svg",
    },
    {
        type: ShapeToolType.RECT,
        img: "./icon/shape_rect.svg",
    },
    {
        type: ShapeToolType.CIRCLE,
        img: "./icon/shape_circle.svg",
    },
    {
        type: ShapeToolType.RHOMBUS,
        img: "./icon/shape_rhombus.svg",
    },
    {
        type: ShapeToolType.TRIANGLE,
        img: "./icon/shape_triangle.svg",
    },
    {
        type: ShapeToolType.PENTAGON,
        img: "./icon/shape_pentagon.svg",
    },
    {
        type: ShapeToolType.SEXANGLE,
        img: "./icon/shape_sexangle.svg",
    },
    {
        type: ShapeToolType.ARROW_TOP,
        img: "./icon/shape_arrowtop.svg",
    },
    {
        type: ShapeToolType.ARROW_RIGHT,
        img: "./icon/shape_arrowright.svg",
    },
    {
        type: ShapeToolType.ARROW_DOWN,
        img: "./icon/shape_arrowdown.svg",
    },
    {
        type: ShapeToolType.ARROW_LEFT,
        img: "./icon/shape_arrowleft.svg",
    },
    {
        type: ShapeToolType.FOUR_STAR,
        img: "./icon/shape_fourstar.svg"
    },
    {
        type: ShapeToolType.FIVE_STAR,
        img: "./icon/shape_fivestar.svg"
    }
];

interface ShapePanelProps {
    className?: string;
}

const ShapePanel: React.FC<ShapePanelProps> = (props) => {
    const {className} = props;

    return (
        <div className={className ? `shapepanel ${className}` : "shapepanel"}>
            <div className="shape-content">
                <ShapeTypeContext.Consumer>
                    {
                        ({type, setType}) => shapes.map((shape) => (
                            <img src={shape.img} key={shape.img} className="shape-item" />
                        ))
                    }
                </ShapeTypeContext.Consumer>
            </div>
            <div className="title">形状</div>
        </div>
    );
};

export default ShapePanel;
