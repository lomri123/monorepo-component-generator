import React, { FC, forwardRef } from 'react';
import { TextProps } from './types';

const ID = 'Text';

export const Text: FC<TextProps> = forwardRef<HTMLDivElement, TextProps>(
  (
    { 'data-selector': dataSelector = ID, className, 'aria-label': ariaLabel },
    ref
  ) => {
    return (
      <div
        className={className}
        aria-label={ariaLabel}
        data-selector={dataSelector}
        ref={ref}
      >
        Text Content
      </div>
    );
  }
);

Text.displayName = 'Text';

export default Object.assign(Text, {
  ID,
}) as typeof Text & {
  ID: string;
};
