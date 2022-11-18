import React from "react";

import { roll } from "@monorepo/diceroll";
import MonorepoButton from "@monorepo/button";

export const App = (): JSX.Element => {
  return (
    <div>
      {roll("1d20")}
      <MonorepoButton label="test" />
    </div>
  );
};
