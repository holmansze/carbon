/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TableSettingsTitle from './TableSettingsTitle';
import TableSettingsOption from './TableSettingsOption';
import Checkbox from '../../Checkbox';

const translationKeys = {
  'carbon.table.toolbar.columns.label': 'Edit column',
};
const translateWithId = id => {
  return translationKeys[id];
};

const TableSettingsColumns = React.forwardRef(
  (
    {
      headerOptions,
      initialCols,
      onChange: onChangeProp,
      handleMenuItemFocus,
      translateWithId: t,
    },
    ref
  ) => {
    const [selected, setSelected] = useState(initialCols);

    const onChange = (checked, id) => {
      const selectedSet = new Set(selected);
      if (checked) {
        selectedSet.add(id);
      } else {
        selectedSet.delete(id);
      }
      setSelected([...selectedSet]);
      onChangeProp([...selectedSet]);
    };

    return (
      <React.Fragment>
        <TableSettingsTitle
          ref={ref}
          title={t('carbon.table.toolbar.columns.label')}
        />
        {headerOptions.map(header => (
          <TableSettingsOption key={header.key}>
            <Checkbox
              id={header.key}
              labelText={header.header}
              defaultChecked={selected.includes(header.key)}
              onChange={onChange}
              onKeyDown={handleMenuItemFocus}
              data-table-toolbar-focusable
            />
          </TableSettingsOption>
        ))}
      </React.Fragment>
    );
  }
);

TableSettingsColumns.propTypes = {
  /**
   * Provide an array of columns
   */
  headerOptions: PropTypes.array.isRequired,
  /**
   * Provide an optional array of initially selected columns
   */
  initialCols: PropTypes.array,
  /**
   * Provide an optional hook that is called each time the selection is updated
   */
  onChange: PropTypes.func,
  /**
   * Provide an optional hook that is called each time a key is pressed
   */
  handleMenuItemFocus: PropTypes.func,
  /**
   * Provide custom text for the component for each translation id
   */
  translateWithId: PropTypes.func.isRequired,
};

TableSettingsColumns.defaultProps = {
  headerOptions: [],
  initialCols: [],
  translateWithId,
};

export default TableSettingsColumns;
