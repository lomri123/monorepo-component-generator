import React from "react";
import { roll } from "@monorepo/diceroll";
const MonorepoButton = (props) => {
    return (React.createElement("button", null,
        props.label,
        " ",
        props.roll ? roll("1d20") : ""));
};
export default MonorepoButton;
//# sourceMappingURL=button.js.map