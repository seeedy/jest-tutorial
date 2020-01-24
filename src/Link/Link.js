import React, { useState } from "react";

const STATUS = {
    HOVERED: "hovered",
    NORMAL: "normal"
};

export default function Link(props) {
    const [status, setStatus] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        return setStatus(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        return setStatus(STATUS.NORMAL);
    };

    return (
        <a
            className={status}
            href={props.href || "#"}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {props.children}
        </a>
    );
}
