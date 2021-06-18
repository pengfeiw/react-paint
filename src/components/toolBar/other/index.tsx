import React from "react";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import "./index.less";
import {useContext} from "react";
import {DispatcherContext} from "../../../context";
import {CLEAR_EVENT} from "../../../util/dispatcher/event";

const OtherOperator = () => {
    const dispatcherContext = useContext(DispatcherContext);

    const clearCanvas = () => {
        dispatcherContext.dispatcher.dispatch(CLEAR_EVENT);
    };

    return (
        <div className="otherOperator">
            <span title="清空画布" className="operator-item">
                <ClearAllIcon onClick={clearCanvas} />
            </span>
        </div>
    );
};

export default OtherOperator;
