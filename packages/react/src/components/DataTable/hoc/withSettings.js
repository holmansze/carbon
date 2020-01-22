import React, { useState } from 'react';

/*
 * Higer Order Component that wraps DataTable,
 * returning a new component with table settings support
 */
const withSettings = (WrappedDataTable) => {
  return ({ render, headers, initialSize, initialCols, ...passthroughProps }) => {
    const [selectedSize, setSelectedSize] = useState(initialSize);
    const [selectedCols, setSelectedCols] = useState(initialCols);
    const augmentedRender = renderProps => {
      const augmentedRenderProps = {
        ...renderProps,
        size: selectedSize,
        onSizeChange: value => setSelectedSize(value),
        cols: selectedCols,
        onColumnsChange: value => setSelectedCols([...value]),
        onReset: (value) => {
          if (value.defaultSize) {
            setSelectedSize(value.defaultSize);
          }
          if (value.defaultCols) {
            setSelectedCols([...value.defaultCols]);
          }
        },
      };
      return render(augmentedRenderProps);
    };

    const selectedHeaders = headers.filter(h => selectedCols.includes(h.key));

    return (
      <WrappedDataTable
        {...passthroughProps}
        render={augmentedRender}
        size={selectedSize}
        headers={selectedHeaders}
      />
    );
  };
};

export default withSettings;
