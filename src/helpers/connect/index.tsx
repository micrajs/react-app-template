import React, { memo } from 'react';

export const connect = function <P = any, CP = any>(
  setup: (props: P) => CP,
  Component: React.ComponentType<CP>,
) {
  return memo((props: P) => <Component {...setup(props)} />);
};
