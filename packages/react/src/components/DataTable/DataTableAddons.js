import React, { useState } from 'react';

const withAddons = WrappedDataTable => {
  return ({ render, ...passthroughProps }) => {
    const [size, setSize] = useState('normal');

    const augmentedRender = renderProps => {
      renderProps.onSizeChange = val => {
        setSize(val);
      };
      return render(renderProps);
    };

    return (
      <WrappedDataTable
        {...passthroughProps}
        render={augmentedRender}
        size={size}
      />
    );
  };
};

export default withAddons;
