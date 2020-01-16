import React, { useState } from 'react';

const withAddons = (WrappedDataTable) => {
  return ({ render, initialSize, ...passthroughProps }) => {
    const [selectedSize, setSelectedSize] = useState(initialSize);
    const augmentedRender = renderProps => {
      const augmentedRenderProps = {
        ...renderProps,
        onSizeChange: value => setSelectedSize(value),
      };
      return render(augmentedRenderProps);
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
