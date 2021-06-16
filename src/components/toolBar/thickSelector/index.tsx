import React from "react";
import Popover from "@material-ui/core/Popover";
import "./index.less";
import {useState} from "react";
import {LineWidthType} from "../../../util/toolType";
import {useContext} from "react";
import {LineWidthContext} from "../../../context";

interface ThickSelectorProps {
    className?: string;
}

const thicks = [
    {
        type: LineWidthType.THIN,
        img: "./icon/thickline1.svg",
        title: "1px"
    },
    {
        type: LineWidthType.MIDDLE,
        img: "./icon/thickline2.svg",
        title: "2px"
    },
    {
        type: LineWidthType.BOLD,
        img: "./icon/thickline3.svg",
        title: "3px"
    },
    {
        type: LineWidthType.MAXBOLD,
        img: "./icon/thickline4.svg",
        title: "4px"
    }
];

const selectedClass = "selected-item";

const ThickSelector: React.FC<ThickSelectorProps> = (props) => {
    const {className} = props;
    const [open, setOpen] = useState<boolean>(false);
    const [anchorEle, setAnchorEle] = useState<HTMLImageElement>();
    const lineWidthContext = useContext(LineWidthContext);

    const onOpen: React.MouseEventHandler<HTMLImageElement> = (event) => {
        setAnchorEle(event.currentTarget);
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className={className ? `thickselector ${className}` : "thickselector"}>
            <img className="thickline" src="./icon/thickness.svg" onClick={onOpen} />
            <Popover
                open={open}
                onClose={onClose}
                anchorEl={anchorEle}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                {
                    thicks.map((thick) => (
                        <img
                            className={thick.type === lineWidthContext.type ? `thick-item ${selectedClass}` : "thick-item"}
                            src={thick.img}
                            key={thick.img}
                            title={thick.title}
                            onClick={() => lineWidthContext.setType(thick.type)}
                        />
                    ))
                }
            </Popover>
            <div className="title">粗细</div>
        </div>
    );
};

export default ThickSelector;
