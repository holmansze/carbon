/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Restart16 } from '@carbon/icons-react';
import Button from '../../Button';

const translationKeys = {
  'carbon.table.toolbar.settings.reset.label': 'Reset',
};
const translateWithId = id => {
  return translationKeys[id];
};

const TableSettingsReset = ({
  defaultSettings,
  handleMenuItemFocus,
  onClick: onClickProp,
  closeMenu,
  translateWithId: t,
}) => {
  const onClick = () => {
    onClickProp(defaultSettings);
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <Button
      data-table-settings-item-focusable
      renderIcon={Restart16}
      iconDescription={ t('carbon.table.toolbar.settings.reset.label') }
      disabled={false}
      onClick={onClick}
      onKeyDown={handleMenuItemFocus}
    >
      { t('carbon.table.toolbar.settings.reset.label') }
    </Button>
  );
};

TableSettingsReset.propTypes = {
  /**
   * Provide default settings to reset to
   */
  defaultSettings: PropTypes.object.isRequired,

  /**
   * Provide an optional hook that is called each time the selection is updated
   */
  onClick: PropTypes.func,
  /**
   * Provide custom text for the component for each translation id
   */
  translateWithId: PropTypes.func.isRequired,
};

TableSettingsReset.defaultProps = {
  translateWithId,
};

export default TableSettingsReset;
