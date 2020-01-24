import React, { useState } from "react";

export default function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(false);

    const onChange = () => {
        return setIsChecked(!isChecked);
    };

    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            {isChecked ? props.labelOn : props.labelOff}
        </label>
    );
}
