/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../Button';
import DataTable, {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
} from '..';

import { withSettings, withMenuFocus } from '../hoc';

import { TableSettingsSize, TableSettingsColumns } from '../TableSettings';

import { initialRows, headers } from './shared';

import '../TableSettings/data-table-settings.css';

const sizeOptions = ['short', 'normal', 'tall'];
const initialSize = "normal";

const headerOptions = [...headers];
const initialCols = headerOptions
  .map(header => header.key)
  .filter(item => item !== 'protocol');

const DataTableWithEditColumns = withSettings(DataTable);
const TableToolbarMenuWithMenuFocus = withMenuFocus(TableToolbarMenu);

export default props => (
  <DataTableWithEditColumns
    rows={initialRows}
    headers={headers}
    initialSize={initialSize}
    initialCols={initialCols}
    {...props}
    render={({
      rows,
      headers,
      getHeaderProps,
      getRowProps,
      getTableProps,
      onInputChange,
      onSizeChange,
      onColumnsChange,
      getTableContainerProps,
    }) => (
      <TableContainer
        title="DataTable"
        description="With toolbar"
        {...getTableContainerProps()}>
        <TableToolbar>
          <TableToolbarContent>
            <TableToolbarSearch onChange={onInputChange} />
            <TableToolbarMenuWithMenuFocus>
              <TableSettingsSize
                size={initialSize}
                sizeOptions={sizeOptions}
                onChange={onSizeChange}
              />
              <TableSettingsColumns
                initialCols={initialCols}
                headerOptions={headerOptions}
                onChange={onColumnsChange}
              />
            </TableToolbarMenuWithMenuFocus>
            <Button onClick={action('ButtonCLick')}>Primary Button</Button>
          </TableToolbarContent>
        </TableToolbar>
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow {...getRowProps({ row })}>
                {row.cells.map(cell => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  />
);
