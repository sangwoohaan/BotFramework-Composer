import React from 'react';

import { CollapsedEventNodeSize, EventNodeLayout } from '../../shared/elementSizes';
import { getElementColor } from '../../shared/elementColors';
import { DialogGroup } from '../../shared/appschema';

const ElementWidth = CollapsedEventNodeSize.width;
const ElementHeight = CollapsedEventNodeSize.height;
const ElementMarginX = EventNodeLayout.marginX;
const ElementMarginY = EventNodeLayout.marginX;
const maxBlockHeight = (ElementHeight + ElementMarginY) * 2;
export const CollapsedRuleGroup = ({ count }) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(
      <div
        key={i}
        style={{
          width: ElementWidth,
          height: ElementHeight,
          background: getElementColor(DialogGroup.RULE).collapsed,
          margin: `0 ${ElementMarginX}px ${ElementMarginY}px 0`,
        }}
      />
    );
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', maxHeight: maxBlockHeight, overflow: 'hidden' }}>{items}</div>
  );
};