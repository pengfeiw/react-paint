import React from "react";
import {useContext} from "react";
import {ColorContext} from "../../../context";
import {ColorType} from "../toolType";
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
        value: "#000000"
    },
    {
        title: "灰色-50%",
        value: "#7f7f7f"
    },
    {
        title: "深红色",
        value: "#880015"
    },
    {
        title: "红色",
        value: "#ed1c24"
    },
    {
        title: "橙色",
        value: "#ff7f27"
    },
    {
        title: "黄色",
        value: "#fff200"
    },
    {
        title: "绿色",
        value: "#22b14c"
    },
    {
        title: "青绿色",
        value: "#00a2e8"
    },
    {
        title: "蓝青色",
        value: "#3f48cc"
    },
    {
        title: "紫色",
        value: "#a349a4"
    },
    {
        title: "白色",
        value: "#ffffff"
    },
    {
        title: "灰色-25%",
        value: "#c3c3c3"
    },
    {
        title: "褐色",
        value: "#b97a57"
    },
    {
        title: "玫瑰色",
        value: "#ffaec9"
    },
    {
        title: "金色",
        value: "#ffc90e"
    },
    {
        title: "浅黄色",
        value: "#efe4b0"
    },
    {
        title: "酸橙色",
        value: "#b5e61d"
    },
    {
        title: "青绿色",
        value: "#808000"
    },
    {
        title: "淡青蓝色",
        value: "#99d9ea"
    },
    {
        title: "蓝灰色",
        value: "#7092be"
    },
    {
        title: "淡紫色",
        value: "#c8bfe7"
    }
];

const activeColorTypeCls = "active-color-type";

const ColorPanel: React.FC<ColorPanelProps> = (props) => {
    const {className} = props;
    const [pickerColor, setPickerColor] = useState(createColor("black"));
    const colorContext = useContext(ColorContext);
    const activeColorType = colorContext.activeColor;

    useEffect(() => {
        colorContext.setColor(pickerColor.hex);
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
                </div>
            </div>
            <div className="title">颜色</div>
        </div>
    );
};

export default ColorPanel;
