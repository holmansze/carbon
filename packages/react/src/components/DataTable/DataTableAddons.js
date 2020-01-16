import React, { useState } from 'react';

const withAddons = (WrappedDataTable) => {
  return ({ render, initialSize, ...passthroughProps }) => {
    const [selectedSize, setSelectedSize] = useState(initialSize);
    const augmentedRender = renderProps => {
      renderProps.onSizeChange = val => {
        setSelectedSize(val);
      };
      return render(renderProps);
    };

    return (
      <WrappedDataTable
        {...passthroughProps}
        render={augmentedRender}
        size={selectedSize}
      />
    );
  };
};

export default withAddons;
