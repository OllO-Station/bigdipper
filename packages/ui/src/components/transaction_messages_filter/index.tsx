import { useTransactionsFilter } from '@/components/transaction_messages_filter/hooks';
import useStyles from '@/components/transaction_messages_filter/styles';
import { getFilterLabels } from '@/components/transaction_messages_filter/utils';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import FilterIcon from 'shared-utils/assets/icon-filter.svg';

type TransactionMessagesFilterProps = {
  className?: string;
  callback: (value: string) => void;
};

const TransactionMessagesFilter: FC<TransactionMessagesFilterProps> = ({ className, callback }) => {
  const filterLabels = getFilterLabels();
  const { t } = useTranslation('transactions');
  const { classes, cx } = useStyles();
  const { handleSelect, selectedFilter } = useTransactionsFilter(callback);

  return (
    <Select
      IconComponent={ExpandMoreIcon}
      className={cx(classes.select, className)}
      displayEmpty
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
      }}
      value={selectedFilter}
      renderValue={
        selectedFilter !== ''
          ? undefined
          : () => (
              <Typography variant="body1" noWrap component="div" className={classes.filterLabel}>
                <FilterIcon className={classes.filterIcon} />
                {t('filterBy')}
              </Typography>
            )
      }
      input={<InputBase />}
    >
      {filterLabels.map((x) => (
        <MenuItem
          key={x.key}
          onClick={() => handleSelect(x)}
          value={x.key}
          className={classes.item}
        >
          <Typography variant="body1" noWrap>
            {t(x.display)}
          </Typography>
        </MenuItem>
      ))}
    </Select>
  );
};

export default TransactionMessagesFilter;
