// example for async component

import React, { useState } from "react";
import axios from "axios";

export default function ApiCall({ url }) {
    const [greeting, setGreeting] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    const fetchGreeting = async () => {
        const response = await axios.get(url);
        const { data } = response;
        const { greeting } = data;
        setGreeting(greeting);
        setButtonClicked(true);
    };

    const buttonText = buttonClicked ? "OK" : "Load Greeting";

    return (
        <div>
            <button onClick={fetchGreeting} disabled={buttonClicked}>
                {buttonText}
            </button>
            {greeting ? <h1>{greeting}</h1> : null}
        </div>
    );
}
