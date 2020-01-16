import React, { useState, useEffect } from 'react';
import { match, keys } from '../../../internal/keyboard';

/*
 * Higer Order Component that wraps TableToolbarMenu,
 * returning a new component with keyboard navigation menu focus support
 */
const withMenuFocus = (WrappedToolbarMenu) => {
  return ({ children, ...props }) => {
    const [focused, setFocus] = useState(0);

    useEffect(() => {
      updateMenuFocus();
    });

    const updateMenuFocus = () => {
      const nodes = [
        ...document.querySelectorAll('[data-table-settings-item-focusable]'),
      ];
      if (nodes && focused >= 0 && nodes[focused]) {
        nodes[focused].focus();
      }
    };

    const handleMenuItemFocus = evt => {
      const nodes = [
        ...document.querySelectorAll('[data-table-settings-item-focusable]'),
      ];
      const len = nodes.length;
      if (len > 0 && match(evt, keys.ArrowDown)) {
        setFocus((focused + 1) % len);
      } else if (len > 0 && match(evt, keys.ArrowUp)) {
        setFocus((focused - 1 + len) % len);
      }
    };

    const childrenWithProps = React.Children.toArray(
      React.Children.toArray(children)
    ).map(child =>
      React.cloneElement(child, {
        handleMenuItemFocus,
      })
    );

    return (
      <WrappedToolbarMenu
        {...props}
        onOpen={updateMenuFocus}
      >
        {childrenWithProps}
      </WrappedToolbarMenu>
    );
  };
};

export default withMenuFocus;
