import React from 'react';

import { roll } from '@monorepo/diceroll';
import Text from '@monorepo/text';

export const App = (): JSX.Element => {
  return (
    <div>
      {roll('1d20')}
      <Text />
    </div>
  );
};
