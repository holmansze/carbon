/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import DataTable, {
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from '../../DataTable';
import { headers } from './shared';

import cx from 'classnames';
import './with-horizontal-scrolling.css';

export const initialRows = [
  {
    id: 'a',
    name: 'Load Balancer 3 long long long long long long long long long',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Kevins VM Groups long long long long long long',
    status: 'Disabled',
  },
  {
    id: 'b',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Maureens VM Groups',
    status: 'Starting',
  },
  {
    id: 'c',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'd',
    name: 'Load Balancer 6',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Marcs VM Groups',
    status: 'Disabled',
  },
  {
    id: 'e',
    name: 'Load Balancer 4',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Mels VM Groups',
    status: 'Starting',
  },
  {
    id: 'f',
    name: 'Load Balancer 5',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Ronjas VM Groups',
    status: 'Active',
  },
];

export default props => (
  <DataTable
    rows={initialRows}
    headers={headers}
    isXScrollable={true}
    {...props}
    render={({
      rows,
      headers,
      getHeaderProps,
      getRowProps,
      getTableProps,
      getTableContainerProps,
    }) => (
      <TableContainer
        title="DataTable"
        description="With default options"
        {...getTableContainerProps()}>
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map((header, i) => (
                <TableHeader
                  {...getHeaderProps({ header })}
                  className={cx({ sticky: i === 0 })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow {...getRowProps({ row })}>
                {row.cells.map((cell, i) => (
                  <TableCell key={cell.id} className={cx({ sticky: i === 0 })}>
                    {cell.value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  />
);
