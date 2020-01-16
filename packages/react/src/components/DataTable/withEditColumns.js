import React, { useState } from 'react';

const withEditColumns = (WrappedDataTable) => {
  return ({ render, headers, initialSize, initialCols, ...passthroughProps }) => {
    const [selectedSize, setSelectedSize] = useState(initialSize);
    const [selectedCols, setSelectedCols] = useState(initialCols);
    const augmentedRender = renderProps => {
      const augmentedRenderProps = {
        ...renderProps,
        onSizeChange: value => setSelectedSize(value),
        onColumnsChange: value => setSelectedCols([...value]),
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

export default withEditColumns;
