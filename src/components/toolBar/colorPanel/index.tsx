import React from "react";
import {useContext} from "react";
import {ColorContext} from "../../../context";
import {ColorType} from "../../../util/toolType";
import {ColorPicker, createColor} from "material-ui-color";
import "./index.less";
import {useState} from "react";
import {useEffect} from "react";

interface ColorPanelProps {
    className?: string;
}

const colors = [
    {
        title: "黑色",
        value: "#000000ff"
    },
    {
        title: "灰色-50%",
        value: "#7f7f7fff"
    },
    {
        title: "深红色",
        value: "#880015ff"
    },
    {
        title: "红色",
        value: "#ed1c24ff"
    },
    {
        title: "橙色",
        value: "#ff7f27ff"
    },
    {
        title: "黄色",
        value: "#fff200ff"
    },
    {
        title: "绿色",
        value: "#22b14cff"
    },
    {
        title: "青绿色",
        value: "#00a2e8ff"
    },
    {
        title: "蓝青色",
        value: "#3f48ccff"
    },
    {
        title: "紫色",
        value: "#a349a4ff"
    },
    {
        title: "白色",
        value: "#ffffffff"
    },
    {
        title: "灰色-25%",
        value: "#c3c3c3ff"
    },
    {
        title: "褐色",
        value: "#b97a57ff"
    },
    {
        title: "玫瑰色",
        value: "#ffaec9ff"
    },
    {
        title: "金色",
        value: "#ffc90eff"
    },
    {
        title: "浅黄色",
        value: "#efe4b0ff"
    },
    {
        title: "酸橙色",
        value: "#b5e61dff"
    },
    {
        title: "青绿色",
        value: "#808000ff"
    },
    {
        title: "淡青蓝色",
        value: "#99d9eaff"
    },
    {
        title: "蓝灰色",
        value: "#7092beff"
    },
    {
        title: "淡紫色",
        value: "#c8bfe7ff"
    }
];

const activeColorTypeCls = "active-color-type";

const ColorPanel: React.FC<ColorPanelProps> = (props) => {
    const {className} = props;
    const [pickerColor, setPickerColor] = useState(createColor("#000000FF"));
    const colorContext = useContext(ColorContext);
    const activeColorType = colorContext.activeColor;

    useEffect(() => {
        colorContext.setColor(`#${pickerColor.hex}`);
    }, [pickerColor]);

    return (
        <div className={className ? `colorpanel ${className}` : "colorpanel"}>
            <div className="content">
                <div className="color-result">
                    <div onClick={() => colorContext.setActiveColor(ColorType.MAIN)} className={activeColorType === ColorType.MAIN ? `main-color ${activeColorTypeCls}` : "main-color"}>
                        <div className="color-box1" style={{backgroundColor: colorContext.mainColor}} />
                        <div>颜色1</div>
                    </div>
                    <div onClick={() => colorContext.setActiveColor(ColorType.SUB)} className={activeColorType === ColorType.SUB ? `sub-color ${activeColorTypeCls}` : "sub-color"}>
                        <div className="color-box2" style={{backgroundColor: colorContext.subColor}} />
                        <div>颜色2</div>
                    </div>
                </div>
                <div className="color-template">
                    {
                        colors.map((color) => (
                            <div onClick={() => colorContext.setColor(color.value)} key={color.value} className="color-template-item" style={{backgroundColor: color.value}} />
                        ))
                    }
                </div>
                <div className="color-picker">
                    <ColorPicker value={pickerColor} hideTextfield onChange={(color) => setPickerColor(color)} />
                    <div className="color-picker-title">编辑颜色</div>
                </div>
            </div>
            <div className="title">颜色</div>
        </div>
    );
};

export default ColorPanel;
