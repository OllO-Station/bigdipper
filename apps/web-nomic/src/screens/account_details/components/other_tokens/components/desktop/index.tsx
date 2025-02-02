import React, { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import type { OtherTokenType } from '@/screens/account_details/types';
import { formatNumber } from '@/utils/format_token';
import { columns } from '@/screens/account_details/components/other_tokens/components/desktop/utils';

type DesktopProps = {
  className?: string;
  items?: OtherTokenType[];
};

const Desktop: FC<DesktopProps> = ({ className, items }) => {
  const { t } = useTranslation('accounts');

  const formattedItems = items?.map((x, i) => ({
    key: i,
    token: x.denom.toUpperCase(),
    available: formatNumber(x.available.value, x.available.exponent),
  }));

  return (
    <div className={className}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.key}
                align={column.align}
                style={{ width: `${column.width}%` }}
              >
                {t(column.key)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedItems?.map((row) => (
            <TableRow key={`holders-row-${row.key}`}>
              {columns.map((column) => (
                <TableCell
                  key={`holders-row-${row.key}-${column.key}`}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {row[column.key as keyof typeof row]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
