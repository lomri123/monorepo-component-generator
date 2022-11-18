import React from "react";
import MonorepoButton from "..";
export default {
    title: "Basics/Button",
    component: MonorepoButton,
    argTypes: {
        roll: { control: "boolean" },
    },
};
const Template = (args) => (React.createElement(MonorepoButton, { ...args }));
export const Label = Template.bind({});
Label.args = {
    label: "Button",
    roll: true,
};
//# sourceMappingURL=Button.stories.js.map