import React from "react";
import "./index.less";
import ToolPanel from "./tool";
import ShapePanel from "./shape";
import Divider from "@material-ui/core/Divider";

const Toolbar = () => {
    return (
        <div className="toolbar">
            <ToolPanel className="toolbar-item" />
            <Divider className="divider" orientation="vertical" flexItem />
            <ShapePanel className="toolbar-item" />
        </div>
    );
};

export default Toolbar;
