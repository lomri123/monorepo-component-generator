import React from "react";
import { roll } from "@monorepo/diceroll";

export interface MonorepoButtonProps {
  label: string;
  roll?: true;
}

const MonorepoButton = (props: MonorepoButtonProps): JSX.Element => {
  return (
    <button>
      {props.label} {props.roll ? roll("1d20") : ""}
    </button>
  );
};

export default MonorepoButton;
