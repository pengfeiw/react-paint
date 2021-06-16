import React from "react";
import {useContext} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {ShapeOutlineContext, ShapeTypeContext, ToolTypeContext} from "../../../context";
import {ShapeOutlineType, ShapeToolType, ToolType} from "../toolType";
import "./index.less";

const selectedShapeClass = "selected-shape";

const shapes = [
    {
        type: ShapeToolType.LINE,
        img: "./icon/shape_line.svg",
        title: "直线"
    },
    {
        type: ShapeToolType.RECT,
        img: "./icon/shape_rect.svg",
        title: "矩形"
    },
    {
        type: ShapeToolType.CIRCLE,
        img: "./icon/shape_circle.svg",
        title: "圆（椭圆）"
    },
    {
        type: ShapeToolType.RHOMBUS,
        img: "./icon/shape_rhombus.svg",
        title: "菱形"
    },
    {
        type: ShapeToolType.TRIANGLE,
        img: "./icon/shape_triangle.svg",
        title: "三角形"
    },
    {
        type: ShapeToolType.PENTAGON,
        img: "./icon/shape_pentagon.svg",
        title: "五边形"
    },
    {
        type: ShapeToolType.SEXANGLE,
        img: "./icon/shape_sexangle.svg",
        title: "六边形"
    },
    {
        type: ShapeToolType.ARROW_TOP,
        img: "./icon/shape_arrowtop.svg",
        title: "上箭头"
    },
    {
        type: ShapeToolType.ARROW_RIGHT,
        img: "./icon/shape_arrowright.svg",
        title: "右箭头"
    },
    {
        type: ShapeToolType.ARROW_DOWN,
        img: "./icon/shape_arrowdown.svg",
        title: "下箭头"
    },
    {
        type: ShapeToolType.ARROW_LEFT,
        img: "./icon/shape_arrowleft.svg",
        title: "左箭头"
    },
    {
        type: ShapeToolType.FOUR_STAR,
        img: "./icon/shape_fourstar.svg",
        title: "四角星"
    },
    {
        type: ShapeToolType.FIVE_STAR,
        img: "./icon/shape_fivestar.svg",
        title: "五角星"
    }
];

interface ShapePanelProps {
    className?: string;
}

const ShapePanel: React.FC<ShapePanelProps> = (props) => {
    const {className} = props;
    const toolTypeContex = useContext(ToolTypeContext);
    const shapeOutlineContext = useContext(ShapeOutlineContext);

    return (
        <div className={className ? `shapepanel ${className}` : "shapepanel"}>
            <div className="shape-container">
                <div className="shape-content">
                    <ShapeTypeContext.Consumer>
                        {
                            ({type, setType}) => shapes.map((shape) => (
                                <img
                                    src={shape.img}
                                    key={shape.img}
                                    title={shape.title}
                                    className={type === shape.type && toolTypeContex.type === ToolType.SHAPE ? `shape-item ${selectedShapeClass}` : "shape-item"}
                                    onClick={() => setType(shape.type)}
                                />
                            ))
                        }
                    </ShapeTypeContext.Consumer>
                </div>
                <div className="shape-style">
                    <FormControl variant="outlined" disabled={toolTypeContex.type === ToolType.SHAPE ? false : true}>
                        <InputLabel>轮廓</InputLabel>
                        <Select
                            value={shapeOutlineContext.type}
                            onChange={(event) => shapeOutlineContext.setType(event.target.value as ShapeOutlineType)}
                            label="轮廓"
                        >
                            <MenuItem value={ShapeOutlineType.SOLID}>实线</MenuItem>
                            <MenuItem value={ShapeOutlineType.DOTTED}>虚线</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="title">形状</div>
        </div>
    );
};

export default ShapePanel;
