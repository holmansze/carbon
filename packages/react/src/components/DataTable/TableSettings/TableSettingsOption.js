/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';
const { prefix } = settings;

const TableSettingsOption = React.forwardRef(({ children }, ref) => (
  <li
    ref={ref}
    className={`${prefix}--table-settings-menu__option`}
    role="menuitem">
    {children}
  </li>
));

TableSettingsOption.propTypes = {
  /**
   * Specify the contents of the ToolbarOption
   */
  children: PropTypes.node,
};

export default TableSettingsOption;
