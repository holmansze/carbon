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

const TableSettingsTitle = React.forwardRef(({ title }, ref) => (
  <li
    ref={ref}
    className={`${prefix}--table-settings-menu__title`}
    role="menuitem">
    {title}
  </li>
));

TableSettingsTitle.propTypes = {
  /**
   * Specify the title of the Toolbar
   */
  title: PropTypes.string,
};

export default TableSettingsTitle;
